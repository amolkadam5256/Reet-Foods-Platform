# Domain and DNS

## Domain baseline

| Item | Current evidence | Required owner confirmation |
| --- | --- | --- |
| Primary domain | `searchsarkarinaukri.com` responds publicly | Registrar account and renewal contact |
| Canonical hostname | Both root and `www` must be deliberately configured | Chosen canonical hostname and redirect behavior |
| Public A record | Public lookup included `157.245.102.177` on 2026-07-29 | Origin ownership, IP allowlists, and change process |
| Nameservers | Not confirmed by this audit | DNS provider and authoritative nameserver inventory |

## DNS control requirements

- Enable registrar lock, auto-renewal, multi-factor authentication, and at least two accountable owner contacts.
- Keep an approved DNS inventory covering A/AAAA, CNAME, MX, TXT, CAA, SPF, DKIM, DMARC, and verification records.
- Use change tickets or a dated change log for every production DNS modification.
- Set TTLs deliberately: lower only before planned migrations; restore normal TTLs after validation.
- Do not publish origin IPs unnecessarily when a proxy/CDN architecture is intended.

## Required records to document

| Record family | Purpose | Status to confirm |
| --- | --- | --- |
| Root and `www` routing | Public web traffic | Target, proxy state, canonical redirect |
| Search verification TXT | Search platform ownership | Current values and owners |
| Mail MX/SPF/DKIM/DMARC | Email delivery and spoofing protection | Provider, policy, reporting address |
| CAA | Restrict certificate issuers | Issuer policy |
| Subdomain inventory | Prevent forgotten/publicly exposed services | Owner and lifecycle for each hostname |
