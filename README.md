# Hydron Marketing

Premium dark-themed static marketing site built with Astro, TypeScript, and Tailwind CSS. Features a cinematic £15,000 studio aesthetic with UK and US regional content, deployed on GitHub Pages.

## Features

### Design & Aesthetics
- 🎨 **Premium Dark Theme** - Sophisticated off-black background with vibrant indigo/purple accents
- ✨ **Glassy Components** - Frosted glass effect cards with blur backdrop
- 🌟 **Gradient Accents** - Smooth color transitions and glow effects
- 🎭 **Cinematic Feel** - Layered surfaces with depth, shadows, and subtle animations
- 🔤 **Premium Typography** - Space Grotesk headings + Inter body text
- 🎬 **Noise Texture** - Subtle grain overlay for added premium feel
- 🎯 **CSS Design Tokens** - Centralized theme system with custom properties

### Regional Features
- 🌍 **Smart Region Detection** - Auto-detects user location via timezone and language
- 🇬🇧🇺🇸 **UK/US Localization** - Region-specific pricing, spelling, and contact info
- 💾 **localStorage Persistence** - Remembers user's region preference
- 🔄 **Premium Region Toggle** - Pill-style switcher with country flags

### User Experience
- 🎬 **Smooth Animations** - Fade-ins, crossfades, and hover micro-interactions
- ♿ **Accessibility First** - Full `prefers-reduced-motion` support
- 📱 **Mobile Optimized** - Responsive design that looks stunning on all devices
- ⚡ **Performance** - Fast static site with optimized assets
- 🎯 **Intuitive Navigation** - Sticky blur navigation bar

### Technical Features
- 🚀 **Modern Stack** - Astro 5 + TypeScript + Tailwind CSS 3
- 🎨 **Motion Library** - Lightweight animations with Motion One
- 🔍 **SEO Optimized** - Meta tags, Open Graph, schemas, sitemap
- 📝 **Smart Components** - Reusable premium button and card components
- 🎯 **Type Safe** - Full TypeScript implementation

### Content Features
- 💎 **Premium Pricing Cards** - Glassy cards with "Most Popular" badge
- 🖼️ **Device Mockups** - Showcase with screenshot carousel
- ⭐ **Testimonials** - Example reviews with gradient avatar badges
- 📊 **FAQ Accordion** - Smooth expand/collapse interactions
- 🎯 **Example Projects** - Case-study style cards with tags

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
│   │   ├── RegionSwitcher.astro
│   │   └── Button.astro       # Premium button component
│   ├── config/
│   │   └── site.ts            # Site configuration (pricing, regions, content)
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base HTML layout with SEO
│   │   └── RegionLayout.astro # Layout with navigation and footer
│   ├── styles/
│   │   ├── global.css         # Global styles
│   │   └── theme.css          # Premium theme tokens and utilities
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
├── IMAGE-SOURCES.md           # Image requirements documentation
└── package.json
```

## Configuration

### Premium Theme Customization

The site uses a centralized theme system with CSS custom properties in `src/styles/theme.css`:

```css
:root {
  /* Color Palette */
  --color-bg-base: #0a0a0a;
  --color-accent-primary: #6366f1;
  --color-accent-secondary: #8b5cf6;
  
  /* Typography */
  --font-heading: 'Space Grotesk', ...;
  --font-body: 'Inter', ...;
  
  /* Spacing, shadows, and more */
}
```

**To customize the theme:**
1. Edit color values in `src/styles/theme.css`
2. Update Tailwind config in `tailwind.config.mjs` for utility classes
3. Adjust font families by updating Google Fonts link in `BaseLayout.astro`

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
