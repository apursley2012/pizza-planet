/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: MenuSides module for the Pizza Planet portfolio project.          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { MENU_SECTIONS } from '../../data/menu.js';
import { IMAGES } from '../../data/site.js';
export default function render() {
	const sections = MENU_SECTIONS.map(
		(section) => `
			<section>
				<h2 class="display">${section.title}</h2>
				<p class="muted">${section.blurb}</p>
				<ul class="side-list">
					${section.items
						.map(
							(item) => `
								<li>
									<div>
										<h3>${item.name}</h3>
										<span class="muted">${item.description}</span>
									</div>
									<span class="price">${item.price}</span>
								</li>
							`
						)
						.join('')}
				</ul>
			</section>
		`
	).join('');
	return `
		<div class="sides-grid">
			<img alt="Pizza sides" src="${IMAGES.sides}" loading="lazy" decoding="async">
			<div>
				${sections}
			</div>
		</div>
	`;
}
