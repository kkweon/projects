# Kyung Mo Kweon - Portfolio

A modern, responsive portfolio website showcasing Machine Learning, Self-Driving Car, Web Development, Mobile, and Utility projects.

## 🚀 Built With

- **[Astro](https://astro.build)** - Modern static site framework
- **TypeScript** - Type-safe development
- **CSS3** - Modern styling with custom properties and animations

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── CategoryFilter.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro   # Main portfolio page
│   ├── data/
│   │   └── projects.ts   # All project data
│   ├── types/
│   │   └── project.ts    # TypeScript type definitions
│   └── styles/
│       ├── global.css    # Design system and utilities
│       └── animations.css # Animation utilities
├── public/
│   └── images/           # Static assets
└── astro.config.mjs      # Astro configuration
```

## 🎨 Features

- **Modern Design** - Clean, professional aesthetic with smooth animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **Fast Performance** - Optimized static site with minimal JavaScript
- **Category Filtering** - Filter projects by category (ML, Self-Driving, Web, Mobile, Utils)
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - WCAG AA compliant with keyboard navigation support

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321`

## 📝 Adding New Projects

To add a new project, edit `src/data/projects.ts`:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  category: 'Web', // or 'Machine Learning', 'Self Driving Car', 'Android/iOS', 'Utils'
  overview: [
    'Description point 1',
    'Description point 2',
  ],
  image: {
    url: 'https://example.com/image.jpg',
    alt: 'Project screenshot',
    isLocal: false,
  },
  links: [
    {
      type: 'github',
      url: 'https://github.com/username/repo',
      label: 'GitHub',
    },
  ],
  featured: false, // Set to true for featured projects
  tags: ['React', 'TypeScript', 'Node.js'],
}
```

## 🚢 Deployment

The site is configured to deploy to GitHub Pages. Push to the main branch to trigger automatic deployment via GitHub Actions.

## 📄 License

This portfolio is personal property. All rights reserved.

## 👤 Author

**Kyung Mo Kweon**

- GitHub: [@kkweon](https://github.com/kkweon)
