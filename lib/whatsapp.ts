import { site } from "@/lib/site";

export const WHATSAPP_PRIMARY_NUMBER = site.campaign.whatsappPrimary;
export const WHATSAPP_SECONDARY_NUMBER = site.whatsapp;

export type InquiryType =
  | "generic"
  | "product"
  | "corporate"
  | "bulk"
  | "offer"
  | "catalog"
  | "partner";

export interface InquiryData {
  name?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  company?: string;
  city?: string;
  location?: string;
  product?: string;
  productName?: string;
  category?: string;
  quantity?: string | number;
  budget?: string;
  occasion?: string;
  giftingType?: string;
  brandingNeeded?: string;
  deliveryDate?: string;
  requirement?: string;
  message?: string;
  notes?: string;
  source?: string;
}

type WhatsAppOptions = {
  phone?: string;
  type?: InquiryType;
  data?: InquiryData;
  customMessage?: string;
};

type SendWhatsAppOptions = WhatsAppOptions & {
  sourcePage?: string;
  formType?: string;
};

type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    eventData: Record<string, string | undefined>,
  ) => void;
  dataLayer?: Array<Record<string, string | undefined>>;
};

function cleanValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function compactLines(lines: Array<string | false | null | undefined>): string {
  return lines.filter((line): line is string => Boolean(line && line.trim())).join("\n");
}

function bullet(label: string, value: unknown): string | false {
  const cleaned = cleanValue(value);
  return cleaned ? `- ${label}: ${cleaned}` : false;
}

function getRequirement(data: InquiryData): string {
  return cleanValue(data.requirement || data.message || data.notes);
}

function normalizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

export function isValidEmail(email: string): boolean {
  const value = cleanValue(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidMobileNumber(phone: string): boolean {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 15;
}

export function getFormValue(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function formDataToInquiryData(
  formData: FormData,
  fieldMap: Record<string, keyof InquiryData>,
): InquiryData {
  return Object.entries(fieldMap).reduce<InquiryData>((acc, [formName, dataName]) => {
    const value = getFormValue(formData, formName);
    if (value) acc[dataName] = value;
    return acc;
  }, {});
}

export function formatWhatsAppMessage(type: InquiryType = "generic", data: InquiryData = {}): string {
  const product = cleanValue(data.productName || data.product);
  const requirement = getRequirement(data);

  if (type === "product") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I am interested in the following product:",
      "",
      "*Product Inquiry*",
      bullet("Product", product),
      bullet("Category", data.category),
      bullet("Quantity", data.quantity),
      "",
      "*Customer Details*",
      bullet("Name", data.name),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      bullet("Company", data.company),
      bullet("City", data.city || data.location),
      "",
      requirement ? `*Requirement:*\n${requirement}` : false,
      "",
      "Please share the product details, pricing, availability, and MOQ.",
      "",
      "Thank you.",
    ]);
  }

  if (type === "corporate") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I would like to inquire about Corporate Gifting.",
      "",
      "*Corporate Gifting Inquiry*",
      bullet("Name", data.name),
      bullet("Company", data.company),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      bullet("Number of Gifts", data.quantity),
      bullet("Budget", data.budget),
      bullet("Event/Occasion", data.occasion || data.giftingType),
      bullet("Branding Needed", data.brandingNeeded),
      bullet("Delivery Location", data.location || data.city),
      bullet("Required Date", data.deliveryDate),
      "",
      requirement ? `*Requirement:*\n${requirement}` : false,
      "",
      "Please share suitable options, pricing, customization details, MOQ, and delivery information.",
      "",
      "Thank you.",
    ]);
  }

  if (type === "bulk") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I would like to make a Bulk Order Inquiry.",
      "",
      "*Bulk Order Inquiry*",
      bullet("Name", data.name),
      bullet("Company", data.company),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      bullet("Product", product),
      bullet("Quantity", data.quantity),
      bullet("Budget", data.budget),
      bullet("Location", data.location || data.city),
      bullet("Required Date", data.deliveryDate),
      "",
      requirement ? `*Requirement:*\n${requirement}` : false,
      "",
      "Please share your bulk pricing, MOQ, availability, and delivery details.",
      "",
      "Thank you.",
    ]);
  }

  if (type === "offer") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I would like to claim the 10% Welcome Offer on my first order with Reet Foods.",
      "",
      "*Customer Details*",
      bullet("Name", data.name),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      "",
      "Please share the welcome offer details, product catalogue, and next steps.",
      "",
      "Thank you.",
    ]);
  }

  if (type === "catalog") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I would like to receive your latest gifting catalogue.",
      "",
      "*Catalogue Request*",
      bullet("Name", data.name),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      bullet("Company", data.company),
      "",
      "Please share the digital catalogue, pricing slabs, and next steps.",
      "",
      "Thank you.",
    ]);
  }

  if (type === "partner") {
    return compactLines([
      "Hello Reet Foods,",
      "",
      "I would like to inquire about becoming a gifting partner.",
      "",
      "*Partnership Inquiry*",
      bullet("Name", data.name),
      bullet("Mobile", data.phone || data.mobile),
      bullet("Email", data.email),
      bullet("Company", data.company),
      "",
      requirement ? `*Requirement:*\n${requirement}` : false,
      "",
      "Please share partnership details, pricing, and next steps.",
      "",
      "Thank you.",
    ]);
  }

  return compactLines([
    "Hello Reet Foods,",
    "",
    "I would like to make an inquiry.",
    "",
    "*Inquiry Details:*",
    bullet("Name", data.name),
    bullet("Mobile", data.phone || data.mobile),
    bullet("Email", data.email),
    bullet("Company", data.company),
    bullet("Product", product),
    bullet("Quantity", data.quantity),
    bullet("City", data.city || data.location),
    bullet("Budget", data.budget),
    "",
    requirement ? `*Requirement:*\n${requirement}` : false,
    "",
    "Please share the details, pricing, and next steps.",
    "",
    "Thank you.",
  ]);
}

export function generateWhatsAppUrl({
  phone = WHATSAPP_PRIMARY_NUMBER,
  type = "generic",
  data = {},
  customMessage,
}: WhatsAppOptions = {}): string {
  const number = normalizePhone(phone);
  const message = customMessage ? customMessage.trim() : formatWhatsAppMessage(type, data);

  if (!number || !message) {
    throw new Error("Unable to generate WhatsApp inquiry URL.");
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function trackWhatsAppInquiry({
  type = "generic",
  data = {},
  sourcePage,
  formType,
}: SendWhatsAppOptions): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  const eventData = {
    inquiry_type: type,
    source_page: sourcePage || window.location.pathname,
    form_type: formType,
    product_name: data.productName || data.product,
  };

  try {
    analyticsWindow.gtag?.("event", "whatsapp_inquiry_click", eventData);
    analyticsWindow.dataLayer?.push({
      event: "whatsapp_inquiry_click",
      ...eventData,
    });
  } catch {
    // Analytics must never block the WhatsApp handoff.
  }
}

export function sendWhatsAppInquiry(options: SendWhatsAppOptions = {}): string {
  const url = generateWhatsAppUrl(options);

  if (typeof window !== "undefined") {
    trackWhatsAppInquiry(options);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return url;
}
