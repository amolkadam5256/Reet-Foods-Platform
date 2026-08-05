# 301 Redirect Strategy for URL Migration

> **Site:** searchsarkarinaukri.com
> **Purpose:** Migrate query param URLs to clean SEO-friendly URLs

---

## Current → Target URL Mapping

### Department/Category Redirects (P0)

| Current URL | Target URL | Status Code | Notes |
|-------------|------------|-------------|-------|
| `/jobs?category=mpsc` | `/department/mpsc` | 301 | MPSC Bharti |
| `/jobs?category=upsc` | `/department/upsc` | 301 | UPSC Civil Services |
| `/jobs?category=ssc` | `/department/ssc` | 301 | SSC Exams |
| `/jobs?category=railway` | `/department/railway` | 301 | RRB Railway |
| `/jobs?category=banking` | `/department/banking` | 301 | IBPS/SBI/RBI |
| `/jobs?category=police` | `/department/police` | 301 | Police Bharti |
| `/jobs?category=talathi` | `/department/talathi` | 301 | Talathi Bharti |
| `/jobs?category=zp` | `/department/zilla-parishad` | 301 | ZP Recruitment |
| `/jobs?category=forest` | `/department/forest` | 301 | Forest Dept |
| `/jobs?category=health` | `/department/health` | 301 | NHM/Health |
| `/jobs?category=education` | `/department/education` | 301 | Teacher Bharti |
| `/jobs?category=central` | `/department/central-govt` | 301 | Central Govt Jobs |

### District Redirects (P0)

| Current URL | Target URL | Status Code |
|-------------|------------|-------------|
| `/jobs?district_slug=pune` | `/district/pune` | 301 |
| `/jobs?district_slug=mumbai-city` | `/district/mumbai` | 301 |
| `/jobs?district_slug=nagpur` | `/district/nagpur` | 301 |
| `/jobs?district_slug=nashik` | `/district/nashik` | 301 |
| `/jobs?district_slug=thane` | `/district/thane` | 301 |
| `/jobs?district_slug=chhatrapati-sambhajinagar` | `/district/chhatrapati-sambhajinagar` | 301 |
| `/jobs?district_slug=solapur` | `/district/solapur` | 301 |
| `/jobs?district_slug=kolhapur` | `/district/kolhapur` | 301 |
| `/jobs?district_slug=amravati` | `/district/amravati` | 301 |
| `/jobs?district_slug=satara` | `/district/satara` | 301 |
| `/jobs?district_slug=sangli` | `/district/sangli` | 301 |
| `/jobs?district_slug=ahmednagar` | `/district/ahilyanagar` | 301 |
| `/jobs?district_slug=jalgaon` | `/district/jalgaon` | 301 |
| `/jobs?district_slug=latur` | `/district/latur` | 301 |
| `/jobs?district_slug=nanded` | `/district/nanded` | 301 |
| `/jobs?district_slug=yavatmal` | `/district/yavatmal` | 301 |
| `/jobs?district_slug=ratnagiri` | `/district/ratnagiri` | 301 |
| `/jobs?district_slug=raigad` | `/district/raigad` | 301 |
| ... + 18 more districts | ... | 301 |

### Search & Other Query Params (P1)

| Current URL | Target URL | Status Code | Notes |
|-------------|------------|-------------|-------|
| `/jobs?search=query` | `/jobs` | 301 | Search results canonical to base |
| `/jobs?category=xxx&district_slug=yyy` | `/department/xxx?district_slug=yyy` | 301 | Preserve district filter |
| `/jobs?page=2` | `/jobs/page/2` | 301 | Pagination cleanup |

---

## Implementation Methods

### Method 1: Apache/Nginx Configuration (Recommended)

#### Apache (.htaccess)

