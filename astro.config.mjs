// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sentinel-inc.org",
  base: '/',
  image: {
    service: passthroughImageService()
  },

  integrations: [
    starlight({
      title: "Sentinel Inc.",
      favicon: "./src/assets/favicon.png",
      customCss: [
        "./src/styles/global.css",
        '@fontsource/share-tech/400.css',
        '@fontsource/share-tech-mono/400.css',
      ],
      logo: {
        dark: "./src/assets/sentinel-logo-text.png",
        light: "./src/assets/sentinel-logo-text-invert.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/Rm6AvU5J6t",
        },
        {
          icon: "youtube",
          label: "Youtube",
          href: "https://www.youtube.com/@SentinelInc",
        },
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/sentinelincorporated/",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Joining Sentinel", slug: "guides/joining-sentinel" },
            { label: "Basic Training", slug: "guides/basic-training" },
            { label: "Banking Operations", slug: "guides/banking-operations" },
            { label: "Events", slug: "guides/events" },
            { label: "Specialties", slug: "guides/specialties" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
