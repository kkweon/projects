# Plan: Convert Org Mode Portfolio to Modern Static Website

## Overview
Convert the existing org mode portfolio (index.org) into a modern, polished static website using Astro framework with TypeScript and Tailwind CSS.

## Tech Stack
- **Framework**: Astro (optimal for static content sites, ships minimal JS)
- **Styling**: Tailwind CSS (utility-first, modern designs)
- **Language**: TypeScript (type safety)
- **Deployment**: Configured for Netlify/Vercel
- **Components**: Astro components with optional React islands for interactivity

## Content Summary
The portfolio showcases 30 projects across 5 categories:
- Machine Learning (3 projects)
- Self Driving Car (6 projects)
- Web Development (10 projects)
- Android/iOS (1 project)
- Utilities (10 projects)

## Implementation Steps

### Phase 1: Project Setup & Initialization
**Goal**: Set up a modern Astro project with all necessary tooling

1. Initialize new Astro project with TypeScript template
   - Use `npm create astro@latest` with TypeScript option
   - Configure for static site generation

2. Install and configure dependencies
   - Tailwind CSS for styling
   - Additional UI libraries if needed (e.g., @astrojs/react for interactive components)

3. Set up project structure
   ```
   /src
     /components     (reusable UI components)
     /layouts        (page layouts)
     /pages          (routes)
     /data           (project data extracted from org file)
     /styles         (global styles)
     /assets         (images, icons)
   ```

4. Configure build settings
   - Set up astro.config.mjs for optimal builds
   - Configure Tailwind CSS
   - Set up TypeScript config

**Files to create/modify**:
- package.json
- astro.config.mjs
- tailwind.config.mjs
- tsconfig.json

---

### Phase 2: Content Migration & Data Structure
**Goal**: Extract all content from org mode into structured, type-safe data

1. Create TypeScript data schema for projects
   - Define Project interface with fields: id, title, category, overview, image, links, technologies
   - Create type definitions in `src/types/project.ts`

2. Extract all 30 projects from index.org into structured data
   - Convert to TypeScript data file: `src/data/projects.ts`
   - Preserve all information: titles, descriptions, images, links
   - Organize by categories

3. Handle images
   - Keep external images as URLs (GitHub, Imgur, etc.)
   - Copy local images from /assets to new project structure
   - Plan for lazy loading and optimization

4. Create author/personal info data
   - Extract name, contact info
   - Create `src/data/author.ts`

**Files to create**:
- src/types/project.ts (TypeScript interfaces)
- src/data/projects.ts (all project data)
- src/data/author.ts (personal information)

---

### Phase 3: Layout & Page Structure
**Goal**: Create the main page layout and routing structure

1. Create base HTML layout
   - `src/layouts/BaseLayout.astro` with proper HTML structure
   - Include meta tags for SEO
   - Add fonts (modern web fonts like Inter, Plus Jakarta Sans, or similar)
   - Set up viewport, favicon, etc.

2. Create main index page
   - `src/pages/index.astro` as the main portfolio page
   - Structure: Hero → About → Projects (categorized) → Footer

3. Optional: Individual project pages
   - Consider if we want `/projects/[slug].astro` for detailed views
   - For now, can use modal overlays or cards with all info

**Files to create**:
- src/layouts/BaseLayout.astro
- src/pages/index.astro

---

### Phase 4: Component Development
**Goal**: Build reusable, modern UI components with polished design

1. **Header/Navigation Component**
   - `src/components/Header.astro`
   - Logo/name on left
   - Navigation links (optional: About, Projects, Contact)
   - Sticky header with blur effect on scroll
   - Mobile responsive hamburger menu

2. **Hero Section Component**
   - `src/components/Hero.astro`
   - Large, bold name display
   - Optional: animated gradient background
   - Brief introduction or tagline
   - CTA button (e.g., "View Projects" smooth scroll)
   - Modern typography and spacing

3. **Project Filter Component**
   - `src/components/ProjectFilter.astro` or `.tsx` (if using React)
   - Category pills/buttons (All, ML, Self Driving, Web, Mobile, Utils)
   - Active state styling
   - Smooth transitions when filtering

4. **Project Card Component**
   - `src/components/ProjectCard.astro`
   - Card with image preview
   - Title and brief description
   - Category badge
   - Hover effects (lift, glow, or scale)
   - Tech stack tags
   - Links to GitHub/Demo
   - Lazy-loaded images

5. **Project Grid Component**
   - `src/components/ProjectGrid.astro`
   - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
   - Smooth animations on scroll (fade in, slide up)
   - Proper spacing and alignment

