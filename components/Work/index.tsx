import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

type Props = {}

const Work = (props: Props) => {
	return (
		<section id="work" className='snap-center h-screen md:min-h-screen'>
			<div
				className="flex flex-col relative h-full text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center p-6 pt-36 md:pt-20"
				>
				<motion.h3
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
					className='sectionHeader'
				>
					Work History
				</motion.h3>

			<div className="w-full flex space-x-10 overflow-x-auto snap-x snap-mandatory">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			</div>

		</section>
	)
}

export default Work;