import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://nhthieu.github.io',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkPlugins: [remarkReadingTime],
  },
  experimental: {},
  integrations: [tailwind(), preact()]
});