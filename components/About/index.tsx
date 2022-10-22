import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

const About = (props: Props) => {
	return (
		<section id="about" className='h-screen md:min-h-screen overflow-hidden snap-center'>
			<div className="flex flex-col relative h-full text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center p-6">
				<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold'>About</h3>
				<motion.img
					src="/img/port.jpg"
					className='-mb-20 md:mb-0 flex-shrink-0 w-64 h-64 object-cover rounded-full md:rounded-lg md:h-80 md:w-auto lg:h-[480px]'
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.5, type: 'spring', stiffness: 200 }}
				/>
				<motion.div
					className="space-y-6 md:px-8"
					initial={{ y: 300, opacity: 0 }}
					whileInView={{ y:0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h4 className="font-semibold text-3xl">A Little Background...</h4>
					<p className='text-base leading-8'>
						I am a frontend web application developer with the following tech stack:  HTML, CSS, Tailwind CSS, JavaScript, and React JS. I also have skills in planning, collaboration and teamwork, effective communication and customer relationship management. I specialize in creating responsive, pixel-perfect, user-friendly interfaces for web applications with the singular purpose of ensuring great end-user experience. Implemented web applications are responsive and accessible on all platforms - desktops, tablets, and mobile.
						You may check out my portfolio <Link href="#work"><span className='text-gray-500 cursor-pointer underline'>below</span></Link>.
					</p>

				</motion.div>
			</div>
		</section>
	)
}

export default About;