/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Coupon output is hidden until the completed order meets the       |
  | configured threshold.                                                      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="receipt-coupon" data-receipt-coupon hidden>
		</div>
	`;
}
