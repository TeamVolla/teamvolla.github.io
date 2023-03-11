import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.volla.io",
  integrations: [react(), tailwind()],
  experimental: {
    assets: true
   },
  image: {
    service: "astro/assets/services/sharp",
  },
});