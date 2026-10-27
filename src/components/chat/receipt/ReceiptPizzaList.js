/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Pizza rows are inserted here from order state; the placeholder    |
  | explains the empty ticket state.                                           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="receipt-section">
			<div class="receipt-section-label">
				PIZZAS
			</div>
			<div id="receipt-pizzas">
				<p class="empty">
					Nothing on the ticket yet. Answer a few questions and your pizzas will show up here.
				</p>
			</div>
		</div>
	`;
}
