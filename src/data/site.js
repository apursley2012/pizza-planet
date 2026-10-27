/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Site-wide identity, hours, story milestones, and image paths are  |
  | centralized here for reuse.                                                |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

// Shop identity is shared by header/footer components and contact links.
export const SHOP = {
	name: 'Pizza Planet',
	tagline: 'Out of this world',
	phone: '(312) 555-0184',
	phoneHref: 'tel:3125550184',
	address: '1974 W. Grand Ave, Chicago, IL 60622',
	email: 'counter@pizzaplanet.example'
};

// Store hours are reused in the footer while the Visit page keeps its own presentation markup.
export const HOURS = [
	{ days: 'Monday', hours: 'Closed — dough day' },
	{ days: 'Tuesday – Thursday', hours: '11:00 am – 10:00 pm' },
	{ days: 'Friday – Saturday', hours: '11:00 am – midnight' },
	{ days: 'Sunday', hours: '12:00 pm – 9:00 pm' }
];

// Timeline copy stays as data so StoryMilestone can remain a small reusable renderer.
export const MILESTONES = [
	{
		year: '1974',
		title: 'Liftoff on Grand Ave',
		body: 'Sal Vega signs a lease with $400, one deck oven, and a flying saucer he painted on the window himself.'
	},
	{
		year: '1988',
		title: 'The deep dish argument',
		body: 'A regular bets Sal he can’t do Chicago-style better than the place down the block. We still serve the pizza that won.'
	},
	{
		year: '2003',
		title: 'The second generation',
		body: 'Sal’s daughter Marisol takes over the closing shift, then the books, then the whole shop.'
	},
	{
		year: 'Today',
		title: 'Same counter, new line',
		body: 'The order counter moved online — but it still asks you one question at a time, the way Sal always did.'
	}
];

// Asset paths stay relative so the static site remains safe under a GitHub Pages repository subpath.
export const IMAGES = {
	logo: '../public/pizza-planet-logo.png',
	heroPizza: '../public/hero-pizza.jpg',
	shop: '../public/pizza-planet-shop.jpg',
	oven: '../public/pizza-oven.jpg',
	sides: '../public/pizza-sides.jpg'
};
