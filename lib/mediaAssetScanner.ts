import fs from "fs";
import path from "path";

export type MediaAsset = {
  id: string;
  fileName: string;
  relativePath: string;
  folder: string;
  extension: string;
  sizeBytes: number;
  formattedSize: string;
  mtime: string;
  serveUrl: string;
  width?: number;
  height?: number;
};

const SUPPORTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".gif",
  ".avif",
]);

const EXCLUDED_DIRS = new Set([
  ".next",
  "node_modules",
  ".git",
  ".agents",
  ".gemini",
  "tmp",
  "dist",
  "build",
  "claude-seo",
]);

function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

// Lightweight binary dimension extractor
function getImageDimensions(filePath: string, ext: string): { width?: number; height?: number } {
  try {
    const buffer = Buffer.alloc(4096);
    const fd = fs.openSync(filePath, "r");
    const bytesRead = fs.readSync(fd, buffer, 0, 4096, 0);
    fs.closeSync(fd);

    if (bytesRead < 8) return {};

    // PNG
    if (ext === ".png" && bytesRead >= 24) {
      if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        return { width, height };
      }
    }

    // GIF
    if (ext === ".gif" && bytesRead >= 10) {
      if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) {
        const width = buffer.readUInt16LE(6);
        const height = buffer.readUInt16LE(8);
        return { width, height };
      }
    }

    // JPEG
    if ((ext === ".jpg" || ext === ".jpeg") && bytesRead >= 2) {
      if (buffer[0] === 0xff && buffer[1] === 0xd8) {
        let i = 2;
        while (i < bytesRead - 8) {
          if (buffer[i] !== 0xff) {
            i++;
            continue;
          }
          const marker = buffer[i + 1];
          // SOF0, SOF1, SOF2 markers
          if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
            const height = buffer.readUInt16BE(i + 5);
            const width = buffer.readUInt16BE(i + 7);
            return { width, height };
          }
          const length = buffer.readUInt16BE(i + 2);
          i += 2 + length;
        }
      }
    }

    // SVG
    if (ext === ".svg") {
      const svgText = buffer.toString("utf8", 0, bytesRead);
      const widthMatch = svgText.match(/width=["'](\d+)(?:px)?["']/i);
      const heightMatch = svgText.match(/height=["'](\d+)(?:px)?["']/i);
      if (widthMatch && heightMatch) {
        return { width: parseInt(widthMatch[1], 10), height: parseInt(heightMatch[1], 10) };
      }
      const viewBoxMatch = svgText.match(/viewBox=["'][\d\.\s,-]+\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)["']/i);
      if (viewBoxMatch) {
        return { width: Math.round(parseFloat(viewBoxMatch[1])), height: Math.round(parseFloat(viewBoxMatch[2])) };
      }
    }

    // WebP
    if (ext === ".webp" && bytesRead >= 30) {
      if (buffer.toString("binary", 0, 4) === "RIFF" && buffer.toString("binary", 8, 12) === "WEBP") {
        const vp8Tag = buffer.toString("binary", 12, 16);
        if (vp8Tag === "VP8 " && bytesRead >= 30) {
          const width = buffer.readUInt16LE(26) & 0x3fff;
          const height = buffer.readUInt16LE(28) & 0x3fff;
          return { width, height };
        } else if (vp8Tag === "VP8L" && bytesRead >= 25) {
          const b0 = buffer[21];
          const b1 = buffer[22];
          const b2 = buffer[23];
          const b3 = buffer[24];
          const width = 1 + (((b1 & 0x3f) << 8) | b0);
          const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
          return { width, height };
        } else if (vp8Tag === "VP8X" && bytesRead >= 30) {
          const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
          const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
          return { width, height };
        }
      }
    }
  } catch {
    // Return empty if parsing error
  }
  return {};
}

// In-memory caching mechanism
let cachedAssets: MediaAsset[] | null = null;
let lastScanTime = 0;
const CACHE_TTL_MS = 10000; // 10 seconds check

export function scanProjectMediaAssets(): MediaAsset[] {
  const now = Date.now();
  if (cachedAssets && now - lastScanTime < CACHE_TTL_MS) {
    return cachedAssets;
  }

  const rootDir = process.cwd();
  const assets: MediaAsset[] = [];

  function walk(currentDir: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const name = entry.name;
      if (EXCLUDED_DIRS.has(name)) continue;

      const fullPath = path.join(currentDir, name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.has(ext)) {
          const relPath = path.relative(rootDir, fullPath).replace(/\\/g, "/");
          const folder = path.dirname(relPath).replace(/\\/g, "/");

          let stat: fs.Stats;
          try {
            stat = fs.statSync(fullPath);
          } catch {
            continue;
          }

          const dims = getImageDimensions(fullPath, ext);

          // Build asset URL: /assets/path or /api/assets/serve?path=...
          // For public folder assets: can also be served directly or via serve route
          const serveUrl = `/api/assets/serve?path=${encodeURIComponent(relPath)}`;

          assets.push({
            id: Buffer.from(relPath).toString("base64url"),
            fileName: name,
            relativePath: relPath,
            folder: folder === "." ? "root" : folder,
            extension: ext,
            sizeBytes: stat.size,
            formattedSize: formatBytes(stat.size),
            mtime: stat.mtime.toISOString(),
            serveUrl,
            width: dims.width,
            height: dims.height,
          });
        }
      }
    }
  }

  walk(rootDir);

  // Sort by folder, then name
  assets.sort((a, b) => a.relativePath.localeCompare(b.relativePath));

  cachedAssets = assets;
  lastScanTime = now;
  return assets;
}
