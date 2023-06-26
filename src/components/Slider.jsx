import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"

import { getCollection } from 'astro:content'

const posts = (await getCollection('projects')).sort(
	(a, b) => b.data.created.valueOf() - a.data.created.valueOf(),
)

export default function Slider() {
	return (
		<Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
			{posts.slice(0, 3).map((post, index) => (
				<SwiperSlide key={index}>
					<article className='h-[calc(100vh-8rem)] bg-fixed bg-auto bg-center w-full text-secondary-content'
            style={{ backgroundImage: `url(${post.data.image})` }}
          >
						<div className='backdrop-blur-sm backdrop-brightness-75 w-full h-full flex items-start justify-between flex-col'>
							<div className='w-full h-full flex flex-col items-center justify-center font-mona-sans'>
								<h3 className='text-7xl md:text-9xl font-black [font-stretch:ultra-expanded] drop-shadow-md'>
									{post.data.title}
								</h3>
								<div className='divider px-20'></div>
								<p className='text-xl max-w-3xl font-semibold [font-stretch:ultra-expanded] drop-shadow-md'>
									{post.data.description}
								</p>
							</div>
							<div className='flex justify-end w-full p-6'>
								<a
									href={post.data.url}
									className='btn btn-outline btn-info'
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