```apache
# .htaccess (in web root)
RewriteEngine On

# Redirect www to non-www or vice versa (choose one)
RewriteCond %{HTTP_HOST} ^searchsarkarinaukri\.com [NC]
RewriteRule ^(.*)$ https://www.searchsarkarinaukri.com/$1 [L,R=301]

# HTTPS enforcement
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ========================================
# DEPARTMENT / CATEGORY REDIRECTS
# ========================================

# Exact query param matches (most common)
RewriteCond %{QUERY_STRING} ^category=mpsc$
RewriteRule ^jobs$ /department/mpsc? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=upsc$
RewriteRule ^jobs$ /department/upsc? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=ssc$
RewriteRule ^jobs$ /department/ssc? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=railway$
RewriteRule ^jobs$ /department/railway? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=banking$
RewriteRule ^jobs$ /department/banking? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=police$
RewriteRule ^jobs$ /department/police? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=talathi$
RewriteRule ^jobs$ /department/talathi? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=zp$
RewriteRule ^jobs$ /department/zilla-parishad? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=forest$
RewriteRule ^jobs$ /department/forest? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=health$
RewriteRule ^jobs$ /department/health? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=education$
RewriteRule ^jobs$ /department/education? [R=301,L]

RewriteCond %{QUERY_STRING} ^category=central$
RewriteRule ^jobs$ /department/central-govt? [R=301,L]

# ========================================
# DISTRICT REDIRECTS (36 districts)
# ========================================

RewriteCond %{QUERY_STRING} ^district_slug=pune$
RewriteRule ^jobs$ /district/pune? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=mumbai-city$
RewriteRule ^jobs$ /district/mumbai? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=nagpur$
RewriteRule ^jobs$ /district/nagpur? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=nashik$
RewriteRule ^jobs$ /district/nashik? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=thane$
RewriteRule ^jobs$ /district/thane? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=chhatrapati-sambhajinagar$
RewriteRule ^jobs$ /district/chhatrapati-sambhajinagar? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=solapur$
RewriteRule ^jobs$ /district/solapur? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=kolhapur$
RewriteRule ^jobs$ /district/kolhapur? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=amravati$
RewriteRule ^jobs$ /district/amravati? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=satara$
RewriteRule ^jobs$ /district/satara? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=sangli$
RewriteRule ^jobs$ /district/sangli? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=ahmednagar$
RewriteRule ^jobs$ /district/ahilyanagar? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=jalgaon$
RewriteRule ^jobs$ /district/jalgaon? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=latur$
RewriteRule ^jobs$ /district/latur? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=nanded$
RewriteRule ^jobs$ /district/nanded? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=yavatmal$
RewriteRule ^jobs$ /district/yavatmal? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=ratnagiri$
RewriteRule ^jobs$ /district/ratnagiri? [R=301,L]

RewriteCond %{QUERY_STRING} ^district_slug=raigad$
RewriteRule ^jobs$ /district/raigad? [R=301,L]

# ... Add remaining 18 districts similarly

# ========================================
# COMBINED QUERY PARAMS (category + district)
# ========================================

# /jobs?category=mpsc&district_slug=pune → /department/mpsc?district_slug=pune
RewriteCond %{QUERY_STRING} ^category=([^&]+)&district_slug=([^&]+)$
RewriteRule ^jobs$ /department/%1?district_slug=%2 [R=301,L]

# ========================================
# SEARCH & PAGINATION
# ========================================

# Search queries → base jobs page
RewriteCond %{QUERY_STRING} ^search=.+$
RewriteRule ^jobs$ /jobs? [R=301,L]

# Pagination → clean pagination URLs
RewriteCond %{QUERY_STRING} ^page=([0-9]+)$
RewriteRule ^jobs$ /jobs/page/%1? [R=301,L]

# ========================================
# REMOVE TRAILING SLASHES (if applicable)
# ========================================

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
```

#### Nginx Configuration

