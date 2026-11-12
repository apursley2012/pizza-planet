/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: HeaderLogo module for the Pizza Planet portfolio project.         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
