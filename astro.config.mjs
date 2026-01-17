import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://0riceisnice0-hash.github.io',
  base: '/marketing',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
