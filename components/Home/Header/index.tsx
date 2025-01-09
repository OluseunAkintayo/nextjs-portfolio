/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='sticky top-0 w-full z-30 py-4 xl:px-6 px-4 shadow-sm shadow-slate-800' style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
			<div className='max-w-7xl mx-auto flex items-start justify-between'>
				<motion.div initial={{ x: -500, opacity: 0, scale: 0.2 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="social-icons flex items-center space-x-3">
					<Link href="/"><img src="/icons/logo.svg" className="h-12 cursor-pointer" alt="logo" draggable="false" /></Link>
				</motion.div>
				<motion.div initial={{ x: 500, opacity: 0, scale: 0.2 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex items-center text-gray-300 cursor-pointer'>
					<SocialIcon fgColor='gray' bgColor='transparent' url="https://github.com/oluseunakintayo" target="_blank" rel="noreferrer" />
					<SocialIcon fgColor='gray' bgColor='transparent' url="https://www.linkedin.com/in/oluseun-oladiipo-58a80491/" target="_blank" rel="noreferrer" />
					<SocialIcon fgColor='gray' bgColor='transparent' url="mailto:oluseun.oladiipo@gmail.com" network='email' target="_blank" rel="noreferrer" />
				</motion.div>
			</div>
		</header>
	)
}

export default Header;