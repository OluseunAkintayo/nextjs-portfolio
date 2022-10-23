import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const Skills = (props: Props) => {
	return (
		<section id="skills" className='min-h-screen snap-start'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center items-center max-w-7xl mx-auto pt-36">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
				>
					skills
				</motion.h3>
				<div className='flex flex-wrap justify-center gap-6 p-6'>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/html5.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest'>HTML5</p>
					</div>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/css3.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest'>CSS3</p>
					</div>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/js.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest uppercase'>javascript</p>
					</div>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/react.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest uppercase'>react js</p>
					</div>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/next.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest uppercase'>next js</p>
					</div>
					<div className="h-48 w-36 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-lg transition-all border border-gray-700">
						<motion.div
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
						>
							<Image src="/icons/wordpress.svg" width="48px" height="48px" />
						</motion.div>
						<p className='tracking-widest uppercase'>wordpress</p>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Skills;