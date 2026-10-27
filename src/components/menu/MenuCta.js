/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Menu CTA returns customers to the ordering flow without           |
  | introducing page-specific state.                                           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="cta">
			<h2 class="display">
				Hungry yet?
			</h2>
			<p>
				The counter is open. It’ll walk you through it one question at a time.
			</p>
			<a class="btn btn-yellow" href="order.html">
				Start my order →
			</a>
		</div>
	`;
}
