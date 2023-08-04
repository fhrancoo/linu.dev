import satori from 'satori'
import { html } from 'satori-html'
import { Resvg } from '@resvg/resvg-js'
import InterRegular from '@fontsource/inter/files/inter-latin-400-normal.woff'
import InterBold from '@fontsource/inter/files/inter-latin-700-normal.woff'
import { getCollection } from 'astro:content'
import { APIContext } from 'astro'

const dimensions = {
	width: 1200,
	height: 630,
}

export async function get(context: APIContext) {
	const { title, publishDate } = context.props
	const date = publishDate.toLocaleDateString('es-AR', {
		dateStyle: 'full',
	})

	const markup = html`<div tw='bg-[#191724] flex flex-col w-full h-full'>
    <div tw='flex flex-col w-full h-4/5 p-10 justify-center'>
      <div tw='text-zinc-400 text-2xl mb-6'>${date}</div>
      <div
        tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent bg-red-400"
        style="background-clip: text; -webkit-background-clip: text; background: linear-gradient(83deg, #3245ff 0%, #b845ed 100%);"
      >
        ${title}
      </div>
    </div>
    <div
      tw="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl"
    >
      <div tw="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 516 516">
  <path stroke="#fff" stroke-linejoin="round" stroke-width="15" d="M384.936 66.77 317.03 90.868v55.108m67.906-79.206-67.854 23.84-.052-47.196m67.906 23.356L317.03 43.415M127.71 269.868l68.112-204.852 57.844-43.396 63.364 21.794M127.71 269.868 180 479.624m-52.29-209.756 189.32-123.892M127.71 269.868l90.248 155.471 26.832-140.971 72.24-138.392M180 479.624l174.905-.415-53.767-50.671M180 479.624l105-.271 16.138-50.815M180 479.624l121.138-51.086m0 0 61.507-191.642-45.615-90.92"/>
</svg>
        <span tw="ml-3 text-zinc-400">https://linu.dev/</span>
      </div>
      <div tw="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/10554636?v=4"
          tw="w-15 h-15 rounded-full"
        />
        <div tw="flex flex-col ml-4">
          <span tw="text-[#CFCBE6]">Braian A. Diez</span>
          <span tw="text-[#606887] font-semibold">@linuxmobile</span>
        </div>
      </div>
    </div>
  </div>`

	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Inter',
				data: Buffer.from(InterRegular),
				weight: 400,
			},
			{
				name: 'Inter',
				data: Buffer.from(InterBold),
				weight: 700,
			},
		],
		height: dimensions.height,
		width: dimensions.width,
	})

	const image = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: dimensions.width,
		},
	}).render()

	return {
		body: image.asPng(),
		encoding: 'binary',
	}
}

export async function getStaticPaths() {
	const posts = await getCollection('blog')
	const paths = posts.map((post) => {
		return {
			params: {
				slug: post.slug,
			},
			props: {
				title: post.data.title,
				publishDate: post.data.updatedDate || post.data.publishDate,
			},
		}
	})
	return paths
}
