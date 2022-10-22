import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

const Header = (props: Props) => {
	return (
		<header
			className='sticky top-0 w-full max-w-7xl mx-auto z-30 flex items-start justify-between p-4 bg-red-300'
			style={{ backgroundColor: 'rgb(17, 24, 39)', margin: '0 auto' }}
		>
			<motion.div initial={{ x: -500, opacity: 0, scale: 0.2 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="social-icons flex items-center space-x-3">
				<SocialIcon fgColor='gray' bgColor='transparent' url="https://twitter.com/michaelsondev" />
				<SocialIcon fgColor='gray' bgColor='transparent' url="https://github.com/oluseunakintayo" />
				<SocialIcon fgColor='gray' bgColor='transparent' url="https://www.linkedin.com/in/oluseun-oladiipo-58a80491/" />
			</motion.div>
			<motion.div initial={{ x: 500, opacity: 0, scale: 0.2 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex items-center text-gray-300 cursor-pointer'>
				<SocialIcon network='email' bgColor='transparent' fgColor='gray' />
				<p className='uppercase hidden md:inline text-sm text-gray-400'>Get in Touch</p>
			</motion.div>
		</header>
	)
}

export default Header;