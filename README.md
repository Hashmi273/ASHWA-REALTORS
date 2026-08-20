# ASHWA REALTORS — Property Advisory Website

A luxury, corporate, trust-inspiring 4-page responsive web application for **ASHWA REALTORS — Property Advisory**. Built with React, Vite, Tailwind CSS, Lucide icons, and Framer Motion.

---

## Brand Identity & Design System

- **Primary Navy**: `#0F1B2E` (Headlines, sticky navbar, footer, primary text)
- **Deep Navy (alt)**: `#152238` (Section backgrounds, dark cards)
- **Gold / Bronze**: `#B8935A` (Accents, CTAs, rule lines, "REALTORS" brand styling)
- **Muted Gold**: `#C9A868` (Hover states & highlights)
- **Slate Grey**: `#8B93A1` (Secondary text, building monogram silhouette accent)
- **Off-White**: `#FAF9F6` (Main page background)
- **Pure White**: `#FFFFFF` (Card panels)

---

## Site Architecture (4 Pages)

1. **Home (`/`)**: Hero section, About & Qualitative Trust Markers, Advisory Services, Why Choose Us, Process Horizontal Timeline, Client Testimonials, CTA Banner, and Global Footer.
2. **Contact Us (`/contact`)**: Headquarters details, direct phone/email/hours, static address map placeholder (`{/* TODO: Replace with real address + Google Maps embed */}`), and lead capture form with DLT/TRAI compliant opt-in consent and `consentGivenAt` timestamp logging.
3. **Terms & Conditions (`/terms`)**: 12 comprehensive legal sections with sticky Table of Contents navigation.
4. **Privacy Policy (`/privacy`)**: 12 detailed data governance and privacy sections with sticky Table of Contents.

---

## Exact Legal Footer Text (Every Page)

> © 2026 ASHWA REALTORS. All Rights Reserved.

Quick Links: `Home · Contact Us · Terms & Conditions · Privacy Policy`

---

## GitHub Pages Deployment Guide

Follow these steps to deploy this website to GitHub Pages:

### Step 1 — Initialize Git and Push to GitHub
```bash
cd C:\Users\Admin\.gemini\antigravity\scratch\ashwa-realtors
git init
git add .
git commit -m "Initial ASHWA Realtors website"
git branch -M main
git remote add origin https://github.com/<your-username>/ashwa-realtors.git
git push -u origin main
```

### Step 2 — Verify Vite Base Path
Ensure `vite.config.js` contains:
```js
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/ashwa-realtors/' : '/',
})
```

### Step 3 — Install Deployment Package
```bash
npm install gh-pages --save-dev
```

### Step 4 — Verify Deployment Scripts in package.json
`package.json` includes:
```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 5 — Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 6 — Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository → **Settings** → **Pages**
2. Under **Build and deployment** → Source: Select **Deploy from a branch**
3. Branch: Select `gh-pages` / `/ (root)`
4. Click **Save**.

Your live site will be accessible at:
`https://<your-username>.github.io/ashwa-realtors/`

---

## Future Re-deployments
Whenever you update content or add real listings, re-deploy instantly with:
```bash
npm run deploy
```
