/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: MenuToppings module for the Pizza Planet portfolio project.       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { TOPPINGS } from '../../data/menu.js';
export default function render() {
	return `
		<section>
			<h2 class="display section-title">
				Toppings
			</h2>
			<p class="muted">
				Type as many as you like at the counter, separated by spaces. Just want cheese? Say cheese.
			</p>
			<ul class="pill-list">
				${TOPPINGS.map((item) => `
				<li>
					${item}
				</li>
				`).join('')}
			</ul>
		</section>
	`;
}
