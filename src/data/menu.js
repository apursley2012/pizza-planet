/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Menu data is kept separate from render logic so prices and        |
  | visible menu copy have one edit point.                                     |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SIZE_PRICES, formatCurrency } from '../utils/pricing.js';

// Pizza sizes and prices shown on the Menu page. Pricing is sourced from the same rules as checkout.
export const SIZE_MENU = [
	{
		name: 'Small — 10"',
		description: 'Two or three slices apiece. Good for one hungry person.',
		price: formatCurrency(SIZE_PRICES.small)
	},
	{
		name: 'Medium — 14"',
		description: 'The house standard. Feeds two, or one with leftovers.',
		price: formatCurrency(SIZE_PRICES.medium)
	},
	{
		name: 'Large — 18"',
		description: 'The family pie. Eight generous slices off the deck.',
		price: formatCurrency(SIZE_PRICES.large)
	}
];

// Crust choices match the accepted crust values in the order flow.
export const CRUST_MENU = [
	{
		name: 'Thin',
		description: 'Cracker-crisp, docked and stretched by hand.',
		price: 'No additional charge'
	},
	{
		name: 'Thick',
		description: 'Airy, chewy, slow-proofed 48 hours.',
		price: 'No additional charge'
	},
	{
		name: 'Pan',
		description: 'Buttered steel pan, fried-golden edges.',
		price: '+$2.50'
	},
	{
		name: 'Deep dish',
		description: 'Chicago-style wall of crust and cheese.',
		price: '+$5.00'
	}
];

// Topping labels are presentation data; the chatbot still accepts free-form space-separated input.
export const TOPPINGS = [
	'Cheese',
	'Pepperoni',
	'Mushroom',
	'Sausage',
	'Onion',
	'Pepper',
	'Olive',
	'Basil',
	'Bacon',
	'Ricotta',
	'Pineapple',
	'Anchovy',
	'Jalapeño',
	'Garlic',
	'Spinach',
	'Artichoke'
];

// Sides, drinks, and sweets share one section shape so MenuSides can render them consistently.
export const MENU_SECTIONS = [
	{
		id: 'sides',
		title: 'Sides',
		items: [
			{
				name: 'Garlic knots',
				description: 'Six knots, butter, parmesan, a lot of garlic.',
				price: '$5.50'
			},
			{
				name: 'Cheesy bread',
				description: 'Half a pizza dough, all of the mozzarella.',
				price: '$6.75'
			},
			{
				name: 'House salad',
				description: 'Romaine, red onion, olives, red wine vinaigrette.',
				price: '$4.95'
			},
			{
				name: 'Meatballs',
				description: 'Three, in Sunday gravy, with a slice of bread.',
				price: '$7.25'
			}
		]
	},
	{
		id: 'drinks',
		title: 'Drinks',
		items: [
			{
				name: 'Bottled soda',
				description: 'Cola, root beer, orange, cream.',
				price: '$2.50'
			},
			{
				name: 'Italian lemonade',
				description: 'Squeezed in-house every morning.',
				price: '$3.25'
			},
			{
				name: 'House red',
				description: 'By the glass. Ask what we opened today.',
				price: '$7.00'
			},
			{
				name: 'Espresso',
				description: 'One shot, one sugar, no rush.',
				price: '$2.75'
			}
		]
	},
	{
		id: 'sweets',
		title: 'Sweets',
		items: [
			{
				name: 'Cannoli',
				description: 'Filled to order, pistachio on the ends.',
				price: '$4.25'
			},
			{
				name: 'Zeppole',
				description: 'Six, powdered sugar, paper bag.',
				price: '$4.75'
			},
			{
				name: 'Tiramisu',
				description: 'Sal’s mother’s recipe. Not negotiable.',
				price: '$5.50'
			}
		]
	}
];