6. **Footer Component**
   - `src/components/Footer.astro`
   - Links to GitHub, LinkedIn, etc.
   - Copyright notice
   - Optional: contact information

**Design principles**:
- Modern color scheme (dark mode optional, but start with clean light theme with dark accents)
- Ample white space
- Smooth transitions and micro-interactions
- Accessibility (proper ARIA labels, keyboard navigation)
- Mobile-first responsive design

**Files to create**:
- src/components/Header.astro
- src/components/Hero.astro
- src/components/ProjectFilter.tsx (React for interactivity)
- src/components/ProjectCard.astro
- src/components/ProjectGrid.astro
- src/components/Footer.astro

---

### Phase 5: Styling & Polish
**Goal**: Apply modern, professional styling throughout

1. Configure Tailwind CSS
   - Custom color palette (primary, secondary, accent colors)
   - Custom fonts
   - Custom spacing/sizing if needed
   - Dark mode support (optional for v1)

2. Add global styles
   - `src/styles/global.css`
   - Smooth scrolling behavior
   - Custom scrollbar styling
   - Animation keyframes
   - Focus states for accessibility

3. Implement animations
   - Fade-in animations on scroll (using Intersection Observer)
   - Hover effects on cards and buttons
   - Smooth page transitions
   - Loading states if needed

4. Polish details
   - Consistent spacing and typography
   - Icon integration (lucide-react or heroicons)
   - Image aspect ratios and object-fit
   - Border radius consistency
   - Shadow consistency

**Files to create/modify**:
- tailwind.config.mjs (custom theme)
- src/styles/global.css

---

### Phase 6: Interactivity & Features
**Goal**: Add interactive features for better UX

1. Implement project filtering
   - Category filter buttons update displayed projects
   - Smooth transitions when filtering
   - URL state management (optional)

2. Add search functionality (optional for v1)
   - Search bar to filter projects by name/description
   - Real-time filtering

3. Implement smooth scrolling
   - Anchor links in navigation
   - Smooth scroll to sections

4. Add animation triggers
   - Scroll-triggered animations using Intersection Observer
   - Stagger animations for project cards

5. Optimize image loading
   - Lazy loading for images
   - Blur-up placeholders
   - WebP format support

**Files to modify**:
- src/components/ProjectFilter.tsx
- Various components for scroll animations

---

### Phase 7: SEO & Performance Optimization
**Goal**: Ensure excellent performance and discoverability

1. SEO meta tags
   - Title, description, keywords
   - Open Graph tags for social sharing
   - Twitter card tags
   - Canonical URLs

2. Performance optimization
   - Minimize bundle size
   - Optimize images (compression, modern formats)
   - Enable Astro's built-in optimizations
   - Add preload hints for critical resources

3. Accessibility audit
   - Check color contrast
   - Ensure keyboard navigation works
   - Add proper ARIA labels
   - Test with screen reader

4. Analytics setup (optional)
   - Google Analytics or similar
   - Privacy-friendly analytics

**Files to modify**:
- src/layouts/BaseLayout.astro (meta tags)
- astro.config.mjs (build optimizations)

---

### Phase 8: Build, Test & Deploy
**Goal**: Prepare for production deployment

1. Build the static site
   - Run `npm run build`
   - Verify output in `dist/` directory
   - Check for build errors or warnings

2. Test locally
   - Run `npm run preview`
   - Test on different devices/browsers
   - Verify all links work
   - Check responsive design
   - Test performance with Lighthouse

3. Set up deployment
   - Create deployment configuration for Netlify or Vercel
   - Add build command and publish directory
   - Configure environment variables if needed

4. Deploy
   - Push to git repository
   - Deploy to hosting platform
   - Verify production site

5. Clean up
   - Update README.md with new project information
   - Document how to add new projects
   - Add development instructions

**Files to create**:
- netlify.toml or vercel.json (deployment config)
- README.md (updated documentation)

---

## Success Criteria

1. ✅ Modern, responsive design that looks professional on all devices
2. ✅ All 30 projects successfully migrated with images and links
3. ✅ Fast page load times (Lighthouse score > 90)
4. ✅ Smooth animations and interactions
5. ✅ Easy to filter and browse projects
6. ✅ Successfully deployed to production
7. ✅ Accessible (WCAG 2.1 AA compliance)
8. ✅ SEO optimized

## Timeline Estimate
- Phases 1-2: Foundation and data migration
- Phases 3-4: Core UI development
- Phases 5-6: Styling and interactivity
- Phases 7-8: Optimization and deployment

## Notes
- Keep the existing index.org file for reference
- All external image URLs will be preserved (GitHub, Imgur, etc.)
- Local assets will be migrated to new project structure
- Git commits should be made at each phase completion
