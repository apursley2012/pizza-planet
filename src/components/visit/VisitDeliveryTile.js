/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Delivery tile documents the same flat-fee policy used by the      |
  | order calculations.                                                        |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="tile">
			<h3 class="display">
				▰ Delivery
			</h3>
			<p class="muted">
				Flat $5.00 fee within three miles. Driver tips go straight to the driver.
			</p>
		</div>
	`;
}
