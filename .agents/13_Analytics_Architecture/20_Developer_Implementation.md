# 20_Developer_Implementation.md
# Developer Implementation Guide & Code Snippets — Reet Foods & Giftings

---

## Tech Stack
- **Framework:** Next.js (App Router / Pages Router)
- **Language:** TypeScript
- **Container:** Google Tag Manager (`GTM-XXXXXXX`)

---

## 1. GTM Script Component (`components/analytics/GTM.tsx`)

```tsx
import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export default function GTM() {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* GTM Noscript Fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
```

---

## 2. DataLayer Helper Utilities (`lib/analytics/dataLayer.ts`)

```typescript
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Safely push custom event to window.dataLayer
 */
export const pushToDataLayer = (payload: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
};

/**
 * SHA-256 Hasher for PII (Email & Phone)
 */
export const sha256Hash = async (value: string): Promise<string> => {
  const cleanValue = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(cleanValue);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};

/**
 * Trigger Corporate Lead Event
 */
export const trackCorporateLead = async (data: {
  email: string;
  phone: string;
  cityLocation: string;
  corporateSize: string;
  industryVertical: string;
  estimatedQuantity: number;
}) => {
  const hashedEmail = await sha256Hash(data.email);
  const hashedPhone = await sha256Hash(data.phone);

  pushToDataLayer({
    event: 'generate_lead',
    lead_type: 'corporate_bulk_quote',
    city_location: data.cityLocation,
    corporate_size: data.corporateSize,
    industry_vertical: data.industryVertical,
    estimated_unit_quantity: data.estimatedQuantity,
    form_id: 'corporate_quote_form',
    user_data: {
      email: hashedEmail,
      phone: hashedPhone,
    },
  });
};

/**
 * Trigger Phone Link Click
 */
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  pushToDataLayer({
    event: 'phone_call_click',
    phone_number: phoneNumber,
    click_location: location,
  });
};

/**
 * Trigger WhatsApp Button Click
 */
export const trackWhatsAppClick = (location: string, productContext?: string) => {
  pushToDataLayer({
    event: 'whatsapp_click',
    whatsapp_number: '+919890609611',
    click_location: location,
    product_context: productContext || 'General Inquiry',
  });
};
```

---

## 3. Server-Side Meta CAPI Route (`pages/api/capi.ts` / Next.js API)

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

const PIXEL_ID = process.env.META_PIXEL_ID || '123456789012345';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { eventName, eventId, eventSourceUrl, userData, customData } = req.body;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || 'https://reetfoodsngiftings.com',
          action_source: 'website',
          user_data: {
            em: userData?.hashedEmail ? [userData.hashedEmail] : undefined,
            ph: userData?.hashedPhone ? [userData.hashedPhone] : undefined,
            client_ip_address: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
            client_user_agent: req.headers['user-agent'],
          },
          custom_data: customData || {},
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    return res.status(200).json({ success: true, metaResponse: result });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
```

---

## 4. E-commerce Purchase Tracking Implementation Example

```typescript
import { pushToDataLayer } from '@/lib/analytics/dataLayer';

export const trackPurchase = (order: {
  orderId: string;
  totalValue: number;
  tax: number;
  shipping: number;
  items: Array<{ id: string; name: string; category: string; price: number; quantity: number }>;
}) => {
  // 1. Clear previous ecommerce object
  pushToDataLayer({ ecommerce: null });

  // 2. Push purchase event
  pushToDataLayer({
    event: 'purchase',
    ecommerce: {
      transaction_id: order.orderId,
      value: order.totalValue,
      tax: order.tax,
      shipping: order.shipping,
      currency: 'INR',
      items: order.items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_brand: 'Reet Foods',
        item_category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
    },
  });

  // 3. Trigger Server CAPI Endpoint for Meta
  fetch('/api/capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName: 'Purchase',
      eventId: `pur_${order.orderId}`,
      eventSourceUrl: window.location.href,
      customData: {
        currency: 'INR',
        value: order.totalValue,
        order_id: order.orderId,
      },
    }),
  }).catch((err) => console.error('CAPI Call Error:', err));
};
```

---

*References: 03_Event_Tracking.md, 04_Enhanced_Ecommerce.md, 07_Conversion_API.md, 18_QA_Checklist.md*
