# Otmane Allaoui — Product Design Portfolio

Personal portfolio website showcasing product design work across SaaS, fintech, and AI.

**Live site:** [otmane-portfolio.vercel.app](https://otmane-portfolio.vercel.app) (update after deployment)

## Project Structure

```
.
├── index.html                      # Homepage — hero, projects, about, tools, contact
├── case-infacto.html               # Case study — InFactore fintech platform
├── case-influencer-monitoring.html # Case study — AI influencer monitoring SaaS
├── case-realeasty.html             # Case study — AI real estate intelligence website
├── case-360-base.html              # Case study — AI CRM automation website
├── styles.css                      # All styles — dark theme, responsive, animations
├── script.js                       # Cursor glow, scroll animations, mobile menu
├── 404.html                        # Custom 404 page
├── favicon.svg                     # SVG favicon
├── robots.txt                      # Search engine crawler rules
├── sitemap.xml                     # Sitemap for Google Search Console
├── vercel.json                     # Vercel deployment config (headers, clean URLs)
└── README.md
```

## Tech Stack

- **HTML5** — Semantic markup (`<main>`, `<article>`, `<header>`, `<footer>`)
- **CSS3** — Custom properties, CSS Grid, Flexbox, `clamp()`, glass morphism, gradients
- **Vanilla JS** — Intersection Observer animations, smooth scroll, cursor glow effect
- **Google Fonts** — Inter + JetBrains Mono

No build step. No dependencies. Pure static site.

## SEO Features

| Feature | Status |
|---------|--------|
| Keyword-optimized `<title>` and `<meta description>` | Done |
| Open Graph meta tags (LinkedIn, Facebook) | Done |
| Twitter Card meta tags | Done |
| JSON-LD structured data (Person, WebSite, Article) | Done |
| Canonical URLs | Done |
| `robots.txt` + `sitemap.xml` | Done |
| Semantic HTML (`<main>`, `<article>`, `<header>`) | Done |
| `<meta robots>` directives | Done |
| SVG favicon + theme-color | Done |
| Deferred JS loading | Done |
| Responsive design (mobile-first) | Done |
| Custom 404 page | Done |

## Run Locally

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node (npx, no install)
npx serve .

# Then open http://localhost:8000
```

## Deploy to Vercel

### Option A: Via GitHub (recommended)

1. Push this repo to GitHub:
   ```bash
   gh repo create otmane-portfolio --public --source=. --push
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects it as a static site — click **Deploy**
5. Set your custom domain in **Settings > Domains**

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## After Deployment

1. **Replace `otmane-portfolio.vercel.app`** in all HTML files and `sitemap.xml` with your actual domain
   ```bash
   # Find and replace across all files
   grep -rl "otmane-portfolio.vercel.app" . --include="*.html" --include="*.xml" | xargs sed -i '' 's/otmane-portfolio.vercel.app/YOUR-DOMAIN.com/g'
   ```

2. **Create an OG image** (`og-image.png`, 1200x630px) — this is the preview image shown when your site is shared on LinkedIn/Twitter. Place it in the root directory.

3. **Submit sitemap to Google:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your domain
   - Submit `https://YOUR-DOMAIN.com/sitemap.xml`

4. **Link your portfolio on Upwork:**
   - Add the URL to your Upwork profile overview
   - Include it in proposals: "See my full portfolio and case studies at [your-domain]"

## Custom Domain Setup (Vercel)

1. In Vercel dashboard: **Settings > Domains > Add**
2. Enter your domain (e.g., `otmane-portfolio.vercel.app`)
3. Update DNS records at your registrar:
   - **A record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com` (for `www` subdomain)

## License

All rights reserved. This is a personal portfolio — not open source.
