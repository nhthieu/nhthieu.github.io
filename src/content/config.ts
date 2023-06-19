import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    publishDate: z.string().transform((str) => new Date(str)),
    description: z.string(),
    readingTime: z.number().int(),
    author: z.string().default('Hieu Nguyen'),
    category: z.string().nullable(),
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    // date: z.string().transform((str) => new Date(str)),
    description: z.string(),
    url: z.string().url(),
    status: z.enum(['in-progress', 'completed']),
  })
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection
}
