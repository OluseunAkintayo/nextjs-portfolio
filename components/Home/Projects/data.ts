const projectsData: { id: number; name: string; icon: string; url: string; github: string; madeWith: string; summary: string; styling?: string; }[] = [
	{
		id: 4,
		name: 'Lendsqr Dashboard',
		icon: '/img/lendsqr.png',
		url: 'https://lendsqr-techydna.vercel.app/',
		// url: 'https://lendsqr.techydna.com/',
		github: 'https://github.com/OluseunAkintayo/lendsqr-fe-test',
		madeWith: 'React, SCSS',
		summary: 'Manage customers and loan products'
	},
	{
		id: 2,
		name: 'The Shop',
		icon: '/icons/cart.svg',
		url: 'https://the-shop-one.vercel.app/',
		// url: 'https://the-shop.techydna.com/',
		github: 'https://github.com/OluseunAkintayo/the-shop',
		madeWith: 'React, Material UI, Styled Components',
		summary: 'Shop for everyday items with ease'
	},
	// {
	// 	id: 3,
	// 	name: 'Overwatch',
	// 	icon: '/icons/overwatch-min.png',
	// 	url: 'https://overwatch-delta.vercel.app/',
	// 	// url: 'https://overwatch.techydna.com/',
	// 	github: 'https://github.com/OluseunAkintayo/overwatch',
	// 	madeWith: 'React, Express, MongoDB',
	// 	summary: 'The complete inventory management system',
	// 	styling: 'overwatch-img'
	// }
];

export default projectsData;
