"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BestSellersSection } from "@/components/products/BestSellersSection";
import { BulkOrdersSection } from "@/components/products/BulkOrdersSection";
import { OccasionRecipientFilters } from "@/components/products/OccasionRecipientFilters";
import { PackagingOptions } from "@/components/products/PackagingOptions";
import { ProductCategoryCards } from "@/components/products/ProductCategoryCards";
import ProductFilterBar from "@/components/products/ProductFilterBar";
import { ProductsCertifications } from "@/components/products/ProductsCertifications";
import { ProductsFinalCTA } from "@/components/products/ProductsFinalCTA";
import { ProductsRelatedCollections } from "@/components/products/ProductsRelatedCollections";

const ProductsHero = dynamic(
  () => import("@/components/products/ProductsHero"),
  { ssr: false },
);

type OccasionFilter =
  | "all"
  | "corporate"
  | "wedding"
  | "festival"
  | "employee"
  | "milestone"
  | "personal";
type RecipientFilter =
  | "all"
  | "employees"
  | "clients"
  | "wedding"
  | "family"
  | "vip"
  | "events";
type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export function ProductsClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [occasionFilter, setOccasionFilter] = useState<OccasionFilter>("all");
  const [recipientFilter, setRecipientFilter] =
    useState<RecipientFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [animVisible, setAnimVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setAnimVisible(true));
  }, []);

  return (
    <div className="bg-[#fbf7f1] text-[#1c1c1c]">
      <ProductsHero animVisible={animVisible} />
      <OccasionRecipientFilters
        occasionFilter={occasionFilter}
        setOccasionFilter={setOccasionFilter}
        recipientFilter={recipientFilter}
        setRecipientFilter={setRecipientFilter}
      />
      <ProductFilterBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductCategoryCards activeTab={activeTab} animVisible={animVisible} />
      <BestSellersSection
        sortBy={sortBy}
        setSortBy={setSortBy}
        animVisible={animVisible}
      />
      <PackagingOptions animVisible={animVisible} />
      <BulkOrdersSection />
      <ProductsCertifications animVisible={animVisible} />
      <ProductsRelatedCollections animVisible={animVisible} />
      <ProductsFinalCTA />
    </div>
  );
}
