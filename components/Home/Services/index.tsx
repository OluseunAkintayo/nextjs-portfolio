/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const Services = (props: Props) => {
	return (
		<section id="services" className='min-h-screen lg:snap-start'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center items-center max-w-7xl mx-auto pt-36 md:pt-6">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
				>
					services
				</motion.h3>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory px-6'>
					<div className='lg:w-[378px] snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all shadow-sm shadow-slate-700 border border-slate-600'>
						<motion.div
							className='bg-gray-600 w-1/3 p-8 rounded-full flex items-center justify-center aspect-[1]'
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
					<div className='lg:w-[378px] snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all shadow-sm shadow-slate-700 border border-slate-600'>
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
							<p className="text-sm text-gray-300 font-light">We develop and integrate APIs to enable your applications and websites interact with other data sources for enriched user experience.</p>
						</div>
					</div>
					<div className='lg:w-[378px] snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer hover:scale-[1.02] transition-all shadow-sm shadow-slate-700 border border-slate-600'>
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
							<p className="text-sm text-gray-300 font-light">Establish your online presence by driving traffic your site the right way</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Services;