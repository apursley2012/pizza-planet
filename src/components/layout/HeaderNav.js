/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: HeaderNav module for the Pizza Planet portfolio project.          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
