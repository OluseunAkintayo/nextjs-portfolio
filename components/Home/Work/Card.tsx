import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	item: {
		id: number,
		workplace: string,
		title: string,
		workLogo: string,
		skills: string[],
		period: string,
		jd: string[]
	}
}

const Card = (props: Props) => {

	const { item } = props;

	return (
		<article className='md:px-8 space-y-3 flex flex-col items-start flex-shrink-0 bg-gray-800 opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg p-6 w-full cursor-pointer md:snap-center md:w-[500px]'>
			<motion.div
				initial={{ y: -100, opacity: 0.5 }}
				whileInView={{ y:0, opacity: 1 }}
				viewport={{ once: true }}
					className={`w-24 h-24 ${ item.workLogo !== '/img/uba-logo.png' ? 'p-1' : 'p-3' } bg-gray-700 rounded-full flex items-center justify-center`}
			>
				<img src={item.workLogo} className={`w-4/5 object-center ${ item.workLogo !== '/img/uba-logo.png' && 'rounded-full' }`} />
			</motion.div>
			<div className='space-y-1 text-gray-400 text-left'>
				<h3 className='font-semibold text-2xl text-gray-400'>{item.title}</h3>
				<p className='text-xl'>{item.workplace}</p>
				<div className="flex space-x-2 my-2 max-[500px]:hidden">
					{item.skills.map(skill => (
						<div className='bg-gray-500 h-12 w-12 p-1 rounded-full flex items-center justify-center' key={skill}>
							<img src={"/icons/" + skill + ".svg"} alt={skill}
								className="h-4/5"
							/>
						</div>
					))}
				</div>
				<p className='text-sm font-[300] uppercase py-1'>{item.period}</p>
				<ul className='list-disc ml-4 space-y-2 text-lg'>
					{item.jd.map((listItem, i) => <li key={i+1} className="leading-5 text-sm">{listItem}</li>)}
				</ul>
			</div>
		</article>
	)
}

export default Card;