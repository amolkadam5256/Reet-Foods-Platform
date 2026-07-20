import { SiteShell } from "@/components/common/SiteShell";

const posts = [
  {
    title: "Benefits of Dry Fruits for Corporate Gifting",
    excerpt:
      "Why premium dry fruits remain one of the most reliable gifting choices for festivals, clients, and employee rewards.",
  },
  {
    title: "Corporate Gifting Trends for Premium Brands",
    excerpt:
      "A quick look at the packaging, personalization, and delivery expectations shaping modern corporate gifting.",
  },
  {
    title: "Festival Gift Ideas That Feel Premium",
    excerpt:
      "How to create festive hampers that balance presentation, utility, and brand recall.",
  },
  {
    title: "Healthy Snacking Tips for Busy Teams",
    excerpt:
      "How thoughtfully packaged dry fruits and juices can support premium wellness-led gifting.",
  },
];

export const metadata = {
  title: "Blog | Reet Foods",
  description: "Read premium gifting and product insight articles from Reet Foods.",
};

export default function BlogPage() {
  return (
    <SiteShell
      eyebrow="Editorial"
      title="A catalog-style blog for gifting ideas, packaging, and buying tips."
      description="The blog now matches the visual system of the store: structured, easy to scan, and styled like a premium retail editorial section."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      sidePanelTitle="Popular reads"
      sidePanelBody="Use these articles to compare packaging approaches, corporate gifting ideas, and seasonal buying patterns."
      sideLinks={[{ label: "Explore products", href: "/products" }, { label: "Talk to us", href: "/contact#quote" }]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="border border-reef-gold/15 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
              Article
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-reef-charcoal">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
