# Parag Bhosale — Portfolio

Personal portfolio of **Parag Bhosale**, Senior Software Engineer specializing in React.js, Next.js and AI-powered applications.

Built with plain HTML, CSS and JavaScript — no frameworks, no build step.

## Features

- **Interactive skill bubbles** — skills float, collide and react to the cursor. Drag and throw them, or filter by area (Frontend, Backend & realtime, AI, Tools).
- **Scroll-driven experience timeline** — a glowing line fills as you scroll and highlights each role and achievement as it's reached.
- **Typing role animation** in the hero section.
- **Animated stat counters**, fade-in reveals on scroll, and project cards with a cursor spotlight and tilt.
- **Floating glass navbar** with active-section highlighting and a scroll progress bar.
- **Responsive** down to mobile, with keyboard focus styles.
- **Respects reduced motion** — animations are turned off and skills show as a simple list.

## Project structure

```
├── index.html     # Page content and markup
├── style.css      # Theme, layout and animations
├── script.js      # Skill bubbles, timeline, reveals, counters
└── assets/
    ├── orbit.webp # Hero orbit graphic
    └── boy.webp   # Hero illustration
```

## Run locally

No install needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Customize

- **Skills:** edit the `SKILLS` array at the top of `script.js`. Each entry is `[label, group, size]`, where `group` is `fe`, `be`, `ai` or `tools` and `size` controls the bubble size.
- **Colors:** change the CSS variables in `:root` at the top of `style.css` (`--ac` orange, `--ac2` cyan, `--ac3` purple).
- **Content:** all text lives in `index.html`.

## Deploy

Works on any static host. For GitHub Pages: push to a repo, then go to **Settings → Pages** and deploy from the `main` branch root.

## Tech

HTML5 · CSS3 (custom properties, `color-mix`, backdrop blur) · Vanilla JavaScript (IntersectionObserver, requestAnimationFrame, Pointer Events) · Google Fonts (Bricolage Grotesque, Quicksand)

## Contact

- Email: paragbhosale06@gmail.com
- GitHub: [bhosaleparag](https://github.com/bhosaleparag)
