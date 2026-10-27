/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Total rows are presentation only; all arithmetic remains          |
  | centralized in pricing.js.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="receipt-section">
			<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Subtotal" data-value-id="r-subtotal">
			</div>
			<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Sales Tax (10%)" data-value-id="r-tax">
			</div>
			<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Delivery Fee" data-value-id="r-delivery">
			</div>
			<div data-component="src/components/chat/receipt/ReceiptRow.js" data-label="Driver Tip" data-value-id="r-tip">
			</div>
		</div>
		<div class="total display">
			<strong>
				Total
			</strong>
			<strong id="r-total">
				$0.00
			</strong>
		</div>
	`;
}
