/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Visit CTA offers the browser-order path without changing the      |
  | contact-card responsibility.                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="visit-cta section-spaced-small">
			<h2 class="display">
				Skip the phone
			</h2>
			<p>
				The online counter takes carry out and delivery orders in about a minute.
			</p>
			<a class="btn btn-page" href="order.html">
				Start an order →
			</a>
		</div>
	`;
}
