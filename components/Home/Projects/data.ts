const projectsData: { id: number; name: string; icon: string; url: string; github?: string; madeWith: string; summary: string; styling?: string; }[] = [
	{
		id: 5,
		name: 'Sterling Meme Generator',
		icon: '/img/sterling.svg',
		url: 'https://sterling.ng/meme',
		madeWith: 'React, SCSS',
		summary: 'Events meme generator for Sterling Bank Plc.'
	},
	{
		id: 6,
		name: "Invoice Generator",
		icon: "https://img.icons8.com/ultraviolet/40/file.png",
		url: "https://invoice--gen.vercel.app/",
		madeWith: "React, Tailwind CSS, Shadcn",
		summary: "Generate invoices for your business",
		github: 'https://github.com/OluseunAkintayo/InvoiceMaker-UI',
	},
	{
		id: 3,
		name: 'BWC Consult',
		icon: '/img/bwc.png',
		url: 'https://www.bwcconsult.co.uk',
		madeWith: 'React, Tailwind',
		summary: 'A website for an IT consulting firm'
	},
	{
		id: 1,
		name: 'Lendsqr Dashboard',
		icon: '/img/lendsqr.png',
		url: 'https://lendsqr-techydna.vercel.app/',
		github: 'https://github.com/OluseunAkintayo/lendsqr-fe-test',
		madeWith: 'React, SCSS',
		summary: 'Manage customers and loan products'
	},
	{
		id: 2,
		name: 'The Shop',
		icon: '/icons/cart.svg',
		url: 'https://the-shop-one.vercel.app/',
		github: 'https://github.com/OluseunAkintayo/the-shop',
		madeWith: 'React, Material UI, Styled Components',
		summary: 'Shop for everyday items with ease'
	},
	// {
	// 	id: 4,
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
