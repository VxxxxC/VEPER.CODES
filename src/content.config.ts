import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/blog" }),
});

export const collections = { blogs };
