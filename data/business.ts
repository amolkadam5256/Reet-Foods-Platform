import { site } from "@/lib/site";

export const business = {
  legalName: site.legalName,
  brandName: site.brandName,
  established: "2019",
  businessType: "Wholesaler & Retailer",
  gstNumber: site.gstNumber,
  fssaiLicense: site.fssaiLicense,
  fssaiRegistrationNumber: "21525083009881",
  fssaiOperator: "Shraddha Harshad Kharate / REET FOODS",
  fssaiPremisesAddress:
    "Streets of Europe Mall, Hinjawadi Phase 1, Near Infosys Circle, Maan Road, Pune, Hinjawadi, Mulshi, Pune, Maharashtra – 411057",
  fssaiIssuedOn: "20-09-2025",
  fssaiValidUpTo: "19-09-2026",
  fssaiAuthority:
    "Food Safety and Standards Authority of India / Food & Drug Administration, Maharashtra",
  email: site.email,

  phones: site.phones,
  whatsapp: site.whatsapp,
  officeAddress:
    "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune - 411057",
  factoryAddress: site.factoryAddress,
  bulkOrders: "Bulk corporate orders welcome. Quantity-based pricing available.",
  orderSupport: "Prompt quotation and requirement support.",
  delivery: "PAN India delivery support planned according to order timeline.",
  returnPolicy: "No returns",
} as const;
