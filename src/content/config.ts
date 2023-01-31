import { defineCollection, z } from 'astro:content';

const keymap = defineCollection({
  schema: z.object({
    title: z.string()
  }),
});

export const collections = { keymap };