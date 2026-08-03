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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const relPath = searchParams.get("path");

    if (!relPath) {
      return new NextResponse("Missing path parameter", { status: 400 });
    }

    const rootDir = process.cwd();
    const resolvedPath = path.resolve(rootDir, relPath);

    // Prevent directory traversal attacks
    if (!resolvedPath.startsWith(rootDir)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const mimeType = MIME_TYPES[ext];

    if (!mimeType) {
      return new NextResponse("Unsupported image format", { status: 400 });
    }

    if (!fs.existsSync(resolvedPath)) {
      return new NextResponse("Image file not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(resolvedPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Error serving image asset:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
