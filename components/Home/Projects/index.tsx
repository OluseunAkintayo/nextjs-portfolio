/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import projects from './data';

const Projects = () => {
	return (
		<React.Fragment>
			<section id="projects" className='min-h-screen lg:snap-start'>
				<motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row justify-center items-center max-w-7xl mx-auto pt-36 md:pt-6">
					<motion.h3
						className="sectionHeader"
						initial={{ opacity: 0, y: 100, scale: 0.5 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 1 }}
					>projects</motion.h3>
					<div className='p-6 text-sm grid gap-6 grid-cols-1 sm:grid-cols-2 mt-32'>
						{
							projects.map((project) => (
								<div key={project.id} className="project flex flex-col gap-4 cursor-pointer px-8 py-10 rounded-lg transition-all border border-gray-700 hover:bg-gray-800/30">
									<motion.div
										whileTap={{ scale: 0.9 }}
										whileHover={{ scale: 1.1 }}
										className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center"
									>
										<Image src={project.icon} width="40px" height="40px" className={project?.styling} />
									</motion.div>
									<h2 className="text-2xl text-gray-400 font-semibold tracking-widest text-left leading-7">{project.name}</h2>
									<p className="text-left text-sm text-gray-300">{project.summary}</p>
									<p className="text-left text-sm text-gray-300 leading-4">Made with {project.madeWith}</p>
									<div className='text-xs flex gap-4 mt-6'>
										{
											project.url &&
											<a href={project.url} target="_blank" rel="noreferrer" className="project-link text-gray-400 uppercase font-semibold tracking-widest">Visit</a>
										}
										{
											project.github &&
											<>
												|
												<a href={project.github} target="_blank" rel="noreferrer" className="project-link text-gray-400 uppercase font-semibold tracking-widest">View source code</a>
											</>
										}
									</div>
								</div>
							))
						}
					</div>
				</motion.div>
				<div className="h-24 flex items-center justify-center border-t border-opacity-30 border-gray-400">
					&copy; TechyDNA {new Date().getFullYear()}
				</div>
			</section>
		</React.Fragment>
	)
}

export default Projects;