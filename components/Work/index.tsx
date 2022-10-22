import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

type Props = {}

const Work = (props: Props) => {
	return (
		<section id="work" className='snap-center h-screen md:min-h-screen overflow-hidden'>
			<motion.div
				className="flex flex-col relative h-full text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center p-6"
				initial={{ opacity: 0, y: 400 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold'>Work History</h3>

			<div className="flex space-x-10 overflow-x-scroll snap-x snap-mandatory">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			</motion.div>

		</section>
	)
}

export default Work;