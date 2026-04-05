# AURUM & CO. — Luxury E-Commerce

A full-featured luxury e-commerce frontend for **AURUM & CO.**, a fictional Swiss luxury brand selling timepieces, fine jewelry, accessories, fragrances, and leather goods.

## Tech Stack

- **React 18 + TypeScript** via Vite
- **Tailwind CSS** — styling with dark mode support
- **Framer Motion** — page/component animations
- **Zustand + persist** — cart, auth, wishlist, and theme state
- **wouter** — client-side routing
- **Lucide React** — icons

## Demo Credentials

| Role       | Email              | Password  |
|------------|--------------------|-----------|
| Regular user | user@demo.com    | demo123   |
| Admin       | admin@demo.com    | admin123  |

## Pages (~22 pages)

### Shopping
- `/` — Hero landing page with categories, featured products, journal
- `/shop` / `/shop/:category` — Product listing with filters + sorting (23 products)
- `/product/:id` — Full product detail with color picker, gallery, reviews
- `/cart` — Cart page with full summary
- `/checkout` — 3-step checkout (shipping → payment → review)
- `/order-confirmation` — Post-purchase confirmation
- `/wishlist` — Saved items

### Auth & Account
- `/login` — Mock auth with one-click demo shortcuts
- `/register` — Registration (mock)
- `/account` — Profile, preferences, order history overview
- `/account/orders` — Full order history

### Admin (admin credentials required)
- `/admin` — Dashboard with KPIs, charts, recent orders
- `/admin/products` — Product management table with filters
- `/admin/orders` — Order management with status updates

### Informational
- `/about` — Brand story, heritage, atelier
- `/contact` — Contact form + boutique locations
- `/journal` — Editorial blog with articles
- `/journal/:slug` — Full article view
- `/faq` — Accordioned FAQ by topic
- `/shipping` — Shipping & returns policies
- `/warranty` — Warranty coverage details
- `/watch-care` — Watch care guide
- `/sustainability` — Environmental & social responsibility
- `/careers` — Open positions & benefits
- `/press` — Press coverage & awards

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root with wouter router + layout wrappers |
| `src/data/mockData.ts` | All products, blog posts, orders, users |
| `src/store/authStore.ts` | Mock auth with login/logout |
| `src/store/cartStore.ts` | Cart state (persisted) |
| `src/store/wishlistStore.ts` | Wishlist state |
| `src/store/themeStore.ts` | Dark mode toggle |
| `src/components/layout/Header.tsx` | Shared nav + search + cart icon |
| `src/components/layout/Footer.tsx` | Shared footer with links |
| `src/components/layout/CartDrawer.tsx` | Slide-out cart drawer |
| `src/components/ProductCard.tsx` | Reusable product card |

## Product Categories

5 categories with 4–6 products each:
- **Timepieces** — watches (6)
- **Fine Jewelry** — rings, bracelets, necklaces (5)
- **Accessories** — cufflinks, wallets, belts (4)
- **Fragrances** — perfumes (4)
- **Leather Goods** — bags, briefcases (4)

## Architecture Notes

- All data is mock/frontend-only — no real backend calls
- Cart and auth state persist across page reloads via Zustand persist + localStorage
- Admin routes show "Access Denied" unless logged in as admin
- Dark mode toggles via `document.documentElement.classList.toggle('dark')`
- Two layout wrappers: `AppLayout` (with Header/Footer) and `MinimalLayout` (for checkout/auth)
