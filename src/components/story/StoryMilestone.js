/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: A single milestone template reads by index from MILESTONES to     |
  | avoid repeated timeline markup.                                            |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { MILESTONES } from '../../data/site.js';
export default function render({ index = '0' } = {}) {
	const item = MILESTONES[Number(index)] || MILESTONES[0];
	return `
		<li data-story-milestone>
			<span class="year">
				${item.year}
			</span>
			<div class="yr">
				${item.year}
			</div>
			<h2 class="display">
				${item.title}
			</h2>
			<p class="muted">
				${item.body}
			</p>
		</li>
	`;
}
