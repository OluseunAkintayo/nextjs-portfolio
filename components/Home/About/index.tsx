import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const About = (props: Props) => {
	return (
		<section id="about" className='h-screen overflow-y-auto md:overflow-hidden md:snap-center'>
			<div className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row md:pt-6 pt-36 max-w-7xl justify-evenly mx-auto items-center p-6">
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold'>About</h3>
				<motion.img
					src="/img/port.jpg"
					className='flex-shrink-0 w-64 h-64 object-cover rounded-full md:rounded-lg md:h-80 md:w-auto lg:h-[480px] max-[500px]:w-48 max-[500px]:h-48'
					initial={{ scale: 0.5, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ type: 'spring', stiffness: 100 }}
				/>
				<motion.div
					className="space-y-6 md:px-8"
					initial={{ scale: 0.5, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<p className='text-sm leading-8'>
						I am a frontend web application developer with the following tech stack:  HTML, CSS/Tailwind CSS, JavaScript, React JS, Next JS and Wordpress. I also have skills in planning, collaboration and teamwork, effective communication and customer relationship management. I specialize in creating pixel-perfect and user-friendly interfaces for web applications with the singular purpose of ensuring great end-user experience. Implemented web applications are responsive and accessible on all platforms - desktops, tablets, and mobile.
						You may check out some of my completed projects <Link href="#projects"><span className='text-gray-500 cursor-pointer underline'>below</span></Link>.
					</p>
				</motion.div>
			</div>
		</section>
	)
}

export default About;