import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";

export const metadata = {
  title: "Corporate Gifting | Reet Foods & Gifting",
  description: "Premium corporate gifting in Pune and across India: dry fruit boxes, chocolate gifts and branded festive hampers for teams, clients and events.",
};

const services = [
  ["Curated gifting", "Premium dry fruits, chocolates and hampers selected around your occasion, budget and recipient list."],
  ["Brand personalisation", "Add logo sleeves, ribbons, cards and thoughtful messaging without overcomplicating the experience."],
  ["Reliable fulfilment", "Delivery planning and GST-ready coordination for office, event and multi-address gifting."],
];

export default function CorporateGiftingPage() {
  return <SiteShell eyebrow="Corporate Gifting" title="Gifts that make your brand feel thoughtfully remembered." description="From client appreciation to festive campaigns and team milestones, Reet Foods & Gifting makes premium corporate gifting easy to plan and effortless to send." image={Images.sweetiesDesk} imageAlt="Premium corporate gifting assortment" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Corporate Gifting" }]} sidePanelTitle="Plan a gifting programme" sidePanelBody="Tell us your occasion, quantity, budget and delivery window. Our team will recommend the right assortment." sideLinks={[{ label: "Request a corporate quote", href: "/contact#quote" }, { label: "Explore gift hampers", href: "/products/categories/dry-fruit-box" }]}><div className="grid gap-5 md:grid-cols-3">{services.map(([title, description]) => <section key={title} className="border border-reef-gold/15 bg-white p-6"><h2 className="text-xl font-semibold text-reef-charcoal">{title}</h2><p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{description}</p></section>)}</div></SiteShell>;
}
