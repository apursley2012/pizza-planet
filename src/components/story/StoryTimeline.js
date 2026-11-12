/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: StoryTimeline module for the Pizza Planet portfolio project.      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

import { MILESTONES } from '../../data/site.js';
export default function render() {
	return `
		<ol class="timeline" id="story-timeline">
			${MILESTONES.map((_, index) => `
			<div data-component="src/components/story/StoryMilestone.js" data-index="${index}">
			</div>
			`).join('')}
		</ol>
	`;
}