```nginx
# /etc/nginx/sites-available/searchsarkarinaukri.com

server {
    listen 80;
    server_name searchsarkarinaukri.com www.searchsarkarinaukri.com;
    return 301 https://www.searchsarkarinaukri.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.searchsarkarinaukri.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    root /var/www/searchsarkarinaukri.com/build;
    index index.html;

    # ========================================
    # DEPARTMENT / CATEGORY REDIRECTS
    # ========================================
    
    location /jobs {
        # category=mpsc
        if ($args = "category=mpsc") {
            rewrite ^ /department/mpsc? permanent;
        }
        
        # category=upsc
        if ($args = "category=upsc") {
            rewrite ^ /department/upsc? permanent;
        }
        
        # category=ssc
        if ($args = "category=ssc") {
            rewrite ^ /department/ssc? permanent;
        }
        
        # category=railway
        if ($args = "category=railway") {
            rewrite ^ /department/railway? permanent;
        }
        
        # category=banking
        if ($args = "category=banking") {
            rewrite ^ /department/banking? permanent;
        }
        
        # category=police
        if ($args = "category=police") {
            rewrite ^ /department/police? permanent;
        }
        
        # category=talathi
        if ($args = "category=talathi") {
            rewrite ^ /department/talathi? permanent;
        }
        
        # category=zp
        if ($args = "category=zp") {
            rewrite ^ /department/zilla-parishad? permanent;
        }
        
        # category=forest
        if ($args = "category=forest") {
            rewrite ^ /department/forest? permanent;
        }
        
        # category=health
        if ($args = "category=health") {
            rewrite ^ /department/health? permanent;
        }
        
        # category=education
        if ($args = "category=education") {
            rewrite ^ /department/education? permanent;
        }
        
        # category=central
        if ($args = "category=central") {
            rewrite ^ /department/central-govt? permanent;
        }
        
        # ========================================
        # DISTRICT REDIRECTS (use map for efficiency)
        # ========================================
        
        # district_slug=pune
        if ($args = "district_slug=pune") {
            rewrite ^ /district/pune? permanent;
        }
        
        # district_slug=mumbai-city
        if ($args = "district_slug=mumbai-city") {
            rewrite ^ /district/mumbai? permanent;
        }
        
        # district_slug=nagpur
        if ($args = "district_slug=nagpur") {
            rewrite ^ /district/nagpur? permanent;
        }
        
        # ... Add all 36 districts
        
        # Combined category + district
        if ($args ~* "^category=([^&]+)&district_slug=([^&]+)$") {
            set $cat $1;
            set $dist $2;
            rewrite ^ /department/$cat?district_slug=$dist permanent;
        }
        
        # Search queries
        if ($args ~* "^search=") {
            rewrite ^ /jobs? permanent;
        }
        
        # Pagination
        if ($args ~* "^page=([0-9]+)$") {
            rewrite ^ /jobs/page/$1? permanent;
        }
    }

    # React SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Method 2: React Router + Server-Side Redirects

If using a Node.js/Express backend for prerender:

```javascript
// server.js (Express)
const express = require('express');
const app = express();

// Redirect middleware for query params
app.get('/jobs', (req, res, next) => {
  const { category, district_slug, search, page } = req.query;
  
  // Department redirects
  const departmentMap = {
    'mpsc': 'mpsc',
    'upsc': 'upsc',
    'ssc': 'ssc',
    'railway': 'railway',
    'banking': 'banking',
    'police': 'police',
    'talathi': 'talathi',
    'zp': 'zilla-parishad',
    'forest': 'forest',
    'health': 'health',
    'education': 'education',
    'central': 'central-govt'
  };
  
  if (category && departmentMap[category]) {
    return res.redirect(301, `/department/${departmentMap[category]}`);
  }
  
  // District redirects
  const districtMap = {
    'pune': 'pune',
    'mumbai-city': 'mumbai',
    'nagpur': 'nagpur',
    'nashik': 'nashik',
    'thane': 'thane',
    'chhatrapati-sambhajinagar': 'chhatrapati-sambhajinagar',
    // ... all 36 districts
  };
  
  if (district_slug && districtMap[district_slug]) {
    return res.redirect(301, `/district/${districtMap[district_slug]}`);
  }
  
  // Search redirect
  if (search) {
    return res.redirect(301, '/jobs');
  }
  
  // Pagination redirect
  if (page) {
    return res.redirect(301, `/jobs/page/${page}`);
  }
  
  next(); // Continue to prerender
});
```

### Method 3: Cloudflare Workers / Edge Redirects

For maximum performance, implement at edge:

```javascript
// cloudflare-worker.js
const DEPARTMENT_MAP = {
  'mpsc': 'mpsc',
  'upsc': 'upsc',
  'ssc': 'ssc',
  'railway': 'railway',
  'banking': 'banking',
  'police': 'police',
  'talathi': 'talathi',
  'zp': 'zilla-parishad',
  'forest': 'forest',
  'health': 'health',
  'education': 'education',
  'central': 'central-govt'
};

