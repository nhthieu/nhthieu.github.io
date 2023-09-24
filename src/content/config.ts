import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    publishDate: z.string().transform((str) => new Date(str)),
    description: z.string().optional(),
    author: z.string().default('Hieu Nguyen'),
    // category: z.string().nullable(),
    tags: z.array(z.string()).optional(),
    previousPost: reference('blog').optional(),
    nextPost: reference('blog').optional(),
    draft: z.boolean()
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
    description: z.string(),
    url: z.string().url(),
    status: z.enum(['in-progress', 'completed']),
    draft: z.boolean(),
  })
});

const infoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(100),
  })
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  info: infoCollection
}
