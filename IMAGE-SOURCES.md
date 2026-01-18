# Image Sources and Requirements

## Hero Images Needed

All images should be high-quality (1920x1080 or larger), from Unsplash or Pexels, downloaded and stored locally.

### Homepage Hero
- **File**: `public/images/heroes/home-hero.jpg`
- **Subject**: Modern workspace, creative studio, or abstract tech
- **Treatment**: Dark overlay (gradient-overlay), vignette
- **Suggested search**: "modern workspace dark" or "creative studio"

### Websites Page Hero
- **File**: `public/images/heroes/websites-hero.jpg`
- **Subject**: Web design, screens, or digital workspace
- **Treatment**: Blur layer behind, gradient overlay
- **Suggested search**: "web design workspace" or "multiple screens"

### Pricing Page Hero (optional, smaller)
- **File**: `public/images/heroes/pricing-hero.jpg`
- **Subject**: Clean, minimal, professional
- **Treatment**: Subtle gradient overlay
- **Suggested search**: "minimal workspace dark"

### How It Works Page Hero
- **File**: `public/images/heroes/process-hero.jpg`
- **Subject**: Workflow, process, collaboration
- **Treatment**: Dark overlay with vignette
- **Suggested search**: "creative process" or "team collaboration"

### Examples Page Hero
- **File**: `public/images/heroes/examples-hero.jpg`
- **Subject**: Portfolio, showcase, creative work
- **Treatment**: Gradient overlay
- **Suggested search**: "creative portfolio" or "design showcase"

### Contact Page Background
- **File**: `public/images/map-style-bg.svg`
- **Subject**: Abstract map or location graphic (SVG)
- **Treatment**: Subtle, low opacity background pattern
- **Note**: Should be created as SVG, not photo

## Device Mockups for Websites Page

### Mockup Frames
- **Desktop mockup**: `public/images/mockups/desktop-frame.png` or SVG
- **Mobile mockup**: `public/images/mockups/mobile-frame.png` or SVG
- **Tablet mockup** (optional): `public/images/mockups/tablet-frame.png` or SVG

### Screenshot Carousel Images
These will be example website screenshots shown in the device mockups:
- `public/images/mockups/screenshot-1.jpg` - Example business site
- `public/images/mockups/screenshot-2.jpg` - Example portfolio site
- `public/images/mockups/screenshot-3.jpg` - Example service site

## Example Project Images

Update these existing placeholder paths with actual images:
- `public/images/examples/plumber.jpg`
- `public/images/examples/electrician.jpg`
- `public/images/examples/barber.jpg`
- `public/images/examples/cleaner.jpg`
- `public/images/examples/gym.jpg`
- `public/images/examples/landscaper.jpg`

## Placeholder System

For development, we'll use:
1. Unsplash Source API for temporary placeholders during development
2. Replace with downloaded, optimized images before final deployment
3. All final images must be under 500KB each after optimization

## Image Optimization Checklist

- [ ] Download all images from Unsplash/Pexels
- [ ] Resize to appropriate dimensions (max 1920px width for heroes)
- [ ] Optimize with tools like ImageOptim, Squoosh, or Sharp
- [ ] Target file size: <200KB for heroes, <100KB for other images
- [ ] Use WebP format where supported by Astro image optimization
- [ ] Add appropriate alt text for all images

## License Compliance

- All images from Unsplash: Free to use under Unsplash License
- All images from Pexels: Free to use under Pexels License
- No attribution required but recommended
- Keep a record of image sources for compliance
