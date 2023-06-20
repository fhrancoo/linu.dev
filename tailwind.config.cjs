module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mona-sans': ['Mona Sans'],
				helvetica: ['Helvetica'],
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			backgroundImage: {
				'grad-pink-brown': 'linear-gradient(166deg, #F085A7 0%, #4F4243 100%)',
				'grad-red-gray': 'linear-gradient(116deg, #BB7D7D 0%, #2D4F56 100%)',
			},
			boxShadow: {
				xs:
					'0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)',
				sm:
					'0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);',
				md:
					'0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);',
				lg:
					'0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);',
			},
			flex: {
				'0': '0 0 auto',
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#0C0A09', // Tailwind Stone
					'primary-focus': '#18100C',
					'primary-content': '#CFCBE6',
					secondary: '#AAB2D1',
					accent: '#CFCBE6',
					neutral: '#272D3F',
					'base-100': '#21232D',
					info: '#D8B4FE',
					success: '#86EFAC',
					warning: '#FDE68A',
					error: '#FCA5A5',
					'base-content': '#CFCBE6',
				},
				light: {
					primary: '#CFCBE6',
					'primary-content': '#606887',
					secondary: '#353C51',
					accent: '#272D3F',
					neutral: '#CFCBE6',
					'base-100': '#E1DFF0',
					info: '#22d3ee',
					success: '#22c55e',
					warning: '#eab308',
					error: '#ef4444',
					'base-content': '#272D3F',
				},
			},
		],
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	variants: {
		scrollbar: ['rounded'],
	},
}
