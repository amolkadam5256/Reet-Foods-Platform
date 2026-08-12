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

export type AssetSortBy = "name" | "size" | "date";
export type AssetSortOrder = "asc" | "desc";
export type AssetViewMode = "grid" | "list";
