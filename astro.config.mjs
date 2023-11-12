import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  integrations: [tailwind()],
});
