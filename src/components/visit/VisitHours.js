/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: VisitHours module for the Pizza Planet portfolio project.         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { HOURS } from "../../data/site.js";

export default function render() {
	const rows = HOURS.map(
		({ days, hours }) => `
				<li>
					<span>${days}</span>
					<span>${hours}</span>
				</li>
	`,
	).join("");

	return `
		<section class="hours-card">
			<h2 class="display">
				◷ Hours
			</h2>
			<ul class="hours">
				${rows}
			</ul>
		</section>
	`;
}
