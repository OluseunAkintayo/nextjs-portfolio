import React from 'react';
import { motion } from 'framer-motion';
import projectsData from './data';
import Link from 'next/link';
import Footer from '../Footer';

type Props = {}

const Projects = (props: Props) => {
	return (
		<section id="projects" className='min-h-screen md:snap-start'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row xl:px-6 justify-center items-center max-w-7xl mx-auto  pt-36 ">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
				>
					projects
				</motion.h3>
				<div className='w-full flex max-[768px]:flex-wrap max-[768px]:items-center max-[768px]:justify-center gap-6 overflow-x-auto snap-x snap-mandatory px-6'>
					{
						projectsData.map((project, i) => (
							<Link href={project.url} target="_blank" key={i+1}>
								<div
									className='w-[378px] min-h-[475px] max-[625px]:w-full snap-center bg-gray-800 flex flex-col gap-5 flex-shrink-0 items-center px-4 py-8 rounded-lg mb-10 cursor-pointer'
								>
									<motion.div
										className='bg-gray-600 w-3/5 rounded-full flex items-center justify-center aspect-[1]'
										initial={{ scale: 0.7 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 1 }}
									>
										<img
											src={project.icon} alt=""
											className='w-[60%] rounded-tl-lg rounded-tr-lg'
										/>
									</motion.div>
									<div className='text-center space-y-3'>
										<h3 className='font-semibold text-2xl text-gray-400 tracking-widest'>{project.name}</h3>
										<p className='text-sm'>{project.summary}</p>
										<p className='text-sm'>Made with {project.madeWith}</p>
									</div>
								</div>
							</Link>
						))
					}
				</div>
				<div className='w-full h-[200px] absolute top-[30%] bg-[#55524820] skew-y-12' />
			</motion.div>
			<Footer />
		</section>
	)
}

export default Projects;