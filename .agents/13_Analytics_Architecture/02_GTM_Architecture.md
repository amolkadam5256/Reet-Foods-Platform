# 02_GTM_Architecture.md
# Google Tag Manager Architecture — Reet Foods & Giftings

---

## SECTION 1 — Container Architecture & Naming Conventions

### Container Details
- **Container Name:** Reet Foods & Giftings Web Container
- **Container Public ID:** `GTM-XXXXXXX`
- **Target Platform:** Web (Next.js SSR / Client Hydrated App)

### Folder Hierarchy

```
GTM Container (GTM-XXXXXXX)
├── 01 - Base & Config Tags (GA4 Config, Meta Base, Clarity Base, Ads Conversion Linker)
├── 02 - GA4 Events (Standard, Custom, E-commerce, Key Events)
├── 03 - Meta Pixel Events (PageView, Lead, Contact, Purchase)
├── 04 - Google Ads Events (Conversions, Enhanced Conversions, Remarketing)
├── 05 - Microsoft Clarity Tags
├── 06 - Consent & Privacy (Consent Mode v2 Initialization, Update Tags)
└── 07 - Core Utility Variables (DataLayer Readers, User Data Hashers, Constants)
```

---

## SECTION 2 — Naming Convention Specification

### Tags
Format: `[Platform] - [Type] - [Detail]`
- `GA4 - Config - Base`
- `GA4 - Event - generate_lead`
- `GA4 - Event - purchase`
- `Meta - Pixel - PageView`
- `Meta - Pixel - Lead`
- `GAds - Conversion - Corporate Lead`
- `Clarity - Tag - Script Injection`

### Triggers
Format: `[Event/Action Type] - [Detail]`
- `CE - generate_lead` (Custom Event)
- `CE - purchase` (Custom Event)
- `Click - Phone Link`
- `Click - WhatsApp Button`
- `Click - Catalogue Download`
- `Visibility - Success Message`

### Variables
Format: `[Type] - [Detail]`
- `DLV - ecommerce.items` (Data Layer Variable)
- `DLV - user_data.email` (Data Layer Variable)
- `Const - GA4 Measurement ID` (Constant)
- `Const - Meta Pixel ID` (Constant)
- `JS - Formatted Hash Email` (Custom JavaScript)

---

## SECTION 3 — Variable Library

| Variable Name | Variable Type | Configuration / Output |
|---------------|---------------|------------------------|
| `Const - GA4 Measurement ID` | Constant | `G-XXXXXXXXXX` |
| `Const - Meta Pixel ID` | Constant | `123456789012345` |
| `Const - Google Ads ID` | Constant | `AW-123456789` |
| `DLV - ecommerce` | Data Layer Variable | `ecommerce` |
| `DLV - ecommerce.items` | Data Layer Variable | `ecommerce.items` |
| `DLV - transaction_id` | Data Layer Variable | `ecommerce.transaction_id` |
| `DLV - value` | Data Layer Variable | `ecommerce.value` |
| `DLV - lead_type` | Data Layer Variable | `lead_type` |
| `DLV - city_location` | Data Layer Variable | `city_location` |
| `DLV - user_data` | Data Layer Variable | `user_data` |

---

## SECTION 4 — Trigger Registry

| Trigger Name | Trigger Type | Event / Condition |
|--------------|--------------|-------------------|
| `CE - generate_lead` | Custom Event | Event Name equals `generate_lead` |
| `CE - purchase` | Custom Event | Event Name equals `purchase` |
| `CE - add_to_cart` | Custom Event | Event Name equals `add_to_cart` |
| `CE - begin_checkout` | Custom Event | Event Name equals `begin_checkout` |
| `Click - Phone Link` | Just Links | Click URL starts with `tel:` |
| `Click - WhatsApp Button` | All Elements | Click Element / Class contains `whatsapp` OR Click URL contains `wa.me` or `api.whatsapp.com` |
| `Click - Catalogue Download` | Just Links | Click URL ends with `.pdf` AND Click URL contains `catalogue` |
| `Consent - Granted` | Custom Event | Event Name equals `consent_update_granted` |

---

## SECTION 5 — Tag Registry

| Tag Name | Tag Type | Trigger | Firing Priority |
|----------|----------|---------|-----------------|
| `Consent - Init` | Consent Initialization | Initialization - All Pages | 100 (Highest) |
| `GA4 - Config - Base` | Google Tag (GA4) | Initialization - All Pages | 90 |
| `Meta - Pixel - Base` | Custom HTML | All Pages | 80 |
| `Clarity - Tag - Base` | Custom HTML | All Pages | 70 |
| `GA4 - Event - generate_lead` | GA4 Event | `CE - generate_lead` | 50 |
| `GA4 - Event - purchase` | GA4 Event | `CE - purchase` | 50 |
| `Meta - Pixel - Lead` | Custom HTML / Pixel Tag | `CE - generate_lead` | 50 |
| `GAds - Conversion - Lead` | Google Ads Conversion Tracking | `CE - generate_lead` | 50 |

---

## SECTION 6 — Workflow & Version Governance

1. **Development & Preview:** All tag updates must be tested in GTM Preview Mode using Tag Assistant.
2. **Naming Releases:** Container versions must follow semantic formatting: `v1.2.0 - [Feature Description]`.
3. **Approval Checklist:**
   - [ ] No tags fired without proper consent check.
   - [ ] DataLayer payloads match exact schema specs.
   - [ ] GTM Preview Mode verified on Desktop & Mobile views.

---

*References: 01_GA4_Architecture.md, 03_Event_Tracking.md, 18_QA_Checklist.md*
