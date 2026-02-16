import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kkweon.dev',
  base: '/projects',

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    css: {
      devSourcemap: true,
    },
  },

  integrations: [sitemap()],
});