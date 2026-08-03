/**
 * scripts/analyzeDuplicates.js
 * Finds exact duplicate images by MD5 hash and generates a report.
 * Does NOT delete anything — humans review the report first.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const ignore = new Set([
  ".next", "node_modules", ".git", ".agents", ".gemini",
  "assets_backup", "assets_archive", "claude-seo",
]);
const imageExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);

const images = [];
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
        const rel = path.relative(root, full).replace(/\\/g, "/");
        const buf = fs.readFileSync(full);
        const hash = crypto.createHash("md5").update(buf).digest("hex");
        images.push({ rel, full, name: e.name, ext, size: stat.size, hash });
        if (!hashMap.has(hash)) hashMap.set(hash, []);
        hashMap.get(hash).push({ rel, size: stat.size });
      }
    }
  }
}

walkDir(root);

const duplicateSets = Array.from(hashMap.entries())
  .filter(([, list]) => list.length > 1);

let totalWastedBytes = 0;
const reportLines = ["# DUPLICATE_IMAGES.md\n", `Generated: ${new Date().toISOString()}\n`];
reportLines.push(`## Summary\n`);
reportLines.push(`- Total images scanned: **${images.length}**`);
reportLines.push(`- Duplicate image sets found: **${duplicateSets.length}**\n`);

for (const [hash, items] of duplicateSets) {
  const wastedBytes = items.slice(1).reduce((s, i) => s + i.size, 0);
  totalWastedBytes += wastedBytes;
  reportLines.push(`### Hash: \`${hash}\``);
  reportLines.push(`Wasted: **${(wastedBytes / 1024).toFixed(1)} KB** (${items.length - 1} duplicate${items.length - 1 > 1 ? "s" : ""})`);
  reportLines.push("```");
  items.forEach((item, idx) => {
    reportLines.push(`${idx === 0 ? "✅ KEEP   " : "🗑  DUPLICATE"} ${item.rel} (${(item.size / 1024).toFixed(1)} KB)`);
  });
  reportLines.push("```\n");
}

reportLines.push(`\n## Total Wasted by Duplicates: ${(totalWastedBytes / 1024).toFixed(1)} KB (${(totalWastedBytes / (1024 * 1024)).toFixed(2)} MB)`);

const reportPath = path.join(root, "DUPLICATE_IMAGES.md");
fs.writeFileSync(reportPath, reportLines.join("\n"));
console.log(`Duplicate report written to ${reportPath}`);
console.log(`Duplicate sets: ${duplicateSets.length}, Wasted: ${(totalWastedBytes / (1024 * 1024)).toFixed(2)} MB`);
