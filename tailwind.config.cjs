module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mona-sans': ['Mona Sans'],
				'hubot-sans': ['Hubot Sans'],
				porlane: ['Porlane'],
				'antique-olive': ['Antique Olive']
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#5F6786',
					secondary: '#9799B6',
					accent: '#CFCBE6',
					neutral: '#272D3F',
					'base-100': '#21232D',
					info: '#D8B4FE',
					success: '#86EFAC',
					warning: '#FDE68A',
					error: '#FCA5A5'
				},
				light: {
					primary: '#353C51',
					secondary: '#434A63',
					accent: '#9799B6',
					neutral: '#272D3F',
					'base-100': '#E1DFF0',
					info: '#93c5fd',
					success: '#4ade80',
					warning: '#fcd34d',
					error: '#fb7185'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
