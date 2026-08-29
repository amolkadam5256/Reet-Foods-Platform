import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: 0,
    assets: [],
    message: "Project asset indexing is disabled for production safety.",
  });
}
