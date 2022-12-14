import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Circles from './Circles';

type Props = {}

const Hero = (props: Props) => {
	const [text] = useTypewriter({
		words: [
			"<Frontend Developer />",
			"HTML | CSS | JavaScript",
			"React JS | Next JS | Wordpress"
		],
		loop: true,
		delaySpeed: 2000
	});

	return (
		<section id="hero" className='h-screen overflow-hidden md:snap-start'>
			<div className='h-full flex flex-col items-center justify-center space-y-16'>
				<Circles />
				<div className="p-4 flex flex-col items-center space-y-8 z-20">
					<img src="/img/port.jpg" draggable="false" className="relative rounded-full w-48 h-48 mx-auto object-cover" />
					<h2 className="text-lg font-[300] text-center uppercase tracking-[10px] text-gray-400">Oluseun Oladiipo</h2>
					<div className=''>
						<h1 className="text-xl lg:text-3xl px-4 text-center -mt-4">
							<span className='mr-1'>{text}</span>
							<Cursor cursorColor='#e4e4e4' />
						</h1>
					</div>
				</div>
				<div className="menuRow z-20 flex flex-wrap justify-center py-2 px-4 space-x-2">
					<Link href="#about">
						<button className='hero-btn'>About</button>
					</Link>
					<Link href="#work">
						<button className='hero-btn'>Work History</button>
					</Link>
					<Link href="#skills">
						<button className='hero-btn'>Skills</button>
					</Link>
					<Link href="#projects">
						<button className='hero-btn'>Projects</button>
					</Link>
					{/* <Link href="#contact">
						<button className='hero-btn'>Contact</button>
					</Link> */}
				</div>
			</div>
		</section>
	)
}

export default Hero;
