# 02 — WebSite & SearchAction Schema Specification

**Website:** https://reetfoodsngiftings.com  

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://reetfoodsngiftings.com/#website",
  "url": "https://reetfoodsngiftings.com",
  "name": "Reet Foods & Gifting Platform",
  "publisher": {
    "@id": "https://reetfoodsngiftings.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://reetfoodsngiftings.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-IN"
}
```
