# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Astro 4.0, showcasing projects across Machine Learning, Self-Driving Car, Web Development, Mobile, and Utilities categories. The site is a static site deployed to GitHub Pages at https://kkweon.github.io/portfolio.

## Development Commands

```bash
# Start development server (runs at http://localhost:4321)
npm run dev

# Build for production (includes type checking)
npm run build

# Preview production build
npm run preview

# Type checking only
npx astro check
```

## Architecture

### Data-Driven Structure

All project data lives in a single source of truth: `src/data/projects.ts`. This file exports a `projects` array that populates the entire site. To add/modify projects, edit this file following the `Project` type defined in `src/types/project.ts`.

### Component Hierarchy

```
BaseLayout (global styles, SEO meta tags)
└── index.astro (main page)
    ├── Header
    ├── Hero
    ├── CategoryFilter (client-side filtering)
    ├── ProjectGrid
    │   └── ProjectCard (individual project)
    └── Footer
```

### Key Files

- `src/data/projects.ts` - All project content and metadata
- `src/types/project.ts` - TypeScript type definitions for projects
- `src/styles/global.css` - Design system with CSS custom properties
- `src/styles/animations.css` - Scroll reveal animations using Intersection Observer
- `astro.config.mjs` - Astro configuration (site URL, base path for GitHub Pages)

## GitHub Pages Deployment

The site auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main` or `master`. The workflow:
1. Installs dependencies using `npm ci`
2. Runs type checking (`astro check`)
3. Builds the site with correct base path
4. Deploys to GitHub Pages

**Important**: The site is configured with `base: '/portfolio'` in `astro.config.mjs` for GitHub Pages hosting. Images with `isLocal: true` should be placed in the `public/images/` directory.

## TypeScript Configuration

Uses Astro's strict TypeScript config. All Astro components can use TypeScript in their frontmatter (between `---` markers). Type checking runs during build and can be run separately with `npx astro check`.
