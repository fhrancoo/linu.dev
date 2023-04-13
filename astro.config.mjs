import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	site: 'https://linu.dev/',
	integrations: [tailwind(), mdx()],
	markdown: {
		shikiConfig: {
			theme: 'dracula',
			// Agrega lenguajes de programación personalizados
			// Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: [],
			wrap: true,
		},
	},
})
