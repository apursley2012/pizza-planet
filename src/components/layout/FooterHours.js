/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: FooterHours module for the Pizza Planet portfolio project.        |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
