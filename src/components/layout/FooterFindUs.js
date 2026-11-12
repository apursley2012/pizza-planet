/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: FooterFindUs module for the Pizza Planet portfolio project.       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
