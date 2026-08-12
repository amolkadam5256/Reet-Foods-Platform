import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BlogListingSchema } from "@/components/seo/BlogListingSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";
import { Newsletter } from "@/components/common/Newsletter";
import { CTA } from "@/components/common/CTA";
import { BlogFeaturedPost } from "@/components/blog/BlogFeaturedPost";
import { BlogPostsGrid } from "@/components/blog/BlogPostsGrid";
import { blogPosts } from "@/data/blog";
import { Images } from "@/assets/images";

export const metadata = constructMetadata({
  title: "Gifting Insights & Corporate Trends Blog | Reet Foods Pune",
  description:
    "Read premium advice on corporate gifting compliance, custom chocolate packaging, festival hamper design, and healthy snacking trends from Reet Foods.",
  canonical: "/blog",
});

const faqs = [
  {
    question: "What topics are covered in the Reet Foods corporate gifting blog?",
    answer:
      "Our blog covers corporate gifting trends, premium dry fruit health benefits, employee appreciation ideas, and insights into the luxury gifting industry in Pune.",
  },
  {
    question: "How often do you publish new articles about corporate gifting?",
    answer:
      "We publish new articles monthly, sharing the latest trends in custom logo branding, Diwali hampers, and enterprise gifting strategies.",
  },
  {
    question: "Can we submit a guest post for your corporate gifting blog?",
    answer:
      "Yes, we welcome industry experts, HR professionals, and nutritionists to contribute insights on corporate culture, gifting, and healthy snacking.",
  },
  {
    question: "Do your articles feature tips on selecting the right premium dry fruits?",
    answer:
      "Yes, we provide detailed guides on grading almonds, sourcing Iranian pistachios, and identifying the highest quality dry fruits for corporate gift boxes.",
  },
  {
    question: "Where can I find ideas for corporate Diwali gifts?",
    answer:
      "Our blog features dedicated Diwali gifting guides, showcasing the best corporate hampers, traditional sweet boxes, and custom branded gifts.",
  },
  {
    question: "Do you share case studies of your B2B corporate gifting projects?",
    answer:
      "Yes, we frequently highlight successful corporate gifting campaigns we've executed for top IT and tech firms in Hinjewadi and Magarpatta, Pune.",
  },
  {
    question: "Are there articles explaining FSSAI compliance in food gifting?",
    answer:
      "Absolutely. We emphasize food safety and share educational content on ISO standards, FSSAI compliance, and hygienic packaging for corporate food gifts.",
  },
  {
    question: "How do I subscribe to the Reet Foods gifting newsletter?",
    answer:
      "You can subscribe using the newsletter form at the bottom of our blog page to receive exclusive corporate gifting catalogs and industry insights directly in your inbox.",
  },
  {
    question: "Can I share these blog articles with my corporate HR team?",
    answer:
      "Yes, our articles are designed to help HR managers and procurement teams make informed decisions about bulk corporate gifting. Feel free to share them!",
  },
  {
    question: "Do you provide insights on sustainable and eco-friendly packaging?",
    answer:
      "Yes, we regularly discuss the importance of eco-friendly packaging, featuring our reusable wooden chests and recyclable cardboard gift boxes.",
  },
];

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <BlogListingSchema posts={blogPosts} />

      <PageHero
        eyebrow="Gifting Editorial"
        title="Insights, Trends & Purchasing Guides"
        description="Your go-to source for understanding corporate gifting compliance, custom luxury packaging, and food hygiene standards in Pune."
        breadcrumbs={[{ label: "Blog" }]}
        image={Images.topViewDeskNuts}
        imageAlt="Gifting blog insights"
        primaryCta={{ label: "View Our Products", href: "/products" }}
        secondaryCta={{ label: "Subscribe to Catalog", href: "#newsletter" }}
        sideBadge="Retail Blog"
      />

      <BlogFeaturedPost post={featuredPost} />
      <BlogPostsGrid posts={remainingPosts} />

      {/* FAQ Section */}
      <section className="mt-12 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Learn More"
          title="Blog & Insights FAQ"
          description="Common questions about our corporate gifting blog and content."
        />
        <FAQList faqs={faqs} />
      </section>

      {/* Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>

      <CTA />
    </div>
  );
}
