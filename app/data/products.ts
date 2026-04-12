export type ProductCategory = {
  slug: string;
  name: string;
  intro: string;
  highlights: string[];
  items: { name: string; detail: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    intro:
      "Premium origin almonds, pistachios, figs and dates curated for gifting and daily nourishment.",
    highlights: ["Iranian & Afghan sourcing", "Nitrogen-packed freshness", "Festive-ready tins"],
    items: [
      { name: "Iranian Pistachios", detail: "Roasted & salted | 200g & 500g tins" },
      { name: "Californian Almonds", detail: "Lightly roasted | 250g pouches" },
      { name: "Afghan Anjeer", detail: "Soft grade | 250g ribbon pouches" },
      { name: "Medjool Dates", detail: "Jumbo | 500g gift box" },
    ],
  },
  {
    slug: "chocolate-gift-box",
    name: "Chocolate Gift Box",
    intro:
      "Hand-poured Belgian chocolates and pralines in red & gold magnetic boxes with custom notes.",
    highlights: ["Temperature-controlled packing", "Custom logo foil", "Vegan options"],
    items: [
      { name: "Praline Assortment (12 pc)", detail: "Hazelnut, almond, caramel, dark sea salt" },
      { name: "Ruby Almond Bark", detail: "With candied rose petals" },
      { name: "Gianduja Squares", detail: "Classic Piemonte style" },
    ],
  },
  {
    slug: "juice",
    name: "Cold-Pressed Juices",
    intro:
      "Fresh, no-concentrate juices in 200 ml glass bottles. Perfect for welcome hampers and events.",
    highlights: ["No refined sugar", "Fresh daily batches", "Returnable glass bottles"],
    items: [
      { name: "Valencia Orange", detail: "Bright & pulpy" },
      { name: "Pomegranate Ruby", detail: "Antioxidant rich" },
      { name: "Almond Saffron Milk", detail: "With Kashmiri saffron & dates" },
    ],
  },
  {
    slug: "celebration-hampers",
    name: "Celebration Hampers",
    intro:
      "Curated red & gold hampers with cards, ribbons and custom brand storytelling for each occasion.",
    highlights: ["Concierge delivery", "Handwritten cards", "Tiered pricing for volume"],
    items: [
      { name: "Grande Corporate", detail: "Dry fruit quartet, praline box, floral card" },
      { name: "Festive Duo", detail: "Almond tin + pistachio tin with ribbon" },
      { name: "Wedding Signature", detail: "Chocolate bark, nuts, artisanal tea, note" },
    ],
  },
];
