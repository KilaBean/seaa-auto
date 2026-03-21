# SEAA Auto Service Center

Professional automotive care website built with Next.js 15 (App Router), TypeScript, and custom CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables (no Tailwind)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Main single-page app
│   └── globals.css       # CSS entry point (imports all style files)
├── styles/
│   ├── variables.css     # CSS custom properties (brand colours, theme)
│   ├── base.css          # Reset & base element styles
│   ├── components.css    # All component-specific styles
│   └── utilities.css     # Utility classes & animations
├── components/ui/        # Reusable shadcn-style components
└── lib/
    └── utils.ts          # cn() class merging utility
public/
└── images/               # Replace placeholder SVGs with real photos
    ├── hero-bg.png
    ├── washing-bay.png
    ├── alignment-balancing.png
    ├── vulcanizing.png
    ├── ac-service.png
    ├── auto-diagnosis.png
    ├── team.png
    └── gallery/
        └── before-after-detail.png
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Production build (test before deploying)
npm run build
npm run start
```

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. From the project root, run:
vercel

# 3. Follow the prompts:
#    - Link to your Vercel account
#    - Set project name (e.g. seaa-auto)
#    - Confirm root directory is ./
#    - Framework will be auto-detected as Next.js

# 4. Deploy to production:
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/seaa-auto.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://seaa-auto.vercel.app` (or your custom domain)

### Custom Domain

In the Vercel dashboard → Project → Settings → Domains → Add your domain (e.g. `seaaauto.com`). Vercel provides free SSL automatically.

---

## Before Going Live — Checklist

- [ ] **Replace placeholder images** in `/public/images/` with real photos
- [ ] **Update phone number** — search for `+233 XX XXX XXXX` and replace with the real number
- [ ] **Update email** — replace `info@seaaauto.com` with the real email
- [ ] **Update Google Maps embed** — replace the iframe `src` in `ContactSection` with the correct location embed URL
- [ ] **Update address text** — replace `"SEAA Auto Service Center, Ghana"` with the full street address
- [ ] **Set environment variables** — if you add a contact form backend or analytics, add keys in Vercel Dashboard → Settings → Environment Variables

---

## Replacing Images

Drop your real photos into `/public/images/` using the **exact same filenames**. Recommended sizes:

| File | Recommended size |
|------|-----------------|
| `hero-bg.png` | 1920×1080px |
| `washing-bay.png` | 800×500px |
| `alignment-balancing.png` | 800×500px |
| `vulcanizing.png` | 800×500px |
| `ac-service.png` | 800×500px |
| `auto-diagnosis.png` | 800×500px |
| `team.png` | 1200×675px |
| `gallery/before-after-detail.png` | 800×500px |

Use `.webp` format for best performance — just rename the files and update the `src` props in `page.tsx` accordingly.
