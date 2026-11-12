/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: HeaderPhoneLink module for the Pizza Planet portfolio project.    |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
