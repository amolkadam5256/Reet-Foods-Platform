# Core Web Vitals & Performance Optimization

> **Site:** searchsarkarinaukri.com
> **Tech Stack:** React SPA + Prerender SSR | OneSignal | API-driven
> **Current Status:** ⚠️ Needs comprehensive CWV testing and optimization

---

## Core Web Vitals Overview

### Metric Targets (Google's "Good" Thresholds)

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |

### Current Risks for This Site

| Risk Factor | Impact on CWV | Priority |
|-------------|---------------|----------|
| React SPA hydration | Delays LCP & INP | P0 |
| OneSignal SDK loading | Blocks main thread, hurts INP | P1 |
| Large hero images | LCP candidate | P1 |
| Client-side rendering | Layout shifts (CLS) | P1 |
| API latency | Delays content display | P1 |
| Third-party fonts | CLS & LCP impact | P1 |

---

## Performance Audit Checklist

### LCP Optimization

| Issue | Current State | Fix | Priority |
|-------|---------------|-----|----------|
| Hero image (og-image.png) | 1200×630, likely unoptimized | WebP + preload + proper sizing | P0 |
| React bundle size | Unknown | Code splitting + tree shaking | P0 |
| Prerender latency | Depends on backend | Cache prerendered HTML | P0 |
| Font loading | Google Fonts via preconnect | font-display: swap + preload | P1 |
| Server response time | Unknown | CDN + edge caching | P0 |

### INP Optimization

| Issue | Current State | Fix | Priority |
|-------|---------------|-----|----------|
| OneSignal v16 SDK | Loads on every page | Lazy load + defer | P1 |
| React hydration | Blocks main thread | Optimize component tree | P0 |
| Event handlers | Unknown | Passive listeners + debounce | P1 |
| API calls on interaction | May cause delays | Optimistic UI + caching | P1 |

### CLS Optimization

| Issue | Current State | Fix | Priority |
|-------|---------------|-----|----------|
| Dynamic content injection | Job lists load after render | Reserve space with skeleton loaders | P0 |
| Font swap | Google Fonts may swap | font-display: swap + size-adjust | P1 |
| Ads/popups | OneSignal prompt | Reserve space or load after layout | P1 |
| Image dimensions | Missing width/height | Explicit dimensions on all images | P0 |

---

## Measurement & Monitoring

### Real User Monitoring (RUM)

```javascript
// src/analytics/web-vitals.js
import { onCLS, onFID, onLCP, onINP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  const body = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    page: window.location.pathname,
    timestamp: Date.now()
  };
  
  navigator.sendBeacon('/api/analytics/web-vitals', JSON.stringify(body));
  
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
  }
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onTTFB(sendToAnalytics);
```

### Lab Testing (Lighthouse CI)

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://www.searchsarkarinaukri.com/
            https://www.searchsarkarinaukri.com/jobs
            https://www.searchsarkarinaukri.com/department/mpsc
            https://www.searchsarkarinaukri.com/jobs/sample-job-slug
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

---

## Optimization Implementation Guide

### 1. React Bundle Optimization

```javascript
// vite.config.js or webpack.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          ui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          onesignal: ['onesignal-web'],
          api: ['axios']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
};
```

### 2. Image Optimization

```jsx
// src/components/OptimizedImage.jsx
import { useState } from 'react';

export function OptimizedImage({ src, alt, width, height, priority = false, sizes = '100vw', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrc} />
      <source type="image/webp" srcSet={webpSrc} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
        {...props}
      />
    </picture>
  );
}
```

### 3. Font Optimization

```html
<!-- In index.html head -->
<link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossorigin />

<style>
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('/fonts/inter.woff2') format('woff2');
}
</style>
```

---

## Testing Commands

```bash
# Run Lighthouse locally
npx lighthouse https://www.searchsarkarinaukri.com/ --output=json --output-path=./report.json

# Check TTFB
curl -s -w "TTFB: %{time_starttransfer}s\n" -o /dev/null https://www.searchsarkarinaukri.com/

# Check bundle sizes
ls -lh build/static/js/*.js | awk '{print $5, $9}'
```

---

*Document Version: 1.0 | Updated: July 2026*