const DISTRICT_MAP = {
  'pune': 'pune',
  'mumbai-city': 'mumbai',
  'nagpur': 'nagpur',
  'nashik': 'nashik',
  'thane': 'thane',
  'chhatrapati-sambhajinagar': 'chhatrapati-sambhajinagar',
  // ... all 36
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Only handle /jobs with query params
  if (url.pathname === '/jobs' && url.search) {
    const params = new URLSearchParams(url.search);
    
    // Department redirect
    const category = params.get('category');
    if (category && DEPARTMENT_MAP[category]) {
      params.delete('category');
      const target = `/department/${DEPARTMENT_MAP[category]}`;
      if (params.toString()) {
        return Response.redirect(`${target}?${params}`, 301);
      }
      return Response.redirect(target, 301);
    }
    
    // District redirect
    const district = params.get('district_slug');
    if (district && DISTRICT_MAP[district]) {
      params.delete('district_slug');
      const target = `/district/${DISTRICT_MAP[district]}`;
      if (params.toString()) {
        return Response.redirect(`${target}?${params}`, 301);
      }
      return Response.redirect(target, 301);
    }
    
    // Search redirect
    if (params.has('search')) {
      return Response.redirect('/jobs', 301);
    }
    
    // Pagination redirect
    const page = params.get('page');
    if (page && /^\d+$/.test(page)) {
      return Response.redirect(`/jobs/page/${page}`, 301);
    }
  }
  
  // Pass through for all other requests
  return fetch(request);
}
```

---

## Pre-Migration Checklist

### Before Deployment

- [ ] All target URLs (`/department/*`, `/district/*`) return 200
- [ ] Target pages have proper content (not empty)
- [ ] Target pages have correct canonical tags
- [ ] Target pages have proper meta tags (title, description, og:*)
- [ ] Target pages have structured data schema
- [ ] Sitemap includes all new clean URLs
- [ ] robots.txt updated (block old query params)
- [ ] Internal links updated to point to new URLs
- [ ] Analytics events updated for new URLs
- [ ] Test redirect chain (no redirect loops)

### Testing Commands

```bash
# Test single redirect
curl -sI "https://www.searchsarkarinaukri.com/jobs?category=mpsc" | grep -i "location"

# Test redirect chain
curl -sIL "https://www.searchsarkarinaukri.com/jobs?category=mpsc"

# Verify target returns 200
curl -sI "https://www.searchsarkarinaukri.com/department/mpsc" | head -1

# Test all categories
for cat in mpsc upsc ssc railway banking police talathi zp forest health education central; do
  echo "Testing $cat..."
  curl -sI "https://www.searchsarkarinaukri.com/jobs?category=$cat" | grep -i "location"
done

# Test all districts
for dist in pune mumbai-city nagpur nashik thane chhatrapati-sambhajinagar solapur kolhapur amravati satara sangli ahmednagar jalgaon latur nanded yavatmal ratnagiri raigad; do
  echo "Testing $dist..."
  curl -sI "https://www.searchsarkarinaukri.com/jobs?district_slug=$dist" | grep -i "location"
done
```

---

## Post-Migration Monitoring

### Google Search Console

1. **URL Inspection Tool** - Submit new URLs for indexing
2. **Coverage Report** - Monitor for 404s on old URLs
3. **Redirect Report** - Verify 301s are recognized
4. **Sitemaps** - Submit updated sitemap

### Analytics Tracking

```javascript
// Track redirect hits for monitoring
gtag('event', 'url_redirect', {
  'redirect_from': '/jobs?category=mpsc',
  'redirect_to': '/department/mpsc',
  'redirect_type': '301'
});
```

### Log Analysis

```bash
# Check server logs for redirect hits
grep "jobs?category=" /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn

# Check for redirect chains (should be single 301)
grep " 301 " /var/log/nginx/access.log | head -20
```

---

## Rollback Plan

If issues arise:

1. **Disable redirects** in .htaccess/nginx config
2. **Revert robots.txt** to allow query params
3. **Update sitemap** to include old URLs temporarily
4. **Monitor GSC** for 48 hours
5. **Investigate and fix** before re-enabling

---

## Related Resources

- [Google 301 Redirect Guidelines](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Moz 301 Redirect Guide](https://moz.com/learn/seo/redirection)
- [Apache mod_rewrite Guide](https://httpd.apache.org/docs/2.4/rewrite/intro.html)
- [Nginx Rewrite Module](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html)

---

*Document Version: 1.0 | Updated: July 2026*