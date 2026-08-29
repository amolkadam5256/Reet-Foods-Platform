import { site } from "@/lib/site";

export const business = {
  legalName: site.legalName,
  brandName: site.brandName,
  established: "2016",
  businessType: "Wholesaler & Retailer",
  gstNumber: site.gstNumber,
  fssaiLicense: site.fssaiLicense,
  email: site.email,
  phones: site.phones,
  whatsapp: site.whatsapp,
  officeAddress:
    "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune - 411057",
  factoryAddress: site.factoryAddress,
  productionCapacity: "Up to 500 gifts per day",
  largestCorporateOrder: "More than 1,000 gifts in a single corporate Diwali order",
  delivery: "PAN-India and export delivery support; typical delivery is 3 to 4 days.",
  returnPolicy: "No returns",
} as const;
