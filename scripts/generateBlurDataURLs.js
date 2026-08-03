/**
 * scripts/generateBlurDataURLs.js
 * Generates base64 blur placeholder data URLs for all public images.
 * Outputs a TS module: lib/blurDataUrls.ts
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const publicImagesDir = path.join(root, "public", "images");
const outputFile = path.join(root, "lib", "blurDataUrls.ts");

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function generateBlurs() {
  const blurs = {};

  function walkDir(dir, prefix = "") {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const relKey = (prefix ? `${prefix}/${e.name}` : e.name).replace(/\\/g, "/");
      if (e.isDirectory()) {
        walkDir(full, relKey);
      } else if (e.isFile()) {
        const ext = path.extname(e.name).toLowerCase();
        if (SUPPORTED_EXTS.has(ext)) {
          blurs[relKey] = null; // placeholder, filled below
        }
      }
    }
  }

  walkDir(publicImagesDir);

  for (const key of Object.keys(blurs)) {
    const fullPath = path.join(publicImagesDir, key);
    try {
      const buffer = await sharp(fullPath)
        .resize(8, 8, { fit: "inside" })
        .blur(1)
        .jpeg({ quality: 50 })
        .toBuffer();
      blurs[key] = `data:image/jpeg;base64,${buffer.toString("base64")}`;
    } catch (err) {
      console.warn(`Blur failed for ${key}:`, err.message);
      blurs[key] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }
  }

  const entries = Object.entries(blurs)
    .map(([k, v]) => `  "${k}": "${v}"`)
    .join(",\n");

  const tsContent = `// AUTO-GENERATED — DO NOT EDIT MANUALLY
// Run: node scripts/generateBlurDataURLs.js
export const blurDataUrls: Record<string, string> = {\n${entries}\n};\n
export function getBlurDataUrl(imageName: string): string {
  return blurDataUrls[imageName] ?? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
}
`;

  fs.writeFileSync(outputFile, tsContent);
  console.log(`Generated blur data URLs for ${Object.keys(blurs).length} images → ${outputFile}`);
}

generateBlurs();
