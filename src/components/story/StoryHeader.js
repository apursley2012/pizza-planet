/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Story header content is isolated from the reusable                |
  | header/navigation component.                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<header class="story-head">
			<div class="container story-grid">
				<div>
					<div class="eyebrow">
						Our story
					</div>
					<h1 class="display">
						Fifty years of asking the same five questions.
					</h1>
					<p>
						Sal believed a pizza order is a conversation, not a form. Half a century later the ovens are the same, the dough is the same, and
						the questions haven’t changed.
					</p>
				</div>
				<img alt="Pizzeria dining room" src="../public/pizza-planet-shop.jpg"/>
			</div>
		</header>
	`;
}
