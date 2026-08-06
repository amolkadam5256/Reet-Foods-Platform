# 05 — Product Schema Specification

**Website:** https://reetfoodsngiftings.com  

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://reetfoodsngiftings.com/products/cashews#product",
  "name": "Premium W240 King Size Cashew Nuts (500g)",
  "image": "https://reetfoodsngiftings.com/images/products/cashews-500g.webp",
  "description": "Handpicked Grade-A W240 jumbo cashew nuts. 100% natural, nitrogen-flushed packaging for maximum crunch retention.",
  "sku": "RF-CASHEW-W240-500G",
  "mpn": "W240-500G",
  "brand": {
    "@type": "Brand",
    "name": "Reet Foods"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://reetfoodsngiftings.com/products/cashews",
    "priceCurrency": "INR",
    "price": "650",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://reetfoodsngiftings.com/#organization"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "32"
  }
}
```
