# 🐝 Bee Coders - Developer Community Website

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://www.beecoders.club)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-purple)](https://web.dev/progressive-web-apps/)

![Bee Coders Website](./public/readme/website-bee.png)

A vibrant and collaborative community of developers around the world, working together to drive innovation and technical excellence in software development.

## 🚀 Features

### 🌐 **Multi-language Support**
- **4 Languages**: English, Português, Español, Français
- **Dynamic i18n**: Real-time language switching
- **SEO Optimized**: Language-specific meta tags and structured data

### 📱 **Progressive Web App (PWA)**
- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Works without internet connection
- **Fast Loading**: Optimized caching strategies
- **Push Notifications**: Stay updated with latest news

### 🖼️ **Image Optimization**
- **WebP Support**: Modern image formats with JPEG fallbacks
- **Responsive Images**: Multiple sizes for different devices
- **Lazy Loading**: Images load only when needed
- **73.7% Size Reduction**: Automated optimization pipeline

### ⚡ **Performance Optimized**
- **Lighthouse Score**: 90+ Performance, 100 SEO
- **Static Export**: Ultra-fast loading with CDN support
- **Core Web Vitals**: Optimized for Google's ranking factors
- **Bundle Optimization**: Tree-shaking and code splitting

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Internationalization**: Custom i18next implementation
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/)
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa)

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/beecodersteam/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### 🔧 Development Scripts

```bash
# Development
npm run dev                    # Start development server

# Building
npm run build                  # Build for production (includes image optimization)
npm run start                  # Start production server

# Image Optimization
npm run generate:icons         # Generate PWA icons from app/icon.png
npm run optimize:images        # Optimize all images (73.7% size reduction)
npm run optimize:responsive    # Create responsive image variants
npm run optimize:all          # Run all image optimizations

# Code Quality
npm run lint                  # Run ESLint
npm run lint:fix             # Fix ESLint issues
npm run clean:imports        # Remove unused imports
npm run clean:all           # Full cleanup (imports, deps, images)

# PWA & Performance
npm run pwa:audit           # Run Lighthouse audit
npm run pwa:check          # Build + serve + audit
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── css/               # Global styles
│   ├── globals.css        # Global CSS
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── utils/            # Utility components
├── lib/                  # Utilities and configurations
│   ├── i18n.tsx         # Internationalization
│   ├── seo-i18n.tsx     # SEO for i18n
│   └── image-config.ts   # Image optimization config
├── public/               # Static assets
│   ├── images/           # Original images
│   │   ├── optimized/    # Auto-generated optimized images
│   │   └── responsive/   # Auto-generated responsive variants
│   ├── icons/            # PWA icons (auto-generated)
│   ├── locales/          # Translation files
│   └── manifest.json     # PWA manifest
└── scripts/              # Build and optimization scripts
    ├── generate-icons.js    # PWA icon generation
    └── optimize-images.js   # Image optimization
```

## 🌍 Internationalization

The website supports 4 languages with dynamic switching:

- **English** (en) - Default
- **Português** (pt) - Portuguese  
- **Español** (es) - Spanish
- **Français** (fr) - French

### Translation Files
```
public/locales/
├── en/
├── pt/
├── es/
└── fr/
    ├── common.json      # Navigation, CTAs
    ├── portfolio.json   # Portfolio data
    └── sections.json    # Page content
```

## 📱 PWA Features

- **Installable**: Native app-like experience
- **Offline-first**: Cached content and offline page
- **Background Sync**: Form submissions work offline
- **App Shortcuts**: Quick access to Portfolio and Contact
- **Theme Color**: Matches brand identity (#6B1C8F)

## 🖼️ Image Optimization

### Automatic Optimization
- **73.7% size reduction** on average
- **WebP + JPEG fallbacks** for maximum compatibility
- **Responsive variants** for different screen sizes
- **Lazy loading** with intersection observer

### Supported Formats
- **WebP**: Modern, compressed format
- **JPEG**: Universal fallback
- **PNG**: For logos and transparency

### Image Sizes
- **380w**: Mobile small
- **768w**: Tablet
- **1024w**: Desktop small  
- **1920w**: Desktop large

## 🚀 Deployment

### Static Export
The project uses Next.js static export for maximum performance:

```bash
npm run build
```

Generated files are in the `out/` directory, ready for any static hosting.

### GitHub Pages
Configured for GitHub Pages deployment:

```bash
NEXT_PUBLIC_BASE_PATH=your-repo-name npm run build
```

### Vercel (Recommended)
One-click deployment to [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/beecoders/website)

## 📊 Performance Metrics

### Lighthouse Scores
- **Performance**: 90+ ⚡
- **Accessibility**: 95+ ♿
- **Best Practices**: 90+ ✅
- **SEO**: 100 🔍
- **PWA**: 100 📱

### Core Web Vitals
- **LCP**: < 2.5s (Large Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐝 About Bee Coders

Bee Coders is a global community of developers passionate about:
- **Innovation**: Cutting-edge technology solutions
- **Collaboration**: Working together across borders
- **Excellence**: High-quality code and best practices
- **Learning**: Continuous growth and knowledge sharing

### Connect With Us
- **Website**: [www.beecoders.club](https://www.beecoders.club)
- **GitHub**: [@beecodersteam](https://github.com/beecodersteam)
- **LinkedIn**: [Bee Coders](https://linkedin.com/company/beecoders)

---

**Made with 💛 by the Bee Coders community**
