import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: z.object({
    cover: z.string(),
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional()
  })
})

export const collections = { blog }
