import { FiHardDrive, FiRefreshCw } from "react-icons/fi";

type AssetsHeaderProps = {
  assetCount: number;
  folderCount: number;
  formattedTotalSize: string;
  loading: boolean;
  onRefresh: () => void;
};

export function AssetsHeader({
  assetCount,
  folderCount,
  formattedTotalSize,
  loading,
  onRefresh,
}: AssetsHeaderProps) {
  return (
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
            Real-time indexed explorer for all project image assets across all
            workspace directories.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-reef-gold/15 pt-4 lg:border-t-0 lg:pt-0">
          <Stat label="Total Assets" value={assetCount} />
          <Stat label="Folders" value={folderCount} />
          <Stat label="Filtered Size" value={formattedTotalSize} />
          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-reef-gold/30 bg-white px-5 text-sm font-semibold text-reef-charcoal shadow-sm transition hover:border-reef-gold hover:text-reef-burgundy disabled:opacity-50"
          >
            <FiRefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Rescan Index
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-reef-gold/15 bg-reef-cream px-4 py-3 text-center">
      <p className="text-xl font-bold text-reef-charcoal">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-reef-charcoal/60">
        {label}
      </p>
    </div>
  );
}
