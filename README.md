# Novavera — Brand Website (Deploy-ready sample)

This repository is a deploy-ready React + Vite + Tailwind starter for the Novavera brand website (market entry, distribution, private-label for cosmetics in Uzbekistan & CIS).

## What is included
- React + Vite single-page app (multi-page via React Router)
- Tailwind CSS config and base styles
- i18n (react-i18next) with EN / FA / RU / UZ resources
- Components: Header, Hero, Services, ContactForm, Footer
- Pages: Home, About, Products, MarketReports
- Sample serverless endpoints for Netlify (`netlify/functions/contact.js`) and Vercel (`api/contact.js`) as mocks
- Placeholder vector assets (logo.svg, hero, product images)
- README, .env.example and deployment instructions

## How to run locally (development)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 (or URL shown by Vite).

## Build & deploy
### Vercel
- Create a Vercel project and connect this repo.
- Set build command: `npm run build`, publish directory: `dist`
- Add environment variables in Project Settings (MAILCHIMP_API_KEY, etc.) for production services.
- API routes (serverless) are in `/api/*` for Vercel functions (already included).

### Netlify
- Create a Netlify site and connect the repo.
- Build command: `npm run build`, publish directory: `dist`
- Netlify Functions are under `/netlify/functions/*.js` (mock handlers included).

## Notes & next steps (recommended)
1. Replace placeholder images (`/src/assets/*`) with final photography and product images (licensed stock or in-house).
2. Replace `src/assets/logo.svg` with the finalized brand vector. Provide light/dark variants and favicon.
3. Implement form forwarding: connect `/api/contact` to a CRM (HubSpot/Pipedrive) or email provider (SendGrid/Mailgun).
4. Add analytics (GA4), tracking pixels, and improve SEO meta per page (React Helmet / SSR recommended for best SEO).
5. Implement RTL properly for Persian: add `dir="rtl"` when language is FA and adjust CSS if needed.
6. Securely set environment variables (do not commit API keys).

Prepared for: Saleh Nouri / Novavera
