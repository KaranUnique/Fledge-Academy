# 🎌 Advanced Japanese Animation System Documentation

## Overview
This comprehensive animation system provides premium, culturally-inspired motion effects for the Fledge Academy Japanese language learning website. All animations maintain the clean white background aesthetic while adding elegant, Japanese-inspired motion, textures, and micro-interactions.

## 🌸 Japanese Aesthetic Principles

This system follows traditional Japanese design principles:
- **Ma (間)**: Negative space and balance
- **Wabi-Sabi (侘寂)**: Beauty in imperfection and subtlety
- **Kanso (簡素)**: Simplicity and elimination of clutter
- **Shizen (自然)**: Natural and effortless movement

## Animation Components

### 1. **FadeUp** (`/src/animations/FadeUp.jsx`)
Fades elements in from below with scroll-triggered animation.

**Usage:**
```jsx
import FadeUp from "../animations/FadeUp";

<FadeUp delay={0.2}>
  <h1>Your Content</h1>
</FadeUp>
```

**Props:**
- `delay` (number): Animation delay in seconds (default: 0)
- `className` (string): Additional CSS classes

---

### 2. **Float** (`/src/animations/Float.jsx`)
Creates a gentle floating animation loop.

**Usage:**
```jsx
import Float from "../animations/Float";

<Float subtle={true}>
  <img src="/crane.png" alt="Crane" />
</Float>
```

**Props:**
- `subtle` (boolean): Use gentler motion (default: false)
- `className` (string): Additional CSS classes

---

### 3. **ShimmerText** (`/src/animations/ShimmerText.jsx`)
Adds a traveling shimmer effect across text.

**Usage:**
```jsx
import ShimmerText from "../animations/ShimmerText";

<span className="text-gradient">
  <ShimmerText>the right way</ShimmerText>
</span>
```

**Props:**
- `className` (string): Additional CSS classes

---

### 4. **BreathingKanji** (`/src/animations/BreathingKanji.jsx`)
Animates Japanese characters with subtle opacity and scale breathing.

**Usage:**
```jsx
import BreathingKanji from "../animations/BreathingKanji";

<BreathingKanji 
  kanji="日本語"
  className="text-[180px] text-gray-200"
/>
```

**Props:**
- `kanji` (string): Japanese character(s) to animate
- `className` (string): Styling classes
- `style` (object): Inline styles

---

### 5. **SakuraPetals** (`/src/animations/SakuraPetals.jsx`)
Global floating sakura petal effect using pure CSS for performance.

**Usage:**
```jsx
import SakuraPetals from "../animations/SakuraPetals";

function App() {
  return (
    <>
      <SakuraPetals />
      {/* Rest of your app */}
    </>
  );
}
```

No props needed. Petals automatically float across the entire viewport.

---

### 6. **VerticalJapaneseText** (`/src/animations/VerticalJapaneseText.jsx`)
Vertical Japanese text decoration with character-by-character reveal animation.

**Usage:**
```jsx
import VerticalJapaneseText from "../animations/VerticalJapaneseText";

<VerticalJapaneseText 
  text="日本語を学ぶ旅へようこそ" 
  position="left"  // or "right"
/>
```

**Props:**
- `text` (string): Japanese text to display vertically
- `position` (string): "left" or "right" side of screen
- `className` (string): Additional CSS classes

---

### 7. **BrushStrokeDivider** (`/src/animations/BrushStrokeDivider.jsx`)
Japanese brush stroke style divider with reveal animation.

**Usage:**
```jsx
import BrushStrokeDivider from "../animations/BrushStrokeDivider";

<BrushStrokeDivider className="my-8" />
```

**Props:**
- `className` (string): Additional CSS classes

---

### 8. **EnsoCircle** (`/src/animations/EnsoCircle.jsx`)
Animated Ensō (Zen circle) with ink drawing effect.

**Usage:**
```jsx
import EnsoCircle from "../animations/EnsoCircle";

<EnsoCircle size={150} delay={0.5} />
```

**Props:**
- `size` (number): Circle diameter in pixels (default: 120)
- `delay` (number): Animation delay in seconds (default: 0)
- `className` (string): Additional CSS classes

---

## Animation Variants Library

Located in `/src/animations/variants.js`, this file contains reusable Framer Motion animation configurations.

### Available Variants:

#### **fadeUp**
Fade in from below with ease-out timing.

#### **fadeUpDelay**
Fade up with built-in 0.3s delay.

#### **float**
Continuous vertical floating motion.

#### **subtleFloat**
Gentler floating for larger elements.

#### **breathe**
Opacity and scale pulsing effect.

#### **rotateSubtle**
Gentle 2-degree rotation back and forth.

#### **scaleBreath**
Scale-only breathing (1.0 → 1.03 → 1.0).

#### **bounceIn**
Spring-based entrance with bounce.

#### **staggerContainer**
Parent container for staggered children.

#### **staggerItem**
Child element for stagger animations.

#### **hoverLift**
Hover state with scale and shadow lift.

#### **breathingOpacity** ⭐ NEW
Kanji breathing effect with opacity (0.08 → 0.16 → 0.08).

#### **breathingScale** ⭐ NEW
Breathing effect with scale (1.0 → 1.06 → 1.0).

#### **rotateSway** ⭐ NEW
Gentle 3-degree rotation sway (-3° → +3° → -3°).

#### **parallaxFade** ⭐ NEW
Parallax fade-up effect for testimonials.

