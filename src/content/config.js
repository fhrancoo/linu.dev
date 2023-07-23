// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
// 2. Define your collection(s)
const blog = defineCollection({
	schema: z.object({
		title: z.string().max(60).min(10),
    description: z.string().max(160).min(110).optional(),
		image: z.string().optional(),
		tags: z.string(),
		publishDate: z.string().or(z.date()).transform((val) => new Date(val)),
		updatedDate: z.string().optional().transform((
			str,
		) => (str ? new Date(str) : undefined)),
		isDraft: z.boolean().optional(),
	}),
})
const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
    url: z.string(),
		techs: z.array(z.string()),
		image: z.string().optional(),
		created: z.string().or(z.date()).transform((val) => new Date(val)),
	}),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog, projects }
