/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The oven figure keeps image and caption semantics together as one |
  | story-page unit.                                                           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<figure class="oven">
			<img alt="Pizza oven" src="../public/pizza-oven.jpg" loading="lazy" decoding="async"/>
			<figcaption>
				The original deck oven, rebuilt twice, retired never.
			</figcaption>
		</figure>
	`;
}
