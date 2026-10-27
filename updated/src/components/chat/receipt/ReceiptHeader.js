/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Receipt heading markup stays separate from the live order values  |
  | written by the controller.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<h2 id="receipt-heading" class="display">
			Your Order
		</h2>
		<div class="receipt-sub">
			Pizza Planet · Grand Ave
		</div>
	`;
}
