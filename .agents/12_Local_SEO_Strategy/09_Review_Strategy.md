# 09_Review_Strategy.md

# Review Strategy & SOP — Reet Foods & Giftings

---

## Goal

Achieve **100+ Google reviews at 4.8 stars** within 6 months and maintain a continuous review acquisition cadence thereafter.

---

## SECTION 1 — Review Acquisition SOP

### Step 1 — Identify Trigger Points

Collect reviews at these customer touchpoints:

1. **Post-delivery** (1 day after delivery confirmed)
2. **Post-event** (corporate gifting completion, festival order fulfillment)
3. **In-store visit** (show QR code at billing counter)
4. **Repeat orders** (ask on 2nd+ order)

### Step 2 — Review Request Templates

#### WhatsApp Template (Primary Channel)

```
Hi [Customer Name] 👋

Thank you for choosing Reet Foods & Giftings for your [corporate hampers / Diwali gifts]! 🎁

We hope your recipients loved them! 😊

If you're happy with our service, we'd be grateful if you could leave us a quick Google review. It really helps other businesses discover us:

👉 [Google Review Link]

It takes less than 1 minute and means the world to our small team!

Thank you,
Reet Foods & Giftings
📞 +91 9225130732
```

#### Email Template

```
Subject: How was your experience with Reet Foods? 🌟

Dear [Name],

Thank you for your recent order of [Product] from Reet Foods & Giftings!

We hope your gift brought smiles to everyone who received it.

Could you spare 60 seconds to share your experience?

→ Leave a Google Review: [Review Link]

Your feedback helps us serve you better and helps other businesses in Pune find us.

Warm regards,
Reet Foods & Giftings Team
Shop No. F14, Streets of Europe Mall, Hinjewadi Phase I, Pune – 411057
Phone: +91 9225130732 | Email: reetfoodspune@gmail.com
```

#### SMS Template

```
Hi [Name], thank you for ordering from Reet Foods & Giftings! Share your experience: [Review Link] — Team Reet Foods, +91 9225130732
```

---

## SECTION 2 — Response Templates

### Positive Review Response

```
Thank you so much, [Name]! 🙏 We're delighted that you loved our [corporate hampers / dry fruit boxes]! It's our mission to make every gifting moment special. We look forward to serving you again! 🎁 — Reet Foods & Giftings Team
```

### Neutral Review Response (3–4 stars)

```
Thank you for your feedback, [Name]. We're glad you enjoyed the [product] and we take your suggestions seriously. Please reach out to us at reetfoodspune@gmail.com or call +91 9225130732 so we can make it right. We look forward to exceeding your expectations next time!
```

### Negative Review Response

```
Dear [Name], we sincerely apologize for the experience you had. This is not the standard we hold ourselves to. Please contact us directly at reetfoodspune@gmail.com or +91 9225130732 so we can resolve this immediately. We value your business and will do everything to make this right.
```

---

## SECTION 3 — Review Targets

| Platform   | Month 1 | Month 3 | Month 6 | Month 12 |
| ---------- | ------- | ------- | ------- | -------- |
| Google     | 10      | 40      | 100     | 200      |
| Facebook   | 5       | 20      | 50      | 100      |
| Justdial   | 5       | 15      | 30      | 60       |
| Trustpilot | 2       | 10      | 20      | 40       |
| **Total**  | **22**  | **85**  | **200** | **400**  |

---

## SECTION 4 — Review Schema Implementation

Add `aggregateRating` to LocalBusiness schema:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "120",
  "bestRating": "5",
  "worstRating": "1"
}
```

Update monthly with real numbers from Google Business Profile insights.

---

## SECTION 5 — Review Widget on Website

- Embed Google Reviews widget on Homepage, About, and Contact pages.
- Use a third-party tool (e.g., EmbedSocial, Elfsight) to display live reviews.
- Show minimum 5 star reviews rotating in a carousel.
- Link to full Google review page below widget.

---

## SECTION 6 — In-Store QR Code

Create a QR code linking to the Google Review page.

- Display at: billing counter, packaging table, delivery box insert.
- Text: "Love our gifts? Leave us a Google review! 🌟"

---

## SECTION 7 — Review Monitoring

| Task                             | Frequency       | Owner     |
| -------------------------------- | --------------- | --------- |
| Check for new reviews            | Daily           | CS Team   |
| Respond to all reviews           | Within 24 hours | CS Team   |
| Update aggregateRating in schema | Monthly         | Developer |
| Report review KPIs               | Weekly          | SEO Lead  |
| Flag fake/spam reviews           | As needed       | SEO Lead  |

---

_References: 10_Reputation_Management.md, 07_Local_Schema.md, 08_Google_Maps.md_
