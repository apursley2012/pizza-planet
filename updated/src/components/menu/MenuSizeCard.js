/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: One card template renders any size entry while SIZE_MENU remains  |
  | the source of prices and copy.                                             |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SIZE_MENU } from '../../data/menu.js';
export default function render({ index = '0' } = {}) {
	const item = SIZE_MENU[Number(index)] || SIZE_MENU[0];
	return `
		<article class="menu-card${Number(index) === 1 ? ' featured' : ''}" data-menu-size-card>
			<h3>
				${item.name}
			</h3>
			<p class="price">
				${item.price}
			</p>
			<p class="muted">
				${item.description}
			</p>
		</article>
	`;
}
