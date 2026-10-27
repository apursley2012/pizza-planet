/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Summary rows expose stable IDs for the customer, fulfillment, and |
  | payment values.                                                            |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Name" data-value-id="r-name">
		</div>
		<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Method" data-value-id="r-method">
		</div>
		<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Payment" data-value-id="r-payment">
		</div>
	`;
}
