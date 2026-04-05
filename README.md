# Portfolio — Full-Stack Developer

A modern, dark-themed developer portfolio built with **Angular 21** and **TailwindCSS v4**. Mobile-first responsive design with scroll-reveal animations and a polished glassmorphism aesthetic.

## Tech Stack

| Layer     | Technology                  |
| --------- | --------------------------- |
| Framework | Angular 21 (Standalone)     |
| Styling   | TailwindCSS v4, SCSS        |
| Fonts     | Inter, JetBrains Mono       |
| Animations| CSS keyframes, IntersectionObserver scroll-reveal |

## Sections

- **Hero** — Animated gradient background, status badge, tech stack row, CTA buttons
- **About** — Bio, quick stats, services card with glassmorphism hover glow
- **Projects** — Featured project cards with browser mockup, feature list, tech tags
- **Skills** — Categorized skill grid with proficiency indicators
- **Contact** — CTA heading, contact info cards, social links, contact form
- **Footer** — Minimal footer with nav links

## Getting Started

```bash
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

## Build

```bash
ng build
```

Output is in `dist/portfolio-app/`.

## Project Structure

```
src/app/
├── components/
│   ├── navbar/        # Fixed header with mobile hamburger menu
│   ├── hero/          # Full-screen hero with animated background
│   ├── about/         # About me + services card
│   ├── projects/      # Featured project showcase
│   ├── skills/        # Skills & technologies grid
│   ├── contact/       # Contact form + CTA
│   └── footer/        # Site footer
├── directives/
│   └── scroll-reveal/ # IntersectionObserver scroll animation directive
├── app.ts             # Root component
├── app.html           # Root template
└── app.config.ts      # App configuration
```
