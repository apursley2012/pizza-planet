/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: HeaderMobileMenu module for the Pizza Planet portfolio project.   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { NAV_ITEMS } from '../../data/navigation.js';

export default function render() {
	const links = NAV_ITEMS
		.map((item) => `<a href="${item.to}">${item.label}</a>`)
		.join('');

	return `
		<nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
			${links}
		</nav>
	`;
}
