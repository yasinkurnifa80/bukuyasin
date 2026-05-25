import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://bukuyasin.id/",

  // FIX: Adapter hanya aktif saat proses build (production)
  // Ini mencegah error "module is not defined" di terminal saat dev server berjalan
  adapter:
    process.env.NODE_ENV === "production"
      ? cloudflare({ mode: "directory" })
      : undefined,

  integrations: [sitemap({ i18n: true }), icon(), mdx(), partytown()],

  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => (tree, file) => {
        if (file.data && file.data.readingTime) {
          file.data.astro.frontmatter.minutesRead = Math.ceil(
            file.data.readingTime.minutes,
          );
        }
      },
    ],
  },

  i18n: {
    defaultLocale: "id",
    locales: ["id"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
