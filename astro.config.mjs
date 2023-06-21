import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  experimental: {
    assets: true
  },
  integrations: [tailwind(), preact(), markdoc()]
});