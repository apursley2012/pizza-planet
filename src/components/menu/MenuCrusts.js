/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: MenuCrusts module for the Pizza Planet portfolio project.         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { CRUST_MENU } from '../../data/menu.js';
export default function render() {
	return `
		<section>
			<h2 class="display section-title">
				Four crusts
			</h2>
			<ul class="menu-list">
				${CRUST_MENU.map((item) => `
				<li>
					<div>
						<h3 class="display">
							${item.name}
						</h3>
						<span class="muted">
							${item.description}
						</span>
					</div>
					<b class="included-price">
						${item.price}
					</b>
				</li>
				`).join('')}
			</ul>
		</section>
	`;
}
