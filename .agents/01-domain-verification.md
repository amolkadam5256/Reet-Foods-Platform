# Domain Verification — Google Search Console

**Domain:** reetfoodsngiftings.com
**Method:** DNS TXT Record

## Purpose

Verifying domain ownership proves to Google that you control
`reetfoodsngiftings.com`, unlocking full access to Search Console data for the
entire domain (all subdomains and protocols — http/https).

## TXT Record to Add

```
google-site-verification=DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss
```

## Step-by-Step Instructions

### 1. Log in to your domain name provider
Sign in to wherever the domain `reetfoodsngiftings.com` is registered
(e.g., GoDaddy, Namecheap, Google Domains, Cloudflare, etc.).

### 2. Open DNS management
Find the **DNS settings**, **DNS management**, or **Advanced DNS** section for
the domain.

### 3. Add a new TXT record
Create a new DNS record with these values:

| Field | Value |
|---|---|
| Type | `TXT` |
| Host / Name | `@` (or leave blank — refers to the root domain) |
| Value / Content | `google-site-verification=DPxYyQPNikU9BiIBScyDNBoP0iQVCV8_Epnfr9ktfss` |
| TTL | Default (or 1 hour / 3600 seconds) |

> The exact field names vary by provider, but you are always adding a **TXT**
> record at the **root domain** with the verification string above as the value.

### 4. Save the record

### 5. Verify in Google Search Console
Go back to Google Search Console and click **Verify**.

> **Note:** DNS changes can take anywhere from a few minutes up to 24–48 hours
> to propagate, depending on the provider and TTL. If verification fails
> immediately after adding the record, wait a few hours (or up to a day) and
> try again.

## Alternative Verification Method

If you cannot access DNS settings for the domain (e.g., managed by a third
party), you can instead verify using a **URL prefix property**, which supports
methods like:
- HTML file upload
- HTML meta tag
- Google Analytics
- Google Tag Manager

More info: https://support.google.com/webmasters/answer/9008080#domain_name_verification

## Troubleshooting

- **Record not found after 24 hours:** Confirm the record was saved correctly
  (no extra quotes, no trailing spaces) and that it's on the root domain, not
  a subdomain like `www`.
- **Multiple TXT records already exist:** That's fine — Google only needs this
  one to be present; it doesn't need to be the only TXT record.
- **Using a DNS proxy/CDN (e.g., Cloudflare):** Make sure the TXT record is
  set to "DNS only" (not proxied) — TXT records aren't proxied anyway, but
  double-check the record type is exactly `TXT`.
