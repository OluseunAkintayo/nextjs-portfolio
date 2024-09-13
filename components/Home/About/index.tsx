/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const About = (props: Props) => {
	return (
		<section id="about" className='h-screen overflow-y-auto md:overflow-hidden md:snap-center'>
			<div className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row md:pt-6 pt-36 max-w-7xl justify-evenly mx-auto items-center p-6">
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold'>About</h3>
				<div className="grid gap-10 lg:gap-20 grid-cols-1 lg:grid-cols-2">
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ type: 'spring', stiffness: 100 }}
						className='aspect-square rounded-md bg-cover bg-center hidden lg:block'
						style={{ backgroundImage: 'url(/img/port.jpg)' }}
					>
					</motion.div>
					<motion.div
						className="flex flex-col justify-center items-center gap-8 rounded shadow-md shadow-slate-700 border border-gray-700 aspect-square p-8"
						initial={{ scale: 0.5, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1 }}
						>
						<img src="/img/port.jpg"
							className='oblock lg:hidden rounded-full w-1/3'
							alt="Oluseun Oladiipo"
						/>
						<p className='leading-8 mt-4 lg:mt-0 lg:text-left text-justify'>
							I am a software developer with the following tech stack:  HTML, CSS/Tailwind CSS, JavaScript, React JS, Next JS and Wordpress. I also have skills in planning, collaboration and teamwork, effective communication and customer relationship management. I specialize in creating pixel-perfect and user-friendly interfaces for web applications with the singular purpose of ensuring great end-user experience. Implemented web applications are responsive and accessible on all platforms - desktops, tablets, and mobile.
							You may check out some of my completed projects <Link href="#projects"><span className='text-gray-500 cursor-pointer underline'>below</span></Link>.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About;