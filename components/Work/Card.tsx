import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Card = (props: Props) => {
	return (
		<article className='md:px-8 space-y-3 flex flex-col items-start flex-shrink-0 bg-gray-800 opacity-60 hover:opacity-100 transition-opacity rounded-lg p-6 w-[500px] max-[500px]:w-auto cursor-pointer snap-center'>
			<motion.div
				initial={{ y: -100, opacity: 0.5 }}
				whileInView={{ y:0, opacity: 1 }}
				viewport={{ once: true }}
				className='w-24 h-24 bg-gray-700 p-3 flex items-center justify-center rounded-full'
			>
				<img src="/img/uba-logo.png" className="w-4/5 object-center" />
			</motion.div>
			<div className='space-y-1 text-gray-400 text-left'>
				<h3 className='font-light text-2xl text-gray-500'>Front-end Developer</h3>
				<p className=''>UBA PLC.</p>
				<div className="flex space-x-2 my-2">
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
				</div>
				<p className='text-base font-[300] uppercase py-1'>June 2022 till date</p>
				<ul className='list-disc ml-4 space-y-2 text-lg'>
					<li>test itemitemitemitem...</li>
					<li>test item...</li>
					<li>test item...</li>
					<li>test item...</li>
					<li>test item...</li>
				</ul>
			</div>
		</article>
	)
}

export default Card;