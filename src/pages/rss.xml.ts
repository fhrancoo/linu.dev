import rss from '@astrojs/rss'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
import type { APIRoute } from 'astro'
import { CollectionEntry, getCollection } from 'astro:content'

const parser = new MarkdownIt()

function sortPosts(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) {
	return Number(b.data.publishDate) - Number(a.data.publishDate)
}

function formatDate(date: Date) {
	date.setUTCHours(0)
	return date
}

export const get: APIRoute = async (context) => {
	const unsortedPosts = await getCollection('blog')
	const posts = unsortedPosts.sort((a, b) => sortPosts(a, b))

	return rss({
		// The RSS Feed title, description, and custom metadata.
		title: 'LinuDev',
		// See "Styling" section below
		description: 'Diseñando la web del futuro hoy',
		// stylesheet: '/stylesheet.xsl',
		site: context.site!.href,
		// The list of items for your RSS feed, sorted.
		items: posts.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			link: `/blog/${item.slug}/`,
			content: sanitizeHtml(parser.render(item.body)),
			pubDate: formatDate(item.data.publishDate),
		})),
	})
}
