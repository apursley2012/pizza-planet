/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The shared header phone link uses the centralized display number  |
  | and telephone target.                                                      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SHOP } from '../../data/site.js';
export default function render() {
	return `
		<a class="phone" href="${SHOP.phoneHref}">
			${SHOP.phone}
		</a>
	`;
}
