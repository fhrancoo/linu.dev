// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
    updatedDate: z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
    keywords: z.string().optional(),
    isDraft: z.boolean(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog }
