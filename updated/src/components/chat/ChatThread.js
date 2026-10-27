/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The empty thread is populated by the order controller so message  |
  | state stays out of static markup.                                          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="thread" id="thread" role="log" aria-live="polite" aria-relevant="additions" aria-label="Order conversation">
		</div>
	`;
}
