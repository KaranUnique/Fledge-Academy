# Responsive Testing Guide

## Quick Test Instructions

### Using Browser DevTools

#### Chrome/Edge DevTools
1. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. Click the device toolbar icon (or press `Ctrl+Shift+M`)
3. Test these preset devices:
   - **Mobile**: iPhone SE (375px), iPhone 12 Pro (390px), Pixel 5 (393px)
   - **Tablet**: iPad (768px), iPad Pro (1024px)
   - **Desktop**: Responsive mode at 1920px

#### Firefox DevTools
1. Press `F12` or `Ctrl+Shift+I`
2. Click the Responsive Design Mode icon (or press `Ctrl+Shift+M`)
3. Test various screen sizes

### Manual Testing Checklist

#### Mobile (< 640px)
- [ ] Navbar shows hamburger menu
- [ ] Hamburger menu opens/closes smoothly
- [ ] Hero text is readable and properly sized
- [ ] Hero image scales appropriately
- [ ] CTA buttons are full-width and touch-friendly
- [ ] "Why Learn Japanese" cards stack vertically
- [ ] Roadmap steps display vertically
- [ ] Testimonial cards stack in single column
- [ ] No horizontal scrolling
- [ ] All text is legible
- [ ] Images don't overflow
- [ ] Background decorations are hidden/simplified

#### Tablet (640px - 1024px)
- [ ] Navbar shows full menu
- [ ] Hero section uses 2-column layout
- [ ] "Why Learn Japanese" shows 2 columns
- [ ] Roadmap maintains visual hierarchy
- [ ] Testimonials show 2 columns
- [ ] Images scale proportionally
- [ ] Spacing feels balanced

#### Desktop (> 1024px)
- [ ] Full navigation visible
- [ ] Hero section side-by-side layout
- [ ] "Why Learn Japanese" shows 3 columns
- [ ] Roadmap alternates left/right
- [ ] Testimonials show 3 columns
- [ ] All decorative elements visible
- [ ] Animations perform smoothly
- [ ] Background effects visible

### Orientation Testing
- [ ] Portrait mode works on mobile
- [ ] Landscape mode works on mobile
- [ ] Tablet portrait mode
- [ ] Tablet landscape mode

### Performance Checks
- [ ] Page loads quickly on mobile
- [ ] Animations don't cause lag
- [ ] Images load progressively
- [ ] No layout shift during load
- [ ] Smooth scrolling

### Interaction Testing
- [ ] All buttons are clickable
- [ ] Touch targets are at least 44x44px
- [ ] Hover effects work on desktop
- [ ] Touch effects work on mobile
- [ ] Forms are usable (if any)
- [ ] Links are easily tappable

### Browser Testing
Test on multiple browsers:
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Edge (desktop)
- [ ] Samsung Internet (Android)

### Accessibility Testing
- [ ] Text is readable at all sizes
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Reduced motion respected

## Common Issues to Watch For

### Mobile Issues
- Text too small to read
- Buttons too small to tap
- Horizontal scrolling
- Images overflowing
- Overlapping elements
- Slow animations

### Tablet Issues
- Awkward spacing
- Text wrapping oddly
- Images not scaling
- Layout breaking between breakpoints

### Desktop Issues
- Content too wide
- Excessive white space
- Animations too fast
- Text too large

## Testing Tools

### Online Tools
- **Responsive Design Checker**: responsivedesignchecker.com
- **BrowserStack**: browserstack.com (real device testing)
- **LambdaTest**: lambdatest.com (cross-browser testing)

### Browser Extensions
- **Responsive Viewer** (Chrome)
- **Viewport Resizer** (Firefox)
- **Window Resizer** (Chrome/Firefox)

## Quick Fix Commands

If you need to rebuild:
```bash
cd fledge-academy
npm run build
```

To test locally:
```bash
npm run dev
```

To preview production build:
```bash
npm run preview
```

## Reporting Issues

When reporting responsive issues, include:
1. Device/screen size
2. Browser and version
3. Screenshot or video
4. Steps to reproduce
5. Expected vs actual behavior
