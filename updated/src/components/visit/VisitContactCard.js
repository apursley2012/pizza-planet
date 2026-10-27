/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Contact-card markup is isolated because it has distinct           |
  | visit-page styling and actions.                                            |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SHOP } from '../../data/site.js';

export default function render() {
	return `
		<div class="contact-card">
			<h2 class="display">
				Call the shop
			</h2>
			<p>
				Big orders, allergies, or a question about the deep dish — pick up the phone, someone’s always by the register.
			</p>
			<p>
				<a class="display call" href="${SHOP.phoneHref}">
					${SHOP.phone}
				</a>
			</p>
			<a class="email" href="mailto:${SHOP.email}">
				${SHOP.email}
			</a>
		</div>
	`;
}
