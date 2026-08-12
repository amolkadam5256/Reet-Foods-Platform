import { FiFilter, FiFolder, FiGrid, FiList, FiSearch } from "react-icons/fi";
import type { ReactNode } from "react";
import type { AssetSortBy, AssetSortOrder, AssetViewMode } from "./types";

type AssetsToolbarProps = {
  search: string;
  selectedFolder: string;
  selectedExt: string;
  sortBy: AssetSortBy;
  sortOrder: AssetSortOrder;
  viewMode: AssetViewMode;
  folders: string[];
  extensions: string[];
  onSearchChange: (value: string) => void;
  onFolderChange: (value: string) => void;
  onExtChange: (value: string) => void;
  onSortByChange: (value: AssetSortBy) => void;
  onSortOrderToggle: () => void;
  onViewModeChange: (value: AssetViewMode) => void;
};

export function AssetsToolbar({
  search,
  selectedFolder,
  selectedExt,
  sortBy,
  sortOrder,
  viewMode,
  folders,
  extensions,
  onSearchChange,
  onFolderChange,
  onExtChange,
  onSortByChange,
  onSortOrderToggle,
  onViewModeChange,
}: AssetsToolbarProps) {
  return (
    <div className="mb-6 rounded-2xl border border-reef-gold/20 bg-white p-4 shadow-sm sm:p-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        <div className="relative md:col-span-2 lg:col-span-4">
          <FiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
          <input
            type="text"
            placeholder="Search images or paths..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-4 text-sm text-reef-charcoal placeholder-reef-charcoal/40 transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
          />
        </div>

        <div className="lg:col-span-3">
          <div className="relative">
            <FiFolder className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
            <select
              value={selectedFolder}
              onChange={(event) => onFolderChange(event.target.value)}
              className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-8 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
            >
              <option value="all">All Folders ({folders.length})</option>
              {folders.map((folder) => (
                <option key={folder} value={folder}>
                  {folder}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative">
            <FiFilter className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-reef-charcoal/45" />
            <select
              value={selectedExt}
              onChange={(event) => onExtChange(event.target.value)}
              className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 py-2.5 pl-10 pr-8 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
            >
              <option value="all">All Formats</option>
              {extensions.map((extension) => (
                <option key={extension} value={extension}>
                  {extension.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2 lg:col-span-2">
          <select
            value={sortBy}
            onChange={(event) => onSortByChange(event.target.value as AssetSortBy)}
            className="w-full appearance-none rounded-xl border border-reef-gold/20 bg-reef-cream/40 px-3 py-2.5 text-sm text-reef-charcoal transition focus:border-reef-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-reef-gold/20"
          >
            <option value="name">Sort by Name</option>
            <option value="size">Sort by Size</option>
            <option value="date">Sort by Date</option>
          </select>
          <button
            type="button"
            onClick={onSortOrderToggle}
            title={`Sort ${sortOrder === "asc" ? "Ascending" : "Descending"}`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-reef-gold/20 bg-reef-cream/40 text-sm font-semibold text-reef-charcoal hover:border-reef-gold"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>

        <div className="flex items-center justify-end gap-1.5 lg:col-span-1">
          <ViewButton active={viewMode === "grid"} title="Grid View" onClick={() => onViewModeChange("grid")}>
            <FiGrid className="h-4 w-4" />
          </ViewButton>
          <ViewButton active={viewMode === "list"} title="List View" onClick={() => onViewModeChange("list")}>
            <FiList className="h-4 w-4" />
          </ViewButton>
        </div>
      </div>
    </div>
  );
}

function ViewButton({
  active,
  title,
  children,
  onClick,
}: {
  active: boolean;
  title: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${
        active
          ? "border-reef-gold bg-reef-gold text-white"
          : "border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-gold"
      }`}
      title={title}
    >
      {children}
    </button>
  );
}
