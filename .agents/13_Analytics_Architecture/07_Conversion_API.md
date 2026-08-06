# 07_Conversion_API.md
# Meta Server-Side Conversion API (CAPI) Architecture — Reet Foods & Giftings

---

## SECTION 1 — CAPI Architecture Overview

Meta Conversion API (CAPI) sends web events directly from the server (Next.js Edge / API Handler) to Meta servers, bypassing ad blockers, Safari ITP restrictions, and browser network failures.

```
[ User Browser ]
   │
   ├── (1) Client Meta Pixel ──────────────> [ Meta Graph API ]
   │                                                 ▲
   └── (2) Next.js API Route (/api/capi) ────────────┘
            (Server-Side Node Handler)
            (SHA-256 Hashed User Data + event_id)
```

---

## SECTION 2 — Event Deduplication Protocol

To prevent double-counting conversions when both Browser Pixel and Server CAPI fire:
1. Every event generates a unique `event_id` (e.g. `pur_RF-ORD-2025-8842` or `lead_1740000000_random`).
2. Client-side `fbq('track', 'Purchase', payload, { eventID: event_id })` and Server-side CAPI POST request share the identical `event_id`.
3. Meta automatically deduplicates matching events received within 48 hours.

---

## SECTION 3 — Server-Side Payload Specification (JSON)

### Example: Server-Side Purchase Event POST to Meta Graph API
`POST https://graph.facebook.com/v19.0/123456789012345/events?access_token=EAAC...`

```json
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1740000000,
      "event_id": "pur_RF-ORD-2025-8842",
      "event_source_url": "https://reetfoodsngiftings.com/checkout/success/",
      "action_source": "website",
      "user_data": {
        "em": [
          "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"
        ],
        "ph": [
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
        ],
        "client_ip_address": "103.21.124.5",
        "client_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
      },
      "custom_data": {
        "currency": "INR",
        "value": 3048.00,
        "content_type": "product",
        "content_ids": ["RF-DF-001"],
        "order_id": "RF-ORD-2025-8842"
      }
    }
  ]
}
```

---

## SECTION 4 — Next.js Server Handler Implementation

See `20_Developer_Implementation.md` for the full TypeScript implementation of `/pages/api/capi.ts` (or `/app/api/capi/route.ts`).

---

*References: 06_Meta_Pixel.md, 17_Debugging.md, 20_Developer_Implementation.md*
