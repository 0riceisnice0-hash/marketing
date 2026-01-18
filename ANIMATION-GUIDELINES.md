# Animation System Guidelines

This document describes the unified animation system implemented across the Hydron Marketing website.

## Overview

The animation system is built with consistency and performance in mind:
- **CSS-first approach**: Animations use CSS wherever possible for better performance
- **Motion One integration**: Lightweight JavaScript library for scroll-triggered animations
- **Accessibility**: Full support for `prefers-reduced-motion`
- **Consistent timing**: Unified duration and easing values

## Core Animation Variables

Located in `/src/styles/animations.css`:

### Duration
- `--anim-duration-fast`: 200ms (quick interactions)
- `--anim-duration-normal`: 350ms (standard transitions)
- `--anim-duration-slow`: 500ms (emphasized effects)
- `--anim-duration-slower`: 700ms (dramatic reveals)

### Easing
- `--anim-easing-standard`: cubic-bezier(0.4, 0, 0.2, 1) (default)
- `--anim-easing-decelerate`: cubic-bezier(0.0, 0, 0.2, 1) (smooth end)
- `--anim-easing-accelerate`: cubic-bezier(0.4, 0, 1, 1) (smooth start)
- `--anim-easing-spring`: cubic-bezier(0.34, 1.56, 0.64, 1) (bouncy)

### Delays
- `--anim-delay-stagger`: 100ms (for sequential items)
- `--anim-delay-short`: 150ms
- `--anim-delay-medium`: 300ms

## Animation Classes

### Headings

**Reveal Animation:**
```html
<h1 class="heading-reveal">Your Heading</h1>
```
Fades in from bottom with 20px translateY offset.

**Gradient Underline:**
```html
<h1 class="heading-underline">Your Heading</h1>
```
Animated gradient underline that sweeps in from left to right.
Add `.animated` class to trigger (handled by scroll observer).

### Buttons

All button animations are automatically applied via the Button component:
- **Glow effect**: `.btn-glow` - Animated halo on hover
- **Press animation**: `.btn-press` - Scale effect on click

### Cards

**Lift on Hover:**
```html
<div class="card-lift">Card content</div>
```
Translates up by 8px on hover.

**Gradient Border:**
```html
<div class="card-gradient-border">Card content</div>
```
Animated rotating gradient border on hover.

**Shadow Bloom:**
```html
<div class="card-shadow-bloom">Card content</div>
```
Pulsing glow shadow effect on hover.

### Lists

**Icon List Stagger:**
```html
<div class="icon-list">
  <div class="icon-list-item">Item 1</div>
  <div class="icon-list-item">Item 2</div>
  <div class="icon-list-item">Item 3</div>
</div>
```
Items reveal with 100ms stagger delay, sliding in from left.

### Sections

**Fade In:**
```html
<section class="section-fade-in">
  Section content
</section>
```
Fades in from bottom when scrolled into view.

**Scale In:**
```html
<section class="section-scale-in">
  Section content
</section>
```
Scales up (0.95 to 1.0) and fades in when scrolled into view.

### Pricing

**Pricing Cards:**
```html
<div class="pricing-card">Pricing tier</div>
```
Lift and glow on hover.

**"Most Popular" Badge:**
```html
<div class="badge-pulse-once">Most Popular</div>
```
Single pulse animation on page load after 500ms delay.

### FAQ Accordion

**Accordion Content:**
```html
<div class="accordion-content">Content</div>
```
Springy expand/collapse using max-height transition.
Add `.open` class to expand.

**Accordion Icon:**
```html
<svg class="accordion-icon">...</svg>
```
Rotates 180deg when parent has `.rotated` class.

### Scroll to Top Button

Automatically styled when using the ScrollToTop component:
```html
<button class="scroll-top-btn visible">↑</button>
```
Fades in when `.visible` class is added (after 300px scroll).

## Utility Classes

**Animation Delays:**
```html
<div class="anim-delay-1">Delayed by 100ms</div>
<div class="anim-delay-2">Delayed by 200ms</div>
<div class="anim-delay-3">Delayed by 300ms</div>
<!-- etc, up to anim-delay-5 -->
```

## Scroll-Triggered Animations

The `/src/utils/animations.ts` module uses Motion One's `inView` API to trigger animations:

### Sections
Elements with `.section-fade-in` or `.section-scale-in` automatically animate when 20% visible.

### Icon Lists  
Elements within `.icon-list` containers automatically stagger when 30% visible.

### Heading Underlines
Elements with `.heading-underline` trigger the underline animation when 80% visible.

## Accessibility

All animations automatically respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Additionally:
- Smooth scrolling is disabled when reduced motion is preferred
- Hover transforms (lift, scale) are disabled
- Click animations are disabled

## Performance Considerations

1. **CSS over JavaScript**: Most animations use pure CSS for better performance
2. **Transform/opacity only**: Animations primarily use GPU-accelerated properties
3. **Intersection Observer**: Scroll-triggered animations only activate when needed
4. **Motion One**: Lightweight (~3KB) alternative to heavier animation libraries
5. **No layout thrashing**: Animations avoid properties that trigger reflow

## Examples

### Animated Hero Section
```astro
<section class="section-fade-in">
  <h1 class="heading-reveal">
    Welcome to <span class="gradient-text heading-underline">Hydron</span>
  </h1>
  <p class="heading-reveal anim-delay-1">
    Your subtitle here
  </p>
</section>
```

### Animated Card Grid
```astro
<div class="grid icon-list">
  <div class="glass card-lift icon-list-item">Card 1</div>
  <div class="glass card-lift icon-list-item">Card 2</div>
  <div class="glass card-lift icon-list-item">Card 3</div>
</div>
```

### Pricing Tiers with Popular Badge
```astro
<div class="pricing-card">
  <div class="badge-pulse-once">Most Popular</div>
  <!-- Pricing content -->
</div>
```

## Maintenance

When adding new animations:
1. Use existing CSS custom properties for timing/easing
2. Follow the established naming convention (`.component-action`)
3. Include `prefers-reduced-motion` support
4. Test on mobile devices for performance
5. Document the new animation in this file
