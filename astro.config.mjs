import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	markdown: {
		shikiConfig: {
		  theme: 'rose-pine',
		  // Agrega lenguajes de programación personalizados
		  // Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
		  // https://github.com/shikijs/shiki/blob/main/docs/languages.md
		  langs: [],
		  wrap: true,
		},
	  },
	
})
