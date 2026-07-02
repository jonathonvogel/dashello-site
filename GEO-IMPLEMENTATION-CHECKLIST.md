# GEO Implementation Checklist — Dashello

Generated: July 2, 2026

---

## Section 1: Completed (per page)

### Homepage (`/index.html`)
- [ ] No structured data deployed.

### About (`/about.html`)
- [ ] No structured data deployed.

### Contact (`/contact.html`)
- [ ] No structured data deployed.

### Jobs (`/jobs.html`)
- [ ] No structured data deployed.

### Privacy (`/privacy.html`)
- [ ] No structured data deployed.

### Pricing (`/pricing/index.html`)
- [ ] No structured data deployed.

### API Docs (`/dev/index.html`)
- [ ] No structured data deployed.

### Blog Index (`/blog/index.html`)
- [x] `CollectionPage`: name, description, url, about (Thing)

### Blog Post: Zapier (`/blog/zapier-integration/`)
- [x] `BlogPosting`: headline, description, image (3 sizes), datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT10M), tool (2 items), step (6 steps)
- [x] `BreadcrumbList`: Home → Blog → Zapier Integration

### Blog Post: Google Sheets (`/blog/google-sheets-integration/`)
- [x] `BlogPosting`: headline, description, image, datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT10M), step (4 steps)
- [x] `BreadcrumbList`: Home → Blog → Google Sheets Integration

### Blog Post: QuickBooks (`/blog/quickbooks-integration/`)
- [x] `BlogPosting`: headline, description, image, datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT10M), step (4 steps)
- [x] `BreadcrumbList`: Home → Blog → QuickBooks Integration

### Blog Post: Stripe (`/blog/stripe-integration/`)
- [x] `BlogPosting`: headline, description, image, datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT10M), step (5 steps)
- [x] `BreadcrumbList`: Home → Blog → Stripe Integration

### Blog Post: Make (`/blog/make-integration/`)
- [x] `BlogPosting`: headline, description, image, datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT8M), step (5 steps)
- [x] `BreadcrumbList`: Home → Blog → Make Integration

### Blog Post: JobTread (`/blog/jobtread-integration/`)
- [x] `BlogPosting`: headline, description, image, datePublished, dateModified, author (Organization), publisher (Organization)
- [x] `HowTo`: name, description, estimatedTime (PT10M), step (5 steps)
- [x] `BreadcrumbList`: Home → Blog → JobTread Integration

---

## Section 2: Validation Steps

1. Paste any URL into [Schema.org Validator](https://validator.schema.org/). Start with a blog post (e.g. `/blog/zapier-integration/`) since it has the most schema.
2. Paste key pages into [Google Rich Results Test](https://search.google.com/test/rich-results). Test the blog index and any blog post to confirm HowTo and BreadcrumbList eligibility.
3. Submit sitemap via [Google Search Console](https://search.google.com/search-console). The sitemap is at `https://dashello.co/sitemap.xml` with 14 URLs.
4. Test crawler access — there is no `robots.txt`, so all crawlers can access everything. Create a robots.txt and test it via Google's robots.txt Tester in Search Console.

---

## Section 3: Known Data Gaps

| Gap | Location | Recommended Action |
|-----|----------|-------------------|
| No meta description | / , /about , /contact , /jobs , /privacy , /pricing/ , /dev | Add `<meta name="description">` to all 7 non-blog pages |
| No canonical URL | / , /about , /contact , /jobs , /privacy , /pricing/ , /dev | Add `<link rel="canonical">` to all 7 pages |
| No Open Graph tags | / , /about , /contact , /jobs , /privacy , /pricing/ , /dev | Add og:title, og:description, og:url, og:type, og:image |
| No Twitter Card | / , /about , /contact , /jobs , /privacy , /pricing/ , /dev | Add twitter:card, twitter:title, twitter:description, twitter:image |
| No structured data | / , /about , /contact , /jobs , /privacy , /pricing/ , /dev | Add WebSite to homepage, Organization to /about, BreadcrumbList everywhere |
| Author is Organization | All 6 blog posts | Change author from Organization to Person type |
| No robots.txt | Site root | Create with crawler rules including AI crawler directives |
| No favicon | Site root | Add favicon.ico and PNG variants |
| No WebSite schema | / (homepage) | Add WebSite with potentialAction/SearchAction |
| No Organization schema | /about | Add Organization with name, url, logo, sameAs |
| Sitemap missing lastmod | sitemap.xml | Add `<lastmod>` to all 14 URLs |
| No NAP in any schema | All pages | Add contact info to Organization schema |
| No geo signals | All pages | Even as SaaS, add areaServed to Organization |
| No Person schema | All pages | Create Person schemas for blog authors |
| No AggregateRating | All pages | Add review/testimonial schema if applicable |
| No Service/hasOfferCatalog | /pricing/ | Add service catalog structured data |
| Blog OG images on CDN | All 6 blog posts | Consider hosting OG images locally |
| No manifest.json | Site root | Add for PWA support |

---

## Section 4: Files Modified in This Session

- `schema/index.html` — Created (audit dashboard, noindexed)
- `GEO-IMPLEMENTATION-CHECKLIST.md` — Created (this file)

No existing page files were modified. This audit is read-only for the existing site.
