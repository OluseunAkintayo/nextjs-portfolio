import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import workData from './workData';

type Props = {};

const Work = (props: Props) => {
	
	return (
		<section id="work" className='md:snap-start min-h-screen overflow-y-auto'>
			<div
				className="flex flex-col relative h-full text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center p-6 md:pt-48 pt-48"
				>
				<motion.h3
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
					className='sectionHeader'
				>
					Work History
				</motion.h3>

			<div className="w-full flex max-[768px]:flex-wrap max-[768px]:items-center max-[768px]:justify-center max-[768px]:space-y-10 md:space-x-10 overflow-x-auto snap-x snap-mandatory">
				{
					workData.map(item => <Card item={item} key={item.id} />)
				}
			</div>
			</div>

		</section>
	)
}

export default Work;