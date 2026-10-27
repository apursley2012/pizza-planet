/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Address tile keeps location presentation separate from the hours  |
  | and contact cards.                                                         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
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
