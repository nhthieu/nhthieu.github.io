import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      // langs: ['javascript', 'typescript', 'css', 'html', 'json', 'bash', 'markdown', 'rust', 'toml', 'yaml'],
      // wrap: true,
    },
  },
  experimental: {
    assets: true
  },
  integrations: [tailwind(), preact()]
});