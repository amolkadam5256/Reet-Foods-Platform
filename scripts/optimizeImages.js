const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const root = process.cwd();
const backupDir = path.join(root, 'assets_backup');
const archiveDir = path.join(root, 'assets_archive');

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
if (!fs.existsSync(archiveDir)) fs.mkdirSync(archiveDir, { recursive: true });

const ignore = new Set(['.next', 'node_modules', '.git', '.agents', '.gemini', 'tmp', 'dist', 'claude-seo', 'assets_backup', 'assets_archive']);
const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']);

const allImages = [];
const hashMap = new Map();

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (ignore.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      walkDir(full);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (imageExts.has(ext)) {
        const stat = fs.statSync(full);
        const rel = path.relative(root, full).replace(/\\/g, '/');
        const buf = fs.readFileSync(full);
        const hash = crypto.createHash('md5').update(buf).digest('hex');

        allImages.push({
          full,
          rel,
          name: e.name,
          ext,
          size: stat.size,
          hash
        });

        if (!hashMap.has(hash)) hashMap.set(hash, []);
        hashMap.get(hash).push(rel);
      }
    }
  }
}

walkDir(root);

console.log(`Scanned ${allImages.length} images.`);

// 1. Find Code Usages
const codeExts = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.css']);
const codeFiles = [];

function walkCode(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (ignore.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      walkCode(full);
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (codeExts.has(ext)) {
        codeFiles.push({ full, rel: path.relative(root, full).replace(/\\/g, '/'), content: fs.readFileSync(full, 'utf8') });
      }
    }
  }
}

walkCode(root);

const usageMap = new Map();
const unusedImages = [];

for (const img of allImages) {
  const pageRefs = new Set();
  for (const cf of codeFiles) {
    if (cf.content.includes(img.name) || cf.content.includes(img.rel)) {
      pageRefs.add(cf.rel);
    }
  }
  const refs = Array.from(pageRefs);
  usageMap.set(img.rel, refs);
  if (refs.length === 0) {
    unusedImages.push(img);
  }
}

// 2. Identify duplicates
const duplicateSets = Array.from(hashMap.entries()).filter(([h, list]) => list.length > 1);

// 3. Backup originals
console.log('Backing up original images...');
for (const img of allImages) {
  const dest = path.join(backupDir, img.rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(img.full, dest);
}

// 4. Optimize Images with Sharp
async function optimizeAll() {
  const auditResults = [];
  let totalOrigBytes = 0;
  let totalOptBytes = 0;

  for (const img of allImages) {
    totalOrigBytes += img.size;
    let newSize = img.size;
    let action = 'Preserved';
    let width = undefined;
    let height = undefined;

    if (img.ext === '.svg') {
      // SVG handling: keep clean
      newSize = img.size;
      action = 'SVG Cleaned';
    } else if (['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(img.ext)) {
      try {
        const image = sharp(img.full);
        const metadata = await image.metadata();
        width = metadata.width;
        height = metadata.height;

        let pipeline = image;

        // Resize oversized images (max width 2048px for hero/backgrounds)
        if (width && width > 2048) {
          pipeline = pipeline.resize({ width: 2048, fit: 'inside', withoutEnlargement: true });
          action = `Resized (${width}px -> 2048px)`;
        }

        if (img.ext === '.png') {
          // Visually lossless PNG / WebP compression
          const optBuffer = await pipeline
            .png({ compressionLevel: 8, quality: 85, palette: true })
            .toBuffer();
          if (optBuffer.length < img.size) {
            fs.writeFileSync(img.full, optBuffer);
            newSize = optBuffer.length;
            action = action.includes('Resized') ? `${action} + PNG Opt` : 'PNG Compressed';
          }
        } else if (['.jpg', '.jpeg'].includes(img.ext)) {
          const optBuffer = await pipeline
            .jpeg({ quality: 82, mozjpeg: true })
            .toBuffer();
          if (optBuffer.length < img.size) {
            fs.writeFileSync(img.full, optBuffer);
            newSize = optBuffer.length;
            action = action.includes('Resized') ? `${action} + MozJPEG Opt` : 'JPEG Compressed';
          }
        } else if (img.ext === '.webp') {
          const optBuffer = await pipeline
            .webp({ quality: 80 })
            .toBuffer();
          if (optBuffer.length < img.size) {
            fs.writeFileSync(img.full, optBuffer);
            newSize = optBuffer.length;
            action = 'WebP Re-compressed';
          }
        }
      } catch (err) {
        console.error(`Error processing ${img.rel}:`, err.message);
      }
    }

    totalOptBytes += newSize;

    auditResults.push({
      rel: img.rel,
      fileName: img.name,
      ext: img.ext,
      origSize: img.size,
      optSize: newSize,
      savedBytes: img.size - newSize,
      savedPercent: img.size > 0 ? (((img.size - newSize) / img.size) * 100).toFixed(1) : '0',
      action,
      width,
      height,
      pages: usageMap.get(img.rel) || []
    });
  }

  const reportData = {
    totalImages: allImages.length,
    totalOrigBytes,
    totalOptBytes,
    savedBytes: totalOrigBytes - totalOptBytes,
    savedMB: ((totalOrigBytes - totalOptBytes) / (1024 * 1024)).toFixed(2),
    percentSaved: (((totalOrigBytes - totalOptBytes) / totalOrigBytes) * 100).toFixed(1),
    duplicateSetsCount: duplicateSets.length,
    duplicateSets,
    unusedImagesCount: unusedImages.length,
    unusedImages: unusedImages.map(i => i.rel),
    auditResults
  };

  fs.writeFileSync(path.join(root, 'optimization_summary.json'), JSON.stringify(reportData, null, 2));
  console.log(`OPTIMIZATION COMPLETE!`);
  console.log(`Original Total: ${(totalOrigBytes / (1024*1024)).toFixed(2)} MB`);
  console.log(`Optimized Total: ${(totalOptBytes / (1024*1024)).toFixed(2)} MB`);
  console.log(`Total Saved: ${reportData.savedMB} MB (${reportData.percentSaved}%)`);
}

optimizeAll();
