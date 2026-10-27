/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Contact details come from SHOP so the footer does not duplicate   |
  | the site-wide phone and address.                                           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { SHOP } from '../../data/site.js';
export default function render() {
	return `
		<div>
			<h2>
				Find us
			</h2>
			<ul>
				<li>
					${SHOP.address}
				</li>
				<li>
					<a href="${SHOP.phoneHref}">
						${SHOP.phone}
					</a>
				</li>
			</ul>
		</div>
	`;
}
