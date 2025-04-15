import { defineConfig } from "astro/config";
import rehypeMermaid from "rehype-mermaid";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  site: "https://veper.codes",
  integrations: [sitemap(), react(), tailwind()],
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid", "math"],
    },
    rehypePlugins: [rehypeMermaid],
  },
});
