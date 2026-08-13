"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiZoomIn,
  FiZoomOut,
  FiMaximize2,
  FiX,
  FiFolder,
  FiFileText,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiHardDrive,
  FiRefreshCw,
  FiSearch,
  FiFilter,
  FiGrid,
  FiList,
  FiImage,
  FiSliders,
  FiTrash2,
  FiInfo,
  FiEye,
} from "react-icons/fi";
import { AssetsHeader } from "@/components/assets/AssetsHeader";
import { AssetsToolbar } from "@/components/assets/AssetsToolbar";
import type {
  AssetSortBy,
  AssetSortOrder,
  AssetViewMode,
  MediaAsset,
} from "@/components/assets/types";

export default function MediaAssetsPage() {
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [selectedExt, setSelectedExt] = useState<string>("all");
  const [sortBy, setSortBy] = useState<AssetSortBy>("name");
  const [sortOrder, setSortOrder] = useState<AssetSortOrder>("asc");
  const [viewMode, setViewMode] = useState<AssetViewMode>("grid");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeAsset, setActiveAsset] = useState<MediaAsset | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);

  const fetchAssets = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/assets/index");
      const data = await res.json();
      if (data.success) {
        setAssets(data.assets || []);
      } else {
        setError(data.error || "Failed to load assets");
      }
    } catch {
      setError("Network error fetching asset index");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchAssets(false);
  }, []);

  // Compute unique folders and extensions
  const folders = useMemo(() => {
    const set = new Set<string>();
    assets.forEach((a) => set.add(a.folder));
    return Array.from(set).sort();
  }, [assets]);

  const extensions = useMemo(() => {
    const set = new Set<string>();
    assets.forEach((a) => set.add(a.extension));
    return Array.from(set).sort();
  }, [assets]);

  // Filter and sort assets
  const filteredAssets = useMemo(() => {
    let list = [...assets];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.fileName.toLowerCase().includes(q) ||
          a.relativePath.toLowerCase().includes(q) ||
          a.folder.toLowerCase().includes(q),
      );
    }

    if (selectedFolder !== "all") {
      list = list.filter((a) => a.folder === selectedFolder);
    }

    if (selectedExt !== "all") {
      list = list.filter((a) => a.extension === selectedExt);
    }

    list.sort((a, b) => {
      let result = 0;
      if (sortBy === "name") {
        result = a.fileName.localeCompare(b.fileName, undefined, {
          numeric: true,
        });
      } else if (sortBy === "size") {
        result = a.sizeBytes - b.sizeBytes;
      } else if (sortBy === "date") {
        result = new Date(a.mtime).getTime() - new Date(b.mtime).getTime();
      }
      return sortOrder === "asc" ? result : -result;
    });

    return list;
  }, [assets, search, selectedFolder, selectedExt, sortBy, sortOrder]);

  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Paginated items
  const totalPages = Math.ceil(filteredAssets.length / pageSize) || 1;
  const paginatedAssets = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAssets.slice(start, start + pageSize);
  }, [filteredAssets, currentPage, pageSize]);

  const totalSizeBytes = useMemo(() => {
    return filteredAssets.reduce((sum, item) => sum + item.sizeBytes, 0);
  }, [filteredAssets]);

  const formattedTotalSize = useMemo(() => {
    if (totalSizeBytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(totalSizeBytes) / Math.log(k));
    return `${(totalSizeBytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  }, [totalSizeBytes]);

  const copyToClipboard = (asset: MediaAsset) => {
    const fullUrl = `${window.location.origin}${asset.serveUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(asset.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleOpenModal = (asset: MediaAsset) => {
    setActiveAsset(asset);
    setZoomLevel(1);
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveAsset(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf7f1] pb-24 pt-6 text-reef-charcoal">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="mb-8 rounded-3xl border border-reef-gold/20 bg-white/90 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-reef-burgundy">
                <FiHardDrive className="h-4 w-4 text-reef-gold" />
                <span>Media Asset Manager</span>
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-reef-charcoal sm:text-4xl">
                Project Image Library
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-reef-charcoal/70 sm:text-base">
                Real-time indexed explorer for all project image assets across
                all workspace directories.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-reef-gold/15 pt-4 lg:border-t-0 lg:pt-0">
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-3 text-center">
                <p className="text-xl font-bold text-reef-charcoal">
                  {assets.length}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-reef-charcoal/60">
                  Total Assets
                </p>
              </div>
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-3 text-center">
                <p className="text-xl font-bold text-reef-charcoal">
                  {folders.length}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-reef-charcoal/60">
                  Folders
                </p>
              </div>
              <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-3 text-center">
                <p className="text-xl font-bold text-reef-charcoal">
                  {formattedTotalSize}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-reef-charcoal/60">
                  Filtered Size
                </p>
              </div>
              <button
                type="button"
                onClick={() => fetchAssets()}
                disabled={loading}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-reef-gold/30 bg-white px-5 text-sm font-semibold text-reef-charcoal shadow-sm transition hover:border-reef-gold hover:text-reef-burgundy disabled:opacity-50"
              >
                <FiRefreshCw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
                Rescan Index
              </button>
            </div>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="mb-6 rounded-2xl border border-reef-gold/20 bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {/* Search Input */}
            <div className="relative md:col-span-2 lg:col-span-4">
              <FiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
              <input
                type="text"
                placeholder="Search images or paths..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-4 text-sm text-reef-charcoal placeholder-reef-charcoal/40 transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
              />
            </div>

            {/* Folder Select */}
            <div className="lg:col-span-3">
              <div className="relative">
                <FiFolder className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
                <select
                  value={selectedFolder}
                  onChange={(e) => setSelectedFolder(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-8 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
                >
                  <option value="all">All Folders ({folders.length})</option>
                  {folders.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Format Select */}
            <div className="lg:col-span-2">
              <div className="relative">
                <FiFilter className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
                <select
                  value={selectedExt}
                  onChange={(e) => setSelectedExt(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-8 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
                >
                  <option value="all">All Formats</option>
                  {extensions.map((ext) => (
                    <option key={ext} value={ext}>
                      {ext.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort & Order */}
            <div className="lg:col-span-2 flex gap-2">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "size" | "date")
                }
                className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 px-3 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
              >
                <option value="name">Sort by Name</option>
                <option value="size">Sort by Size</option>
                <option value="date">Sort by Date</option>
              </select>
              <button
                type="button"
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                title={`Sort ${sortOrder === "asc" ? "Ascending" : "Descending"}`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-reef-gold/20 bg-reef-cream/40 text-sm font-semibold text-reef-charcoal hover:border-reef-gold"
              >
                {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </div>

            {/* View Switcher */}
            <div className="flex items-center justify-end gap-1.5 lg:col-span-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                  viewMode === "grid"
                    ? "border-reef-gold bg-reef-gold text-white"
                    : "border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-gold"
                }`}
                title="Grid View"
              >
                <FiGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                  viewMode === "list"
                    ? "border-reef-gold bg-reef-gold text-white"
                    : "border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-gold"
                }`}
                title="List View"
              >
                <FiList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse rounded-2xl border border-reef-gold/15 bg-white p-4 shadow-sm"
              >
                <div className="h-48 w-full rounded-xl bg-gray-200" />
                <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
                <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
            <p className="text-lg font-semibold">{error}</p>
            <button
              onClick={() => fetchAssets()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-reef-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              Try Again
            </button>
          </div>
        ) : filteredAssets.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-reef-gold/30 bg-white p-12 text-center shadow-sm">
            <FiFileText className="mx-auto h-12 w-12 text-reef-gold/50" />
            <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-semibold text-reef-charcoal">
              No matching assets found
            </h3>
            <p className="mt-2 text-sm text-reef-charcoal/60">
              Try adjusting your search keyword or clearing the folder/format
              filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedFolder("all");
                setSelectedExt("all");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-reef-gold px-5 py-2.5 text-sm font-semibold text-white hover:brightness-95"
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedAssets.map((asset) => (
              <div
                key={asset.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-reef-gold/20 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-reef-gold hover:shadow-xl"
              >
                {/* Thumbnail Header */}
                <div
                  onClick={() => handleOpenModal(asset)}
                  className="relative flex h-52 w-full cursor-pointer items-center justify-center overflow-hidden bg-reef-cream/60 p-4"
                >
                  <Image
                    src={asset.serveUrl}
                    alt={asset.fileName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />

                  {/* Extension badge */}
                  <span className="absolute left-3 top-3 rounded-md border border-white/60 bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-reef-burgundy shadow-sm backdrop-blur-md">
                    {asset.extension.replace(".", "")}
                  </span>

                  {/* Dimension badge */}
                  {asset.width && asset.height ? (
                    <span className="absolute right-3 top-3 rounded-md border border-white/60 bg-black/65 px-2 py-0.5 text-[10px] font-mono text-white shadow-sm backdrop-blur-md">
                      {asset.width} × {asset.height}
                    </span>
                  ) : null}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-reef-charcoal shadow-lg">
                      <FiMaximize2 className="h-3.5 w-3.5 text-reef-burgundy" />{" "}
                      Preview
                    </span>
                  </div>
                </div>

                {/* Info Footer */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h4
                      className="font-semibold text-reef-charcoal transition hover:text-reef-burgundy truncate text-sm"
                      title={asset.fileName}
                    >
                      {asset.fileName}
                    </h4>
                    <p
                      className="mt-1 flex items-center gap-1 text-xs text-reef-charcoal/60 truncate"
                      title={asset.folder}
                    >
                      <FiFolder className="h-3 w-3 shrink-0 text-reef-gold" />
                      <span className="truncate">{asset.folder}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-reef-gold/10 pt-3 text-xs text-reef-charcoal/60">
                    <span className="font-mono">{asset.formattedSize}</span>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(asset)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-reef-gold/20 bg-reef-cream/50 text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                        title="Copy Asset URL"
                      >
                        {copiedId === asset.id ? (
                          <FiCheck className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <FiCopy className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <a
                        href={asset.serveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-reef-gold/20 bg-reef-cream/50 text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                        title="Open Image directly"
                      >
                        <FiExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="overflow-hidden rounded-2xl border border-reef-gold/20 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-reef-charcoal">
                <thead className="border-b border-reef-gold/15 bg-reef-cream/60 text-xs uppercase tracking-wider text-reef-charcoal/70">
                  <tr>
                    <th className="py-3.5 pl-6 pr-3">Preview</th>
                    <th className="px-3 py-3.5">File Name</th>
                    <th className="px-3 py-3.5">Folder</th>
                    <th className="px-3 py-3.5">Format</th>
                    <th className="px-3 py-3.5">Dimensions</th>
                    <th className="px-3 py-3.5">Size</th>
                    <th className="py-3.5 pl-3 pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-reef-gold/10">
                  {paginatedAssets.map((asset) => (
                    <tr
                      key={asset.id}
                      className="transition hover:bg-reef-cream/30"
                    >
                      <td className="py-3 pl-6 pr-3">
                        <div
                          onClick={() => handleOpenModal(asset)}
                          className="relative h-12 w-12 cursor-pointer overflow-hidden rounded-lg border border-reef-gold/20 bg-reef-cream/60"
                        >
                          <Image
                            src={asset.serveUrl}
                            alt={asset.fileName}
                            fill
                            sizes="48px"
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </td>
                      <td className="px-3 py-3 font-semibold text-reef-charcoal">
                        <button
                          onClick={() => handleOpenModal(asset)}
                          className="hover:text-reef-burgundy text-left font-medium"
                        >
                          {asset.fileName}
                        </button>
                      </td>
                      <td className="px-3 py-3 text-xs text-reef-charcoal/70">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-reef-cream px-2 py-1">
                          <FiFolder className="h-3 w-3 text-reef-gold" />
                          {asset.folder}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <span className="rounded bg-reef-burgundy/10 px-2 py-0.5 font-bold uppercase text-reef-burgundy">
                          {asset.extension.replace(".", "")}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-mono text-xs text-reef-charcoal/70">
                        {asset.width && asset.height
                          ? `${asset.width} × ${asset.height}`
                          : "—"}
                      </td>
                      <td className="px-3 py-3 font-mono text-xs text-reef-charcoal/70">
                        {asset.formattedSize}
                      </td>
                      <td className="py-3 pl-3 pr-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(asset)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-reef-gold/20 bg-white px-3 py-1.5 text-xs font-semibold text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                          >
                            {copiedId === asset.id ? (
                              <>
                                <FiCheck className="h-3.5 w-3.5 text-green-600" />{" "}
                                Copied
                              </>
                            ) : (
                              <>
                                <FiCopy className="h-3.5 w-3.5" /> Copy URL
                              </>
                            )}
                          </button>
                          <a
                            href={asset.serveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-reef-gold/20 bg-white text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                            title="Open direct image"
                          >
                            <FiExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination Section */}
        {filteredAssets.length > 0 ? (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-reef-gold/20 bg-white p-4 shadow-sm sm:flex-row sm:px-6">
            <div className="flex items-center gap-3 text-xs text-reef-charcoal/70">
              <span>
                Showing{" "}
                <strong className="text-reef-charcoal">
                  {(currentPage - 1) * pageSize + 1}
                </strong>{" "}
                to{" "}
                <strong className="text-reef-charcoal">
                  {Math.min(currentPage * pageSize, filteredAssets.length)}
                </strong>{" "}
                of{" "}
                <strong className="text-reef-charcoal">
                  {filteredAssets.length}
                </strong>{" "}
                assets
              </span>

              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="rounded-lg border border-reef-gold/20 bg-reef-cream/40 px-2 py-1 text-xs text-reef-charcoal focus:border-reef-gold"
              >
                <option value={24}>24 per page</option>
                <option value={48}>48 per page</option>
                <option value={96}>96 per page</option>
              </select>
            </div>

            {totalPages > 1 ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-reef-gold/20 bg-white text-reef-charcoal transition hover:border-reef-gold disabled:opacity-40"
                >
                  <FiChevronLeft className="h-4 w-4" />
                </button>

                <span className="px-3 text-xs font-semibold text-reef-charcoal">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-reef-gold/20 bg-white text-reef-charcoal transition hover:border-reef-gold disabled:opacity-40"
                >
                  <FiChevronRight className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Fullscreen Interactive Zoom Preview Modal */}
        {activeAsset ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
            <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl lg:flex-row">
              {/* Image Preview Canvas */}
              <div className="relative flex flex-1 items-center justify-center overflow-auto bg-black/90 p-6">
                <div
                  className="relative flex items-center justify-center transition-transform duration-200 ease-out"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={activeAsset.serveUrl}
                    alt={activeAsset.fileName}
                    className="max-h-[75vh] max-w-full object-contain shadow-2xl"
                  />
                </div>

                {/* Zoom Controls Overlay */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-white backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
                    className="rounded-full p-1.5 transition hover:bg-white/20"
                    title="Zoom Out"
                  >
                    <FiZoomOut className="h-4 w-4" />
                  </button>
                  <span className="px-2 font-mono text-xs font-semibold">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 3))}
                    className="rounded-full p-1.5 transition hover:bg-white/20"
                    title="Zoom In"
                  >
                    <FiZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    className="ml-2 rounded-full border border-white/30 px-2 py-0.5 text-[10px] uppercase font-bold hover:bg-white/20"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Sidebar Asset Info */}
              <div className="flex w-full flex-col justify-between border-t border-reef-gold/15 bg-white p-6 lg:w-96 lg:border-l lg:border-t-0">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded bg-reef-burgundy/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-reef-burgundy">
                        {activeAsset.extension.replace(".", "")} Asset
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal break-all">
                        {activeAsset.fileName}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveAsset(null)}
                      className="rounded-full border border-reef-gold/20 p-2 text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Metadata Table */}
                  <div className="mt-6 space-y-4 rounded-2xl border border-reef-gold/15 bg-reef-cream/60 p-4 text-xs">
                    <div>
                      <p className="font-semibold text-reef-charcoal/50 uppercase tracking-wider text-[10px]">
                        Folder Path
                      </p>
                      <p className="mt-1 font-mono text-reef-charcoal font-medium break-all">
                        {activeAsset.folder}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-reef-charcoal/50 uppercase tracking-wider text-[10px]">
                        Full Relative Path
                      </p>
                      <p className="mt-1 font-mono text-reef-charcoal font-medium break-all">
                        {activeAsset.relativePath}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-reef-gold/10">
                      <div>
                        <p className="font-semibold text-reef-charcoal/50 uppercase tracking-wider text-[10px]">
                          Dimensions
                        </p>
                        <p className="mt-1 font-mono text-reef-charcoal font-medium">
                          {activeAsset.width && activeAsset.height
                            ? `${activeAsset.width} × ${activeAsset.height} px`
                            : "Dynamic"}
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-reef-charcoal/50 uppercase tracking-wider text-[10px]">
                          File Size
                        </p>
                        <p className="mt-1 font-mono text-reef-charcoal font-medium">
                          {activeAsset.formattedSize}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-reef-gold/10">
                      <p className="font-semibold text-reef-charcoal/50 uppercase tracking-wider text-[10px]">
                        Last Modified
                      </p>
                      <p className="mt-1 font-mono text-reef-charcoal/80">
                        {new Date(activeAsset.mtime).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-reef-gold/15">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(activeAsset)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-reef-gold py-3 text-sm font-semibold text-white transition hover:brightness-95"
                  >
                    {copiedId === activeAsset.id ? (
                      <>
                        <FiCheck className="h-4 w-4" /> Copied Asset URL!
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-4 w-4" /> Copy Asset URL
                      </>
                    )}
                  </button>

                  <a
                    href={activeAsset.serveUrl}
                    download={activeAsset.fileName}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-reef-gold/30 bg-white py-3 text-sm font-semibold text-reef-charcoal transition hover:border-reef-gold hover:text-reef-burgundy"
                  >
                    <FiDownload className="h-4 w-4 text-reef-burgundy" />{" "}
                    Download File
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
