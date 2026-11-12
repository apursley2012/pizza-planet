/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: VisitAddressTile module for the Pizza Planet portfolio project.   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { SHOP } from '../../data/site.js';

export default function render() {
	return `
		<div class="tile">
			<h3 class="display">
				⌖ Address
			</h3>
			<p class="muted">
				${SHOP.address}
			</p>
		</div>
	`;
}
