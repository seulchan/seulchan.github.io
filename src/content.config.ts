import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/notes",
  }),

  schema: z.object({
    day: z.number().int().positive(),
    title: z.string(),
    date: z.coerce.date(),
    minutes: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
  }),
});

const thoughts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/thoughts",
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  notes,
  thoughts,
};
