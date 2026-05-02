# Maisie's Portfolio — Sticker Book Vibe

A warm, notebook/sticker-book inspired single-page portfolio with a persistent header and switchable tabs. Built as a static React site so it deploys cleanly to GitHub Pages (`username.github.io`).

## Look & Feel

- **Palette**: warm cream background (`#FBF6EC`), soft paper texture, accent colors in mustard, sage, terracotta, and dusty pink (notebook/washi-tape feel).
- **Typography**: handwritten display font (e.g. Caveat / Patrick Hand) for headings, clean rounded sans (Nunito / Quicksand) for body.
- **Decor**: subtle paper-grain background, dashed underlines, washi-tape strips holding cards, slight rotation on cards (-2° / +1°) like things taped into a notebook.
- **Motion**: stickers fly in from off-screen on Home tab load, settle with a tiny bounce; cards lift slightly on hover; tab switch fades content.

## Layout

Persistent top section across all tabs:
- Big handwritten title: "Welcome to Maisie's Playground!"
- Subtitle: "Data Scientist with curiosity to always try new things!"
- Social icons row: LinkedIn, GitHub, Email, Resume (PDF placeholder)
- Tab nav bar underneath: **Home · About · Work · Interests** (active tab bolded + washi-tape underline)

Lower section swaps based on selected tab. No page reloads (uses React state + hash routing so GitHub Pages deep links work).

```
┌────────────────────────────────────┐
│  Welcome to Maisie's Playground!   │
│  Data Scientist · curious...       │
│  [in] [gh] [✉] [📄 resume]         │
│  ─Home─ About  Work  Interests     │
├────────────────────────────────────┤
│                                    │
│  (tab content swaps here)          │
│                                    │
└────────────────────────────────────┘
```

## Tab Content

**Home** — Sticker collage area (placeholder sticker slots that animate in; you'll drop your own PNGs into `src/assets/stickers/` later and they'll auto-show). Below: "Recent Projects" section with 3 cards, each tagged with a colored category pill:
1. *Vibe Coding* — Appointment Reservation System (Full-life Veterinary Hospital)
2. *Vibe Coding* — Dear Diary
3. *Data Science* — Healthcare gap clustering (UW Datathon)

**About** — Your bio paragraph styled like a notebook entry, followed by a vertical zig-zag travel timeline with 11 dots. Education dots (1, 4, 7, 9) use one color/icon (graduation cap), work dots use another (briefcase). Dot 11 shows "Waiting to come..." with a dashed outline. Resume button at the bottom.

**Work** — "Projects I've worked on" intro + a grid of placeholder project cards ("Coming soon — tape a project here ✨") you can fill in later.

**Interests** — Your intro about reading, travel, café hopping, photography. Placeholder for the future interactive café map, plus a photo grid placeholder for Sony ZVE-10 II shots ("Photos coming soon").

## Placeholders (for you to fill later)

- `src/assets/stickers/` — drop sticker PNGs here
- `public/resume.pdf` — drop your resume here
- Project cards on Work tab — edit a single `projects.ts` file
- Photo grid on Interests tab — edit a single `photos.ts` file

I'll add comments in those files showing exactly where to add things.

## Technical Notes

- Single-page React app, no backend needed.
- Hash-based routing (`#/about`) so GitHub Pages handles deep links without 404s.
- All design tokens go into `index.css` + `tailwind.config.ts` (warm palette, custom fonts via Google Fonts).
- Animations via Tailwind + a small amount of Framer Motion for sticker entrance.
- Vite `base` config set so the build works at `username.github.io/repo` *or* root `username.github.io` — I'll note both options in the README.
- README will include step-by-step GitHub Pages deploy instructions (`gh-pages` branch via GitHub Actions).

After this v1 you'll have a fully working preview to react to — we can then refine colors, swap fonts, add real stickers/photos, and polish animations.
