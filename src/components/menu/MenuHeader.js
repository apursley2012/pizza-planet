/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Menu header text is page-specific content and remains separate    |
  | from shared site chrome.                                                   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<header class="page-head menu">
			<div class="container">
				<div class="eyebrow">
					Est. 1974 · Grand Ave
				</div>
				<h1 class="display">
					The Menu
				</h1>
				<p>
					Everything is built to order: pick a size, pile on toppings, choose your crust. Prices below are exactly what the order counter will quote you.
				</p>
			</div>
		</header>
	`;
}
