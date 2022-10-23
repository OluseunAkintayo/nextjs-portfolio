import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../Footer';

type Props = {}

const Contact = (props: Props) => {
	return (
		<section id="contact" className='min-h-screen snap-end'>
			<motion.div className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row xl:px-6 justify-evenly items-center max-w-7xl mx-auto  pt-36 md:pt-0 ">
				<motion.h3
					className="sectionHeader"
					initial={{ opacity: 0, y: 100, scale: 0.5 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 1 }}
					style={{ top: '8rem' }}
				>
					contact
				</motion.h3>
				<div className="flex flex-col gap-6">
					<h4 className="text-center text-4xl font-semibold">
						Let's Talk
					</h4>
					<div>

					</div>
				</div>
			</motion.div>
			<Footer />
		</section>
	)
}

export default Contact;