#### **brushReveal** ⭐ NEW
Brush stroke reveal animation for Japanese calligraphy.

#### **inkDraw** ⭐ NEW
SVG path drawing effect for Ensō circles.

#### **softTilt** ⭐ NEW
3D tilt effect on hover with perspective.

---

## 🎨 Japanese Aesthetic Enhancements

### Global Effects
- ✅ **Washi paper texture overlay** (4% opacity)
- ✅ **Wind lines animation** (風) drifting across screen
- ✅ **Sakura petals** floating globally
- ✅ **Seigaiha wave patterns** (青海波) in backgrounds
- ✅ **Breathing radial glows** with subtle pulsing

### CSS Utilities (`JapaneseStyles.css`)
- `.washi-texture` - Traditional paper texture
- `.seigaiha-pattern` - Wave pattern background
- `.wind-line` - Animated wind streaks
- `.ink-ripple` - Koi water ripple effect
- `.vertical-japanese` - Vertical text orientation
- `.handwritten-japanese` - Handwritten style font
- `.glow-purple-soft` - Soft purple radial glow
- `.glow-pink-soft` - Soft pink radial glow
- `.glow-red-soft` - Soft red radial glow
- `.breathing-glow` - Breathing animation
- `.origami-float` - Floating origami shapes
- `.calligraphy-reveal` - Brush stroke reveal

---

## Section-Specific Implementations

### **Hero Section** (Home.jsx)
- ✅ Vertical Japanese text: "日本語を学ぶ旅へようこそ"
- ✅ Large breathing Kanji "未来" (Future)
- ✅ Ensō circle decoration
- ✅ Floating origami crane with rotation + Y-axis motion
- ✅ Breathing radial pastel glow behind crane
- ✅ Calligraphy-reveal animation on title
- ✅ CTA button gradient shimmer

### **Why Learn Japanese** (WhyLearnJapanese.jsx)
- ✅ Staggered card reveals on scroll
- ✅ Faint pastel radial glows behind cards
- ✅ Rotating Kanji characters (2-degree oscillation)
- ✅ Hover lift effects with shadow

### **How It Works** (HowItWorksPage.jsx)
- ✅ Bouncing number badges (spring animation)
- ✅ Floating step circles
- ✅ Hover scale and shadow pop

### **Speak Japanese** (SpeakJapanesePage.jsx)
- ✅ Gradient shimmer on "the right way"
- ✅ Large breathing Kanji background (日本語)
- ✅ Staggered bullet point reveals

### **Student Success Stories** (StudentSuccessStories.jsx.jsx)
- ✅ Parallax fade-up testimonials
- ✅ Quote icon rotation on mount
- ✅ Breathing Kanji backgrounds (scale loop)

---

## Performance Optimization

### CSS-Based Animations
Sakura petals use pure CSS keyframes for 60fps performance without JavaScript overhead.

### Scroll Optimization
`react-intersection-observer` ensures animations only trigger when elements enter viewport, saving resources.

### Minimal Repaints
All background glows use `blur-3xl` and low opacity to minimize GPU load while preserving aesthetic.

### Motion Variants
Reusable variants prevent redundant animation definitions and improve bundle size.

---

## Design Principles

### ✨ White Background Preservation
All effects layer ON TOP of white background. No dark overlays or color blocks.

### 🎌 Japanese Minimalism
Animations are subtle, elegant, and inspired by traditional Japanese aesthetics.

### 🌸 Soft Pastel Glows
Radial gradients use 10-20% opacity to create ambient light without overwhelming white space.

### ⚡ Performance-First
60fps target with CSS-first approach and intelligent scroll triggers.

---

## Color Palette

### Pastel Glows
- Purple: `from-purple-200/15 via-purple-100/10`
- Pink: `from-pink-200/15 via-pink-100/10`
- Blue: `from-blue-200/15 via-blue-100/10`
- Indigo: `from-indigo-200/30 via-purple-100/20`

### Accent Gradients
- Primary: `from-blue-500 to-purple-500`
- Warm: `from-orange-100/20 via-pink-100/15`

---

## Troubleshooting

### Animations Not Triggering
Ensure `react-intersection-observer` is installed:
```bash
npm install react-intersection-observer
```

### Performance Issues
- Reduce number of sakura petals in `SakuraPetals.jsx`
- Increase `threshold` in `useInView` hooks
- Disable animations on mobile if needed

### Gradient Classes
Tailwind v4 uses `bg-linear-to-r` instead of `bg-gradient-to-r`.

---

## Future Enhancements

Potential additions:
- Parallax scrolling for background elements
- Scroll-based progress indicators
- Interactive hover states for Kanji
- Seasonal petal variations (autumn leaves, snow)

---

## Stack
- **React 19.2.0**
- **Framer Motion 12.23.24**
- **react-intersection-observer**
- **Tailwind CSS 4.1.17**

---

## File Structure
```
src/
├── animations/
│   ├── variants.js
│   ├── FadeUp.jsx
│   ├── Float.jsx
│   ├── ShimmerText.jsx
│   ├── BreathingKanji.jsx
│   ├── SakuraPetals.jsx
│   └── SakuraPetals.css
├── components/
│   ├── Home.jsx
│   ├── WhyLearnJapanese.jsx
│   ├── HowItWorksPage.jsx
│   ├── SpeakJapanesePage.jsx
│   └── StudentSuccessStories.jsx.jsx
└── App.jsx
```

---

**Created by:** GitHub Copilot  
**Date:** November 16, 2025  
**Status:** ✅ Production Ready
