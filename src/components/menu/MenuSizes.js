/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Size cards are composed from the shared size dataset rather than  |
  | duplicating card markup.                                                   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SIZE_MENU } from '../../data/menu.js';
export default function render() {
	return `
		<section class="menu-pizza-sizes">
			<h2 class="display section-title">
				Pizzas by the size
			</h2>
			<div class="cards3" id="menu-size-cards">
				${SIZE_MENU.map((_, index) => `
				<div data-component="src/components/menu/MenuSizeCard.js" data-index="${index}">
				</div>
				`).join('')}
			</div>
		</section>
	`;
}
