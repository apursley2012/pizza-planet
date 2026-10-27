/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Story-page CTA links back to ordering without sharing             |
  | story-specific layout rules.                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="cta">
			<h2 class="display">
				Still hungry?
			</h2>
			<p>
				Order the same way the neighborhood has since 1974.
			</p>
			<a class="btn btn-yellow" href="order.html">
				Start an order →
			</a>
		</div>
	`;
}
