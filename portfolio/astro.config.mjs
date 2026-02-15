import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kkweon.github.io',
  base: '/portfolio',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
