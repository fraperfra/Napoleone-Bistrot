# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Napoleone Bistrot is a bilingual (Italian/English) restaurant website for a historic bistro/wine bar in San Martino Buon Albergo, near Verona, Italy. Built as a React SPA with TypeScript and Vite.

## Commands

```bash
npm run dev      # Start dev server on 0.0.0.0:3000
npm run build    # Production build to /dist
npm run preview  # Preview production build
npm run backup   # Create timestamped backup in /backups
```

No test suite or linting scripts are configured.

## Tech Stack

- React 19 + TypeScript 5.8
- Vite 6.2 (bundler/dev server)
- Tailwind CSS 3.4 with custom theme
- Lucide React (icons)
- Fonts: Cormorant Garamond (headings) + Montserrat (body)

## Architecture

**Routing**: No React Router. Manual string-based page state in `App.tsx`. The `activePage` state determines which page component renders.

**Adding a new page**:
1. Create component in `/pages`
2. Add case to `renderPage()` switch in `App.tsx`
3. Add nav item to `navItems` array in `components/Layout.tsx`

**Key files**:
- `App.tsx` - Router logic, global state (activePage, lang)
- `components/Layout.tsx` - Navigation, footer, mobile menu wrapper
- `data.ts` - All menu items (100+) and events data
- `translations.ts` - All UI strings for Italian/English
- `types.ts` - TypeScript interfaces (MenuItem, Event, Category)

**State management**: App-level state lifted to `App.tsx` for navigation and language. Component-level state for modals, filters, form inputs.

**Internationalization**: Simple object-based system. Every UI string must exist in `translations.ts` for both `it` and `en` keys.

## Styling

Custom Tailwind colors defined in `tailwind.config.js`:
- `sage` (#6B8E6F) - Primary green
- `cream` (#F5F1E8) - Background
- `gold` (#C9A961) - Accents
- `darkGreen` (#2C3E2F) - Text/dark elements

Custom animations and `.napoleon-pattern` background in `index.css`.

## Data Updates

Menu items and events are static in `data.ts`. No backend or API integration. Images are external URLs (Unsplash, Picsum).
