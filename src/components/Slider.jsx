import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { getCollection } from 'astro:content'

const posts = (await getCollection('projects')).sort(
	(a, b) => b.data.created.valueOf() - a.data.created.valueOf(),
)

export default function Slider() {
	return (
		<Swiper>
			{posts.slice(0, 3).map((post) => (
				<SwiperSlide>
					<article class='h-[calc(100vh-5rem)] bg-fixed bg-auto bg-center w-full text-secondary-content'
            style={{ backgroundImage: `url(${post.data.image})` }}
          >
						<div class='backdrop-blur-sm backdrop-brightness-75 w-full h-full flex items-start justify-between flex-col'>
							<div class='w-full h-full flex flex-col items-center justify-center font-mona-sans'>
								<h3 class='text-7xl md:text-9xl font-black [font-stretch:ultra-expanded] drop-shadow-md'>
									{post.data.title}
								</h3>
								<div class='divider px-20'></div>
								<p class='text-xl max-w-3xl font-semibold [font-stretch:ultra-expanded] drop-shadow-md'>
									{post.data.description}
								</p>
							</div>
							<div class='flex justify-end w-full p-6'>
								<a
									href={post.data.url}
									class='btn btn-outline btn-info'
									target='_blank'
									rel='noopener noreferrer'>
									Visitar Proyecto
								</a>
							</div>
						</div>
					</article>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
