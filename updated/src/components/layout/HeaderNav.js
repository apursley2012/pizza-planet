/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Desktop navigation is generated from the shared route list used   |
  | by the mobile menu.                                                        |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { NAV_ITEMS } from '../../data/navigation.js';
export default function render() {
	return `
		<nav class="nav" aria-label="Primary">
			${NAV_ITEMS.map((item) => `
			<a href="${item.to}">
				${item.label}
			</a>
			`).join('')}
		</nav>
	`;
}
