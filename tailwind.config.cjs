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
      colors: {
         base: "#191724",
         surface: "#1f1d2e",
         overlay: "#26233a",
         muted: "#6e6a86",
         subtle: "#908caa",
         text: "#e0def4",
         love: "#eb6f92",
         gold: "#f6c177",
         rose: "#ebbcba",
         pine: "#31748f",
         foam: "#9ccfd8",
         iris: "#c4a7e7",
         "astro-blue": "#3245ff",
         "astro-purple": "#bc52ee",
         "astro-purple-dark": "#3f224d",
         "astro-pink": "#f041ff",
         "astro-orange": "#ff7d54",
         "astro-yellow": "#f8e42e",
      },
			backgroundImage: {
				'gradient-purple': 'linear-gradient(83deg, #3245ff 0%, #b845ed 100%)',
				'gradient-green': 'linear-gradient(247deg, #4af2c8 0%, #2f4cb3 100%)',
        'gradient-red': 'linear-gradient(66deg, #d83333 0%, #f041ff 100%)',
        'gradient-orange': 'linear-gradient(266deg, #f8e42e 0%, #ff7d54 100%)',
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
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
	],
	// variants: {
	// 	scrollbar: ['rounded'],
	// },
}
