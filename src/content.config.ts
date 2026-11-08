import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const capitulos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/capitulos' }),
  schema: z.object({
    titulo: z.string(),
    orden: z.number(),
    actualizado: z.coerce.date(),
  }),
});

export const collections = { capitulos };
