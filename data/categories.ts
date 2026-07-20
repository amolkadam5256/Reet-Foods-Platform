export type Category = {
  title: string;
  copy: string;
  tag: string;
  href: string;
  img: string;
};

export const categories: Category[] = [
  {
    title: "Dry Fruits",
    copy: "Iranian pistachios, almonds, cashews, figs, premium blends.",
    tag: "Festive best-seller",
    href: "/products/dry-fruits",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Chocolate Gift Boxes",
    copy: "Belgian chocolates, pralines and luxury handmade assortments.",
    tag: "Corporate favourite",
    href: "/products/chocolate-gift-box",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cold-Pressed Juices",
    copy: "Fresh seasonal juices, no preservatives, wellness-focused.",
    tag: "Fresh & cold",
    href: "/products/juice",
    img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Celebration Hampers",
    copy: "Custom wedding & corporate hampers with branding options.",
    tag: "Wedding & festive",
    href: "/products/dry-fruit-box",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
];
