import fs from "fs";
import path from "path";
import { type NextRequest, NextResponse } from "next/server";

const MIME_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await context.params;
    if (!pathSegments || pathSegments.length === 0) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const relPath = pathSegments.join("/");
    const rootDir = process.cwd();

    // Try relative path as-is, or prefixed with assets/ or public/
    const candidatePaths = [
      path.resolve(rootDir, relPath),
      path.resolve(rootDir, "assets", relPath),
      path.resolve(rootDir, "public", relPath),
    ];

    let foundPath: string | null = null;
    for (const candidate of candidatePaths) {
      if (candidate.startsWith(rootDir) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        foundPath = candidate;
        break;
      }
    }

    if (!foundPath) {
      return new NextResponse("Image Not Found", { status: 404 });
    }

    const ext = path.extname(foundPath).toLowerCase();
    const mimeType = MIME_TYPES[ext];

    if (!mimeType) {
      return new NextResponse("Unsupported image format", { status: 400 });
    }

    const fileBuffer = fs.readFileSync(foundPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Error serving dynamic asset path:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
