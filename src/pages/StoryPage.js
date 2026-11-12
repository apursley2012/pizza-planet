/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: StoryPage module for the Pizza Planet portfolio project.          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<main id="main-content" tabindex="-1" data-page="story">
			<div data-component="src/components/story/StoryHeader.js">
			</div>
			<div class="narrow content">
				<div data-component="src/components/story/StoryTimeline.js">
				</div>
				<div data-component="src/components/story/StoryOvenFigure.js">
				</div>
				<div data-component="src/components/story/StoryCta.js">
				</div>
			</div>
		</main>
	`;
}
