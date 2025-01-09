import Link from 'next/link';
import React from 'react';
import { ArrowUp } from 'react-feather';

const BackToTop = () => {

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	return (
		<a href="#hero">
			<div title="Back to top" className='fixed z-100 bottom-5 right-5 cursor-pointer border border-gray-600 p-2 rounded-md bg-gray-900 hover:scale-110'>
				<ArrowUp />
			</div>
		</a>
	)
}

export default BackToTop;
