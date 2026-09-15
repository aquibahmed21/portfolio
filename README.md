# Portfolio

Personal portfolio website for Aquib Ahmed — a single-page React app showcasing about, projects, skills, and contact info.

🔗 **Live site:** [aquibahmed21.github.io/portfolio](https://aquibahmed21.github.io/portfolio)

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for bundling and dev server
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Web3Forms](https://web3forms.com/) for the contact form (no backend required)
- Deployed to [GitHub Pages](https://pages.github.com/) via `gh-pages`

## Features

- Animated canvas particle background in the hero section
- Typing animation for the hero tagline
- Sections for About, Projects, Skills, and Contact, with smooth anchor-link navigation and a scroll-progress indicator
- Downloadable resume (PDF)
- Fully responsive, mobile-friendly layout

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/aquibahmed21/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module reloading (default: http://localhost:5173).

### Linting

```bash
npm run lint
```

### Build

```bash
npm run build
```

Type-checks the project and produces an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

### Deployment

```bash
npm run deploy
```

Builds the project and publishes `dist/` to the `gh-pages` branch, which serves the live site on GitHub Pages.

## Project Structure

```
src/
├── assets/         # Downloadable files (e.g. resume PDF)
├── images/         # Static images/icons
├── components/     # Page sections and presentational components
├── App.tsx         # Composes the page sections
└── main.tsx        # App entry point
```

## Customizing Content

Each page section under `src/components/` (e.g. `Projects.tsx`, `Skills.tsx`, `Contact.tsx`) holds its own content as a plain data array at the top of the file — update those arrays to change projects, skills, or contact details.

## License

Personal project — all rights reserved.
