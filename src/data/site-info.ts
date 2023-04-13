export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "LinuDev",
	title: "LinuDev",
	description:
		"Diseñando la web del futuro hoy",
	image: {
		src: "/og/social.jpg",
		alt: "Diseñando la web del futuro hoy",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/linuxmobile/linu.dev",
			me: "https://github.com/linuxmobile/",
			text: "Go to Astro's GitHub repo",
			icon: "social/github",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/astrodotbuild",
			me: "https://twitter.com/astrodotbuild",
			text: "Follow Astro on Twitter",
			icon: "social/twitter",
		},
		{
			platform: "linkedin",
			href: "https://m.webtoo.ls/@astro",
			me: "https://m.webtoo.ls/@astro",
			text: "Follow Astro on Mastodon",
			footerOnly: true,
			icon: "social/mastodon",
		},
	],
}

export default siteInfo
