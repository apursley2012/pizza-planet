/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The receipt column keeps ticket output and demo disclosure        |
  | together without mixing chat logic.                                        |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<aside class="receipt-wrap">
			<div data-component="src/components/chat/receipt/ReceiptPanel.js">
			</div>
			<div data-component="src/components/order/OrderDemoNotice.js">
			</div>
		</aside>
	`;
}
