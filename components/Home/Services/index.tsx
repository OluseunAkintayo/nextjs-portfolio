import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const Services = (props: Props) => {
	return (
		<section id="services" className='min-h-screen md:snap-start'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center items-center max-w-7xl mx-auto pt-36 md:pt-6">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
				>
					services
				</motion.h3>
				<div className='w-full flex max-[768px]:flex-wrap max-[768px]:items-center max-[768px]:justify-center gap-6 overflow-x-auto snap-x snap-mandatory px-6'>
					<div className='w-[378px] max-[625px]:w-full snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all'>
						<motion.div
							className='bg-gray-600 w-1/2 p-8 rounded-full flex items-center justify-center aspect-[1]'
							initial={{ scale: 0.7 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 1 }}
						>
							<img src={"/icons/code-icon.png"} alt="" className='w-full' />
						</motion.div>
						<div className='text-center space-y-3'>
							<h3 className='font-semibold text-2xl text-gray-400 tracking-widest'>Website and Web App Development</h3>
							<p className="text-sm text-gray-300 font-light">We build and maintain performant websites and applications to meet your day-to-day business needs.</p>
						</div>
					</div>
					<div className='w-[378px] max-[625px]:w-full snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all'>
						<motion.div
							className='bg-gray-600 w-1/2 rounded-full flex items-center justify-center aspect-[1] p-8'
							initial={{ scale: 0.7 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 1 }}
						>
							<img src={"/icons/api.png"} alt="" className='w-full' />
						</motion.div>
						<div className='text-center space-y-3'>
							<h3 className='font-semibold text-2xl text-gray-400 tracking-widest'>API Integration and Development</h3>
							<p className="text-sm text-gray-300 font-light">We integrate and develop APIs to enable your applications and websites interact with other data sources in order to make your business thrive.</p>
						</div>
					</div>
					<div className='w-[378px] max-[625px]:w-full snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all'>
						<motion.div
							className='bg-gray-600 w-1/2 rounded-full flex items-center justify-center aspect-[1] p-8'
							initial={{ scale: 0.7 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 1 }}
						>
							<img src={"/icons/seo.png"} alt="" className='w-full' />
						</motion.div>
						<div className='text-center space-y-3'>
							<h3 className='font-semibold text-2xl text-gray-400 tracking-widest'>Search Engine Optimization</h3>
							<p className="text-sm text-gray-300 font-light">Our mission is to put you on top by driving traffic to your site the right way</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Services;