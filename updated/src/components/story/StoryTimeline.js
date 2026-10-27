/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Timeline entries are generated from shared milestone data while   |
  | each item keeps its own component.                                         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
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
