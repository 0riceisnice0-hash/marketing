# Hydron Marketing

Production-quality static marketing site built with Astro, TypeScript, and Tailwind CSS. Features UK and US regional content with localStorage persistence, deployed on GitHub Pages.

## Features

- 🌍 **Multi-region support** - UK and US branches with region-specific content, pricing, and spelling
- 🎨 **Modern design** - Clean, professional aesthetic with Tailwind CSS
- ♿ **Accessible** - Keyboard navigable, semantic HTML, ARIA labels, reduced motion support
- 📱 **Mobile-first** - Responsive design that works on all devices
- ⚡ **Fast** - Optimized static site with good Lighthouse scores
- 🔍 **SEO optimized** - Meta tags, Open Graph, Twitter cards, JSON-LD schemas, sitemap
- 📝 **Contact forms** - Spam prevention with honeypot and time-based checks
- 🎯 **No fluff** - Ethical testimonials (clearly labelled as examples), no false claims

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/0riceisnice0-hash/marketing.git
   cd marketing
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321/marketing/
   ```

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll              # GitHub Pages configuration
│   ├── robots.txt             # Search engine directives
│   ├── site.webmanifest       # PWA manifest
│   └── favicon.svg            # Site favicon
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── TrustRow.astro
│   │   ├── OfferCards.astro
│   │   ├── HowItWorks.astro
│   │   ├── ExamplesGallery.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQAccordion.astro
│   │   ├── ContactForm.astro
│   │   └── RegionSwitcher.astro
│   ├── config/
│   │   └── site.ts            # Site configuration (pricing, regions, content)
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base HTML layout with SEO
│   │   └── RegionLayout.astro # Layout with navigation and footer
│   └── pages/
│       ├── index.astro        # Homepage with region selector
│       ├── 404.astro          # Custom 404 page
│       ├── uk/                # UK region pages
│       │   ├── index.astro
│       │   ├── websites.astro
│       │   ├── pricing.astro
│       │   ├── how-it-works.astro
│       │   ├── examples.astro
│       │   └── contact.astro
│       └── us/                # US region pages
│           ├── index.astro
│           ├── websites.astro
│           ├── pricing.astro
│           ├── how-it-works.astro
│           ├── examples.astro
│           └── contact.astro
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## Configuration

### Site Configuration

Edit `src/config/site.ts` to update:

- **Pricing** - Per-region pricing for all packages
- **Branch details** - Contact info for UK and US branches
- **Testimonials** - Example client testimonials (clearly labelled)
- **Example projects** - Demo project cards
- **FAQ items** - Frequently asked questions
- **Social links** - Social media URLs

### Contact Form

The contact form uses Formspree. To enable it:

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Update the form action URL in `src/components/ContactForm.astro`:
   ```astro
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

Alternative: Use Netlify Forms if deploying to Netlify instead of GitHub Pages.

## Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. The site will automatically build and deploy via GitHub Actions

4. **Access your site** at:
   ```
   https://0riceisnice0-hash.github.io/marketing/
   ```

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Upload the contents of dist/ to your hosting provider
```

## Region Support

The site supports two regions: UK and US

### Region Differences

- **Currency**: GBP (£) for UK, USD ($) for US
- **Spelling**: British spelling for UK, American spelling for US
- **Contact details**: Separate phone, email, and WhatsApp for each region
- **Pricing**: Different pricing tiers per region

### Region Persistence

User's region selection is stored in `localStorage` and persists across sessions. The homepage automatically redirects to the user's preferred region.

## SEO

### Meta Tags

Each page includes:
- Unique title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### JSON-LD Schemas

Included schemas:
- Organization schema for Hydron Marketing
- LocalBusiness schema for UK and US branches
- Service schema for website design services

### Sitemap

Automatically generated at build time via `@astrojs/sitemap`

## Accessibility

- ✅ Keyboard navigable
- ✅ Semantic HTML
- ✅ ARIA labels where appropriate
- ✅ Focus indicators
- ✅ Reduced motion support via `prefers-reduced-motion`
- ✅ Good color contrast
- ✅ System fonts (no external font loading)

## Integrity & Ethics

This site follows strict integrity rules:

- ❌ No false Google review claims
- ❌ No fabricated awards
- ✅ Testimonials clearly labelled as "Example testimonials"
- ✅ Demo projects clearly labelled as "Demo example"
- ✅ Footer disclosure about example content

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

All rights reserved.

## Support

For questions or issues:
- UK: hello@hydronmarketing.co.uk
- US: hello@hydronmarketing.com
