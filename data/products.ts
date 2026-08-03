import type { StaticImageData } from "next/image";
import product1Main from "../assets/Product 1/Product_1.png";
import product1Detail1 from "../assets/Product 1/Product_2.png";
import product1Detail2 from "../assets/Product 1/Product_3.png";
import product1Detail3 from "../assets/Product 1/Product_4.png";
import product1Detail4 from "../assets/Product 1/Product_5.jpg";
import product2Main from "../assets/Product 2/Product_1.png";
import product2Detail1 from "../assets/Product 2/Product_2.png";
import product2Detail2 from "../assets/Product 2/Product_3.png";
import product2Detail3 from "../assets/Product 2/Product_4.png";
import product2Detail4 from "../assets/Product 2/Product_5.jpg";
import product4Main from "../assets/Product 4/Product_1.png";
import product4Detail1 from "../assets/Product 4/Product_2.png";
import product4Detail2 from "../assets/Product 4/Product_3.png";
import product4Detail3 from "../assets/Product 4/Product_4.png";
import product4Detail4 from "../assets/Product 4/Product_5.jpg";

export type ProductItem = { name: string; detail: string; badge?: string; image?: StaticImageData };
export type ProductCategory = {
  slug: string;
  name: string;
  intro: string;
  image: StaticImageData;
  highlights: string[];
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "premium-dry-fruits",
    name: "Premium Dry Fruits",
    intro:
      "Premium origin almonds, pistachios, cashews, figs and raisins curated for gifting and daily nourishment.",
    image: product1Main,
    highlights: [
      "Iranian & Afghan sourcing",
      "Nitrogen-packed freshness",
      "Festive-ready tins",
    ],
    items: [
      { name: "Signature Dry Fruit Box", detail: "A generous assortment of premium almonds, cashews and pistachios, presented for effortless gifting.", badge: "Best Seller", image: product1Main },
      { name: "Classic Nut Selection", detail: "A balanced everyday selection of roasted nuts packed to preserve their natural flavour and crunch.", image: product1Detail1 },
      { name: "Festive Dry Fruit Tin", detail: "A celebratory dry-fruit curation suited to Diwali, client appreciation and family occasions.", image: product1Detail2 },
      { name: "Premium Partition Box", detail: "An elegant compartment box that keeps every dry fruit neat, fresh and ready to share.", image: product1Detail3 },
      { name: "Custom Dry Fruit Gift", detail: "Personalise the box with a greeting card, ribbon or branding for your event or company.", image: product1Detail4 },
    ],
  },
  {
    slug: "artisanal-chocolates",
    name: "Artisanal Chocolates",
    intro:
      "Hand-poured Belgian chocolates, truffles, and pralines in luxurious packaging with custom branding.",
    image: product2Main,
    highlights: ["Temperature-controlled packing", "Custom logo foil", "Vegan options"],
    items: [
      { name: "Corporate Chocolate Gift Box", detail: "An elegant chocolate selection with space for your company logo, message card and event details.", badge: "Corporate", image: product2Main },
      { name: "Assorted Truffle Collection", detail: "A refined assortment of milk, dark and white truffles in a presentation-ready gift box.", image: product2Detail1 },
      { name: "Premium Chocolate Box", detail: "A curated selection of artisanal chocolates for thoughtful personal and professional gifting.", image: product2Detail2 },
      { name: "Belgian Praline Selection", detail: "Smooth pralines and nut-centred bites selected for a memorable gourmet experience.", image: product2Detail3 },
      { name: "Custom Chocolate Favour", detail: "Create a compact chocolate gift with branded sleeves, ribbons and personalised notes.", image: product2Detail4 },
    ],
  },
  {
    slug: "celebration-hampers",
    name: "Celebration Hampers",
    intro:
      "Curated red and gold hampers with cards, ribbons and custom brand storytelling for every occasion.",
    image: product4Main,
    highlights: ["Concierge delivery", "Handwritten cards", "Tiered pricing for volume"],
    items: [
      { name: "Grande Celebration Hamper", detail: "A complete gifting experience combining premium treats, a presentation box and a personal note.", image: product4Main },
      { name: "Festive Duo", detail: "Two carefully paired gift selections, finished with ribbon and ready for seasonal celebrations.", image: product4Detail1 },
      { name: "Wedding Signature Hamper", detail: "A graceful wedding favour with gourmet contents and custom messaging for every guest.", image: product4Detail2 },
      { name: "Corporate Appreciation Box", detail: "A polished client or employee gift that can be tailored to your budget and branding.", image: product4Detail3 },
      { name: "Custom Gourmet Hamper", detail: "Build a fully bespoke hamper with your preferred products, packaging and delivery plan.", image: product4Detail4 },
    ],
  },
];

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  image: StaticImageData;
  shortDescription: string;
  description: string;
  badge?: string;
  moq?: string;
}

// Generate a comprehensive, flat list of gourmet products derived from category items
export const products: Product[] = productCategories.flatMap((cat, catIdx) => 
  cat.items.map((item, itemIdx) => {
    const slug = item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    
    // Distribute dry fruits vs dry fruit boxes
    let categoryName = cat.name;
    let categorySlug = cat.slug;
    
    if (cat.slug === "premium-dry-fruits") {
      if (item.name.toLowerCase().includes("box") || item.name.toLowerCase().includes("gift")) {
        categoryName = "Dry Fruit Gift Boxes";
        categorySlug = "dry-fruit-box";
      } else {
        categoryName = "Dry Fruits";
        categorySlug = "dry-fruits";
      }
    } else if (cat.slug === "artisanal-chocolates") {
      if (item.name.toLowerCase().includes("box") || item.name.toLowerCase().includes("gift")) {
        categoryName = "Chocolate Gift Boxes";
        categorySlug = "chocolate-box";
      } else {
        categoryName = "Premium Chocolates";
        categorySlug = "chocolates";
      }
    } else if (cat.slug === "celebration-hampers") {
      if (item.name.toLowerCase().includes("corporate") || item.name.toLowerCase().includes("appreciation")) {
        categoryName = "Corporate Gifts";
        categorySlug = "corporate-gifts";
      } else {
        categoryName = "Celebration Hampers";
        categorySlug = "hampers";
      }
    }

    return {
      id: `p-${catIdx}-${itemIdx}`,
      name: item.name,
      slug,
      category: categoryName,
      categorySlug: categorySlug,
      price: 299 + (itemIdx * 150),
      image: item.image || cat.image,
      shortDescription: item.detail,
      description: `${item.detail} Carefully curated and packaged by Reet Foods for high premium standards.`,
      badge: item.badge,
      moq: "10 Units",
    };
  })
);

// Add custom cold-pressed juices to flat products list
const juiceImages = [product1Main, product2Main, product4Main];
const juiceNames = [
  "Antioxidant Pomegranate Blend",
  "Detox Green Celery Juice",
  "Valencia Orange Boost",
  "Hydrating Watermelon Mint",
  "Ginger Lemon Zest Booster"
];

const juiceProducts: Product[] = juiceNames.map((name, idx) => ({
  id: `juice-${idx}`,
  name,
  slug: name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
  category: "Cold Pressed Juices",
  categorySlug: "juices",
  price: 149 + (idx * 20),
  image: juiceImages[idx % juiceImages.length],
  shortDescription: "100% natural cold pressed juice with zero added sugar or chemical preservatives.",
  description: "Freshly extracted fruit and botanical blends. Kept chilled at our Pune facility for raw nutrient retention.",
  badge: "100% Raw",
  moq: "12 Bottles"
}));

products.push(...juiceProducts);