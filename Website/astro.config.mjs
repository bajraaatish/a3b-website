// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The production URL. Update this to the real domain before launch.
// Used for sitemap, canonical URLs, OG tags, and structured data.
const SITE = "https://a3b.video";

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/privacy") &&
        !page.includes("/terms"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  // Keep the calm, single-fade aesthetic — no view-transition flicker.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
