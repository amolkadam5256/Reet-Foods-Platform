import React, { ReactNode } from "react";
import { FiPackage, FiRefreshCw } from "react-icons/fi";
import { Button } from "./Buttons";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: ReactNode;
}

export function EmptyState({
  title = "No products found",
  description = "Try adjusting your search query, filter criteria, or category selection to discover more options.",
  actionText = "Reset Filters",
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <div className="my-8 flex flex-col items-center justify-center rounded-xl border border-dashed border-reef-gold/30 bg-reef-cream/30 px-6 py-12 text-center">
      <div className="mb-4 rounded-full bg-reef-cream p-4 text-reef-burgundy">
        {icon || <FiPackage className="h-8 w-8" />}
      </div>
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-xs leading-relaxed text-reef-charcoal/70">
        {description}
      </p>
      {onAction && (
        <div className="mt-6">
          <Button variant="outline" size="sm" icon={<FiRefreshCw className="h-3.5 w-3.5" />} onClick={onAction}>
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}
