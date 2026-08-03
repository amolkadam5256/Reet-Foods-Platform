# OPTIMIZATION_REPORT.md

> Generated: 2026-08-02T08:39:28.210Z

## Summary

| Metric | Value |
|--------|-------|
| Total images processed | 213 |
| Images successfully optimized | 31 |
| Images already optimal (skipped) | 182 |
| Original total size | 319.86 MB |
| Optimized total size | 298.94 MB |
| Total space saved | 20.92 MB |
| Reduction % | 6.5% |
| Duplicate sets (wasted space) | 12 sets = 15.38 MB wasted |
| Unused image candidates | 20 |

## Windows File-Lock Note

> Some assets in `assets/Dummy_Img/` and `assets/Reet Food/` could not be optimized
> because `npm run dev` had them locked. **Run optimization with the dev server stopped:**
> ```
> npm run build -- --help  # stop dev first
> node scripts/optimizeImages.js
> ```

## Successfully Optimized

| File | Orig KB | Opt KB | Saved KB | Saved % |
|------|---------|--------|----------|---------|
| assets/Brand/Logo.png | 992 | 363 | 629 | 63.4% |
| assets/Favicon/apple-icon.png | 52 | 20 | 32 | 62.0% |
| assets/Favicon/apple-touch-icon.png | 52 | 20 | 32 | 62.0% |
| assets/Favicon/favicon-96x96.png | 18 | 8 | 11 | 58.7% |
| assets/Favicon/icon1.png | 18 | 8 | 11 | 58.7% |
| assets/Favicon/web-app-manifest-192x192.png | 58 | 22 | 35 | 61.3% |
| assets/Favicon/web-app-manifest-512x512.png | 340 | 121 | 219 | 64.3% |
| assets/Product 1/Product_1.png | 1749 | 493 | 1256 | 71.8% |
| assets/Product 1/Product_2.png | 2405 | 666 | 1738 | 72.3% |
| assets/Product 1/Product_3.png | 1550 | 470 | 1081 | 69.7% |
| assets/Product 1/Product_4.png | 1786 | 512 | 1273 | 71.3% |
| assets/Product 2/Product_1.png | 1597 | 532 | 1065 | 66.7% |
| assets/Product 2/Product_2.png | 2165 | 708 | 1458 | 67.3% |
| assets/Product 2/Product_3.png | 1482 | 504 | 978 | 66.0% |
| assets/Product 2/Product_4.png | 1663 | 517 | 1145 | 68.9% |
| assets/Product 3/Product_1.png | 2012 | 679 | 1333 | 66.2% |
| assets/Product 3/Product_2.png | 1700 | 572 | 1128 | 66.4% |
| assets/Product 3/Product_3.png | 1866 | 637 | 1229 | 65.8% |
| assets/Product 3/Product_4.png | 1438 | 509 | 929 | 64.6% |
| assets/Product 4/Product_1.png | 1447 | 489 | 958 | 66.2% |
| assets/Product 4/Product_2.png | 1604 | 541 | 1064 | 66.3% |
| assets/Product 4/Product_3.png | 1608 | 562 | 1046 | 65.1% |
| assets/Product 4/Product_4.png | 1843 | 672 | 1171 | 63.5% |
| public/apple-icon.png | 52 | 20 | 32 | 62.0% |
| public/apple-touch-icon.png | 52 | 20 | 32 | 62.0% |
| public/favicon-96x96.png | 18 | 8 | 11 | 58.7% |
| public/icon1.png | 18 | 8 | 11 | 58.7% |
| public/images/logo.png | 992 | 363 | 629 | 63.4% |
| public/logo.png | 992 | 363 | 629 | 63.4% |
| public/web-app-manifest-192x192.png | 58 | 22 | 35 | 61.3% |
| public/web-app-manifest-512x512.png | 340 | 121 | 219 | 64.3% |

## Duplicate Sets Detected (15.38 MB wasted)

| Keep | Duplicates |
|------|-----------|
| assets/Brand/Logo.png | public/images/logo.png, public/logo.png |
| assets/Dummy_Img/anthony-camp-X5LAqXehKJo-unsplash (1).jpg | assets/Dummy_Img/anthony-camp-X5LAqXehKJo-unsplash.jpg |
| assets/Dummy_Img/katya-azimova-QFHN8XN923I-unsplash (1).jpg | assets/Dummy_Img/katya-azimova-QFHN8XN923I-unsplash.jpg |
| assets/Dummy_Img/mel-poole-vQQoZzKO9Ig-unsplash (1).jpg | assets/Dummy_Img/mel-poole-vQQoZzKO9Ig-unsplash.jpg |
| assets/Dummy_Img/naina-pahuja-aMp74URt0jo-unsplash (1).jpg | assets/Dummy_Img/naina-pahuja-aMp74URt0jo-unsplash.jpg |
| assets/Dummy_Img/sumit-kumar-TPAFv6lvl2w-unsplash (1).jpg | assets/Dummy_Img/sumit-kumar-TPAFv6lvl2w-unsplash.jpg |
| assets/Favicon/apple-icon.png | assets/Favicon/apple-touch-icon.png, public/apple-icon.png, public/apple-touch-icon.png |
| assets/Favicon/favicon-96x96.png | assets/Favicon/icon1.png, public/favicon-96x96.png, public/icon1.png |
| assets/Favicon/favicon.svg | public/favicon.svg |
| assets/Favicon/icon0.svg | public/icon0.svg |
| assets/Favicon/web-app-manifest-192x192.png | public/web-app-manifest-192x192.png |
| assets/Favicon/web-app-manifest-512x512.png | public/web-app-manifest-512x512.png |