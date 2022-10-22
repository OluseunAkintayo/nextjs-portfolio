import React from 'react';
import { animate, motion } from 'framer-motion';

type Props = {}

const Circles = (props: Props) => {
	return (
		<motion.div
			className='relative flex justify-center items-center'
			initial={{ opacity: 0 }}
			animate={{ scale: [1, 2, 3, 2, 1], opacity: [0.5, 0.8, 1, 0.8, 0.5] }}
			transition={{ duration: 2.5 }}
		>
			<div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping' />
			<div className='absolute border border-[#F5F5F599] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
			<div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping' />
		</motion.div>
	)
}

export default Circles;