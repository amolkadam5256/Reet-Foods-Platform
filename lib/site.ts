export const site = {
  url: "https://www.reetfoodsngiftiings.com",
  name: "Reet Foods & Gifting",
  brandName: "Reet Foods",
  legalName: "Reet Foods and Giftings",
  description:
    "Corporate Diwali Gifting 2026, premium dry fruits, artisanal chocolates, festive hampers, and custom corporate gifting from Pune with PAN India delivery.",
  email: "reetfoodspune@gmail.com",
  phones: ["+91 9225130732"],
  whatsapp: "919225130732",
  gstNumber: "27FHIPK0363N1ZX",
  fssaiLicense: "21525083009881",
  fssaiRegistrationNumber: "21525083009881",
  fssaiOperator: "Shraddha Harshad Kharate / REET FOODS",
  fssaiValidUpTo: "19-09-2026",
  fssaiIssuedOn: "20-09-2025",
  established: "2019",
  priceRange: "INR 299 - INR 9,999",

  areaServed: ["Pune", "Maharashtra", "India"],
  officeAddress: {
    street:
      "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411057",
    country: "IN",
  },
  factoryAddress:
    "Yashodevi Avenue, Building B2, Vishwashanti Colony No. 4, near Govind Garden, Pune - 411027",
  geo: {
    latitude: 18.5908,
    longitude: 73.7276,
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  socialLinks: [
    "https://www.facebook.com/reetfoodsngiftings",
    "https://www.instagram.com/reetfoodsngiftings",
    "https://www.linkedin.com/company/reet-foods-pune/?viewAsMember=true",
    "https://www.youtube.com/@ReetFoodsGiftings",
  ],
  defaultImage: "/images/logo.png",
  keywords: [
    "Reet Foods",
    "corporate gifting Pune",
    "premium dry fruits Pune",
    "dry fruit gift boxes",
    "chocolate gift boxes Pune",
    "wedding return gifts Pune",
    "Diwali hampers Pune",
    "custom corporate gifts India",
    "bulk gifting supplier Pune",
    "FSSAI licensed food gifting",
  ],

  // ── Corporate Diwali Gifting 2026 Campaign ────────────────────────
  campaign: {
    name: "Corporate Diwali Gifting 2026",
    // Primary WhatsApp for corporate Diwali campaign (Shraddha & Harshad Kharate)
    whatsappPrimary: "919225130732",
    whatsappDisplay: "9225130732",
    contacts: "Shraddha Kharate & Harshad Kharate",
    budgetBands: [
      { label: "₹400–₹600", desc: "For large employee orders" },
      { label: "₹700–₹1,000", desc: "Employee & standard corporate gifting" },
      { label: "₹1,200–₹1,500", desc: "Premium employee/client gifting" },
      { label: "₹2,000–₹3,000+", desc: "Premium/VIP corporate gifting" },
    ],
    whatsappMessage:
      "Hi Reet Foods, I am interested in Corporate Diwali Gifting 2026. Please share suitable hamper options.",
  },
} as const;

export function getCampaignYear() {
  const current = new Date().getFullYear();
  return current < 2026 ? 2026 : current;
}

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
