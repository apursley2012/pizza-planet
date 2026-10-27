/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: StoryPage owns the story-specific timeline, oven figure, and CTA  |
  | composition.                                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
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
