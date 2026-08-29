import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: "Project asset serving is disabled in production.",
    },
    { status: 404 },
  );
}
