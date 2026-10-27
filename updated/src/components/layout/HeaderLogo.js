/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Header branding uses the shared shop record instead of repeating  |
  | identity text and asset paths.                                             |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { IMAGES, SHOP } from '../../data/site.js';
export default function render() {
	return `
		<a class="brand" href="order.html" aria-label="Pizza Planet home">
			<img class="brand-logo" src="${IMAGES.logo}" alt="" width="1320" height="1320" decoding="async">
			<span class="brand-copy">
				<span class="brand-name">
					${SHOP.name}
				</span>
				<span class="brand-tag">
					${SHOP.tagline}
				</span>
			</span>
		</a>
	`;
}
