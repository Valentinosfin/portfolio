# Valentinos Stylianou — Portfolio

Premium single-page portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

## Prerequisites

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, Open Graph, `sitemap.xml`, and `robots.txt`. Use `http://localhost:3000` locally; set to your production URL on Vercel. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree JSON endpoint (`https://formspree.io/f/...`). Without it, the contact form explains how to configure it; email fallback still works. |

### Formspree setup

1. Create an account at [formspree.io](https://formspree.io).
2. Create a new form and copy its endpoint URL (`/f/xxxxxxxx`).
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` (and in Vercel project settings for production).

The contact form submits JSON with `name`, `email`, and `message`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## Deploy (Vercel)

1. Push the repo to GitHub/GitLab/Bitbucket **or** use the Vercel CLI (`vercel`).
2. Import the project in the Vercel dashboard.
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
4. Deploy.

## Project structure

- `app/` — App Router routes, layout, global styles, SEO (`robots.ts`, `sitemap.ts`, `opengraph-image.tsx`).
- `components/` — UI sections and primitives.
- `lib/` — Content (`projects.ts`, `services.ts`) and `cn()` helper.
- `public/projects/` — Placeholder artwork for project cards.

## Customization

- **Copy & projects:** Edit `lib/projects.ts` and `lib/services.ts`.
- **Social links:** Update placeholders in `components/Footer.tsx`.
- **Analytics:** Add your provider in `app/layout.tsx` or a dedicated client component.

## License

Private — All rights reserved.
