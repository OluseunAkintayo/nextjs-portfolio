import React from 'react'

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className='border border-t-gray-700 border-b-0 border-l-0 border-r-0 h-12 grid place-content-center'>
			<p className="text-xs font-light text-center">
			 TechyDNA	`&copy;` { new Date().getFullYear() }
			</p>
		</footer>
	)
}

export default Footer