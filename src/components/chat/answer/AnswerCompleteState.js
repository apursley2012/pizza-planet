/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: This completion block replaces the active form only after the     |
  | ticket reaches the done state.                                             |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="answer-complete" data-answer-complete hidden>
			<p data-complete-question>
				Thanks for ordering with us.
			</p>
			<p>
				Your receipt is final. Start a fresh ticket whenever you’re ready.
			</p>
		</div>
	`;
}
