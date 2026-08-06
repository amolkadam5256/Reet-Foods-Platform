# 06 — Breadcrumb Strategy

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Breadcrumb Architecture Overview

Breadcrumbs serve three critical SEO functions:
1. **Crawl efficiency** — Provide Googlebot a clear path back to parent pages
2. **PageRank distribution** — Flow authority up the page hierarchy
3. **User experience** — Allow users to navigate back to category/hub pages
4. **Rich results** — Enable BreadcrumbList schema for SERP display

Every page on the website must have a breadcrumb with:
- Full path from Homepage to current page
- Schema markup (BreadcrumbList JSON-LD)
- Clickable links on all items except the current page
- Mobile-optimized display

---

## Breadcrumb Hierarchy Map

### Homepage
```
(No breadcrumb — it IS the homepage)
```

### Category / Hub Pages (Tier 2)
```
Home > [Category Name]

Examples:
Home > Corporate Gifts
Home > Dry Fruits
Home > Gift Boxes
Home > Luxury Hampers
Home > Wedding Gifts
Home > Festive Gifts
Home > Chocolate Gifts
Home > Healthy Foods
Home > Cold Pressed Juices
Home > Bulk Orders
```

### Sub-Category Pages
```
Home > [Category] > [Sub-Category]

Examples:
Home > Dry Fruits > Cashews
Home > Dry Fruits > Almonds
Home > Corporate Gifts > Employee Gifting Programs
Home > Corporate Gifts > Client Gifting Solutions
Home > Luxury Hampers > Corporate Luxury Hampers
Home > Luxury Hampers > Wedding Luxury Hampers
```

### Product Pages
```
Home > [Category] > [Product Name]

Examples:
Home > Dry Fruits > Premium Cashew Gift Box
Home > Corporate Gifts > Corporate Gift Hamper
Home > Gift Boxes > Luxury Gift Hamper
Home > Wedding Gifts > Wedding Dry Fruit Hamper
Home > Festive Gifts > Diwali Dry Fruit Box
Home > Cold Pressed Juices > Cold Pressed Juice Pack
```

### Products with Sub-Category
```
Home > [Category] > [Sub-Category] > [Product]

Examples:
Home > Dry Fruits > Cashews > Premium Cashew Gift Box
Home > Luxury Hampers > Corporate > Premium Corporate Hamper
```

### Corporate / City Landing Pages
```
Home > Corporate Gifts > [City/Service]

Examples:
Home > Corporate Gifts > Corporate Gifting Pune
Home > Corporate Gifts > Corporate Gifting Mumbai
Home > Corporate Gifts > Bulk Gifting Solutions
Home > Corporate Gifts > Diwali Corporate Gifts
```

### Blog Pages
```
Home > Blog > [Article Title]

Examples:
Home > Blog > Best Corporate Gifts India
Home > Blog > Dry Fruits Health Benefits
Home > Blog > Diwali Gift Ideas
Home > Blog > Employee Gifting Trends
```

### Blog with Category
```
Home > Blog > [Category] > [Article Title]

Examples:
Home > Blog > Corporate Gifting > Best Corporate Gifts India
Home > Blog > Healthy Foods > Dry Fruits Health Benefits
Home > Blog > Festival Gifts > Diwali Gift Ideas
```

### FAQ Pages
```
Home > FAQ > [FAQ Topic]

Examples:
Home > FAQ > Corporate Gifting FAQ
Home > FAQ > Delivery & Shipping FAQ
Home > FAQ > Bulk Orders FAQ
Home > FAQ > Dry Fruits FAQ
```

### Resource / Guide Pages
```
Home > Resources > [Guide Name]

Examples:
Home > Resources > Corporate Gifting Guide 2026
Home > Resources > Dry Fruits Buying Guide
Home > Resources > Festival Gift Calendar
```

### Policy Pages
```
Home > [Policy Name]

Examples:
Home > Privacy Policy
Home > Terms of Service
Home > Shipping Policy
Home > Return Policy
```

### About & Contact
```
Home > About Us
Home > Contact Us
```

---

## BreadcrumbList JSON-LD Schema Templates

### Homepage Breadcrumb (No schema needed)

### Category Page Breadcrumb
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://reetfoodsngiftings.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Corporate Gifts",
      "item": "https://reetfoodsngiftings.com/corporate-gifts/"
    }
  ]
}
```

### Product Page Breadcrumb (3 levels)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://reetfoodsngiftings.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dry Fruits",
      "item": "https://reetfoodsngiftings.com/dry-fruits/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Premium Cashew Gift Box",
      "item": "https://reetfoodsngiftings.com/products/premium-cashew-gift-box/"
    }
  ]
}
```

### Product Page Breadcrumb (4 levels — with sub-category)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://reetfoodsngiftings.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Dry Fruits",
      "item": "https://reetfoodsngiftings.com/dry-fruits/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cashews",
      "item": "https://reetfoodsngiftings.com/dry-fruits/cashews/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Premium Cashew Gift Box",
      "item": "https://reetfoodsngiftings.com/products/premium-cashew-gift-box/"
    }
  ]
}
```

### Blog Article Breadcrumb
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://reetfoodsngiftings.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://reetfoodsngiftings.com/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Corporate Gifts India",
      "item": "https://reetfoodsngiftings.com/blog/best-corporate-gifts-india/"
    }
  ]
}
```

---

## Visual Breadcrumb Design Specifications

### Desktop
```
Home > Dry Fruits > Cashews > Premium Cashew Gift Box
(clickable links for all except last item)
```
- Font: 12px, muted color (#666 or similar)
- Separator: > or /
- Current page: Not linked, slightly darker color
- Position: Below header, above page title (H1)
- Margin: 8px top and bottom

### Mobile
```
← Cashews (back to parent only)
```
- Show only 1 level back on mobile (parent page)
- Or show condensed version: Home > ... > [Current Page]
- Use back arrow icon for mobile

### Styling Consistency
- All breadcrumbs must use `<nav aria-label="breadcrumb">` for accessibility
- Use `<ol>` list with `<li>` items for semantic HTML
- Apply `typeof="BreadcrumbList"` RDFa OR separate JSON-LD schema block

---

## Developer Implementation Notes

### React/Next.js Component Template

```tsx
// components/Breadcrumb.tsx
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://reetfoodsngiftings.com${item.url}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index < items.length - 1 ? (
                <Link href={item.url}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
```

### Usage Example
```tsx
<Breadcrumb items={[
  { name: "Home", url: "/" },
  { name: "Dry Fruits", url: "/dry-fruits/" },
  { name: "Cashews", url: "/dry-fruits/cashews/" },
  { name: "Premium Cashew Gift Box", url: "/products/premium-cashew-gift-box/" }
]} />
```

---

## Breadcrumb QA Checklist

| Check | Expected | Status |
|-------|----------|--------|
| All product pages have breadcrumb | ✅ 3–4 levels | ⬜ |
| All category pages have breadcrumb | ✅ 2 levels | ⬜ |
| All blog pages have breadcrumb | ✅ 3 levels | ⬜ |
| All FAQ pages have breadcrumb | ✅ 3 levels | ⬜ |
| BreadcrumbList schema on all pages | ✅ Valid JSON-LD | ⬜ |
| Breadcrumb links are clickable | ✅ All except last | ⬜ |
| Current page not linked | ✅ aria-current | ⬜ |
| Mobile breadcrumb visible | ✅ Condensed | ⬜ |
| No broken breadcrumb links | ✅ All 200 | ⬜ |
| Breadcrumb validated in GSC | ✅ Rich Results | ⬜ |
