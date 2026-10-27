/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Hours are rendered from the shared schedule to keep footer        |
  | content synchronized with site data.                                       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { HOURS } from '../../data/site.js';
export default function render() {
	return `
		<div>
			<h2>
				Hours
			</h2>
			<ul>
				${HOURS.map((row) => `
				<li>
					<b>
						${row.days}
					</b>
					<br>
					${row.hours}
				</li>
				`).join('')}
			</ul>
		</div>
	`;
}
