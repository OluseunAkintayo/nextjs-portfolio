import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	item: {
		id: number,
		workplace: string,
		title: string,
		workLogo: string,
		skills: string[],
		period: string,
		jd: string[]
	}
}

const Card = (props: Props) => {

	const { item } = props;

	return (
		<article className='md:px-8 space-y-3 flex flex-col items-start flex-shrink-0 bg-gray-800 opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg p-6 w-4/5 cursor-pointer snap-center md:w-[500px]'>
			<motion.div
				initial={{ y: -100, opacity: 0.5 }}
				whileInView={{ y:0, opacity: 1 }}
				viewport={{ once: true }}
				className='w-24 h-24 bg-gray-700 p-3 flex items-center justify-center rounded-full'
			>
				<img src={item.workLogo} className="w-4/5 object-center" />
			</motion.div>
			<div className='space-y-1 text-gray-400 text-left'>
				<h3 className='font-semibold text-2xl text-gray-400'>{item.title}</h3>
				<p className='text-xl'>{item.workplace}</p>
				<div className="flex space-x-2 my-2 max-[500px]:hidden">
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
					<div className='bg-gray-500 h-12 w-12 rounded-full' />
				</div>
				<p className='text-sm font-[300] uppercase py-1'>{item.period}</p>
				<ul className='list-disc ml-4 space-y-2 text-lg'>
					{item.jd.map((listItem, i) => <li key={i+1} className="leading-5 text-sm">{listItem}</li>)}
				</ul>
			</div>
		</article>
	)
}

export default Card;