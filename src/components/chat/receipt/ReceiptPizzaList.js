/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: ReceiptPizzaList module for the Pizza Planet portfolio project.   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
