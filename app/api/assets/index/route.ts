import { NextResponse } from "next/server";
import { scanProjectMediaAssets } from "@/lib/mediaAssetScanner";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const assets = scanProjectMediaAssets();
    return NextResponse.json({
      success: true,
      total: assets.length,
      assets,
    });
  } catch (error) {
    console.error("Error scanning project media assets:", error);
    return NextResponse.json(
      { success: false, error: "Failed to scan media assets" },
      { status: 500 }
    );
  }
}
