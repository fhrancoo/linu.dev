import { getCollection } from 'astro:content'
import type { APIRoute } from 'astro'
import generateOgImage from '@services/generateOgImage'

export const get: APIRoute = async ({ params }) => ({
	body: await generateOgImage(params.ogTitle),
})

const postImportResult = await getCollection('blog', ({ data }) => !data.draft)
const posts = Object.values(postImportResult)

export function getStaticPaths() {
	return posts
		.filter(({ data }) => !data.ogImage)
		.map(({ data }) => ({
			params: { ogTitle: data.title },
		}))
}
