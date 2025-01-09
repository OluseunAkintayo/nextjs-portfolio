/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const Skills = (props: Props) => {
	return (
		<section id="skills" className='min-h-screen md:snap-start'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center items-center max-w-7xl mx-auto pt-36 md:pt-6">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
				>
					skills
				</motion.h3>
				<div className="transition-all duration-300">
					<div className='grid grid-cols-2 sm:grid-cols-3 justify-center gap-6 p-6 text-sm max-w-3xl'>
						{/* <div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/html5.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest'>HTML5</p>
						</div> */}
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600 hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/typescript.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest'>Typescript</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/js.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>javascript</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/react.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>react js</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/nodejs.png" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>Node js</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/dotnet.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>Dotnet</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	hover:bg-gray-800/30">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/postgresql.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>Postgres</p>
						</div>
						{/* <div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/mongodb.png" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>mongoDB</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 cursor-pointer px-10 py-10 rounded-lg transition-all border border-gray-800 shadow shadow-slate-600	">
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
							>
								<Image src="/icons/wordpress.svg" width="48px" height="48px" />
							</motion.div>
							<p className='tracking-widest uppercase'>wordpress</p>
						</div> */}
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Skills;