# CryptoScanner Landing Page

A modern landing page for the [CryptoScanner GUI](https://github.com/BOB14th-project/CryptoScanner_GUI) project - a post-quantum cryptography transition detection tool.

## Features

- 🎨 Modern dark theme with cyan/teal and purple accents
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for Vercel deployment
- 🖼️ Screenshot gallery
- 📊 Feature highlights
- 🌐 Cross-platform support information

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This creates an optimized production build in the `out` directory.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/Landing-Page)

## Project Structure

```
├── public/
│   └── images/          # Screenshot images
├── src/
│   └── app/
│       ├── layout.tsx   # Root layout
│       ├── page.tsx     # Main landing page
│       └── globals.css  # Global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Customization

### Colors

Edit the color scheme in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    DEFAULT: '#00D9FF',  // Cyan
    // ...
  },
  secondary: {
    DEFAULT: '#9C27B0',  // Purple
    // ...
  }
}
```

### Content

Edit the content in [src/app/page.tsx](src/app/page.tsx).

## License

This project is open source and available under the MIT License.

## About CryptoScanner

CryptoScanner is a detection and analysis tool designed to identify cryptographic algorithms that require transition to post-quantum cryptography (PQC) standards. Visit the [main repository](https://github.com/BOB14th-project/CryptoScanner_GUI) for more information.