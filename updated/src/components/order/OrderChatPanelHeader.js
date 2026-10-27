/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The step-status element is updated by the order controller as the |
  | conversation advances.                                                     |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="chat-head">
			<h2 class="display">
				Order Counter
			</h2>
			<small id="step-status" aria-live="polite">
				Step · name
			</small>
		</div>
	`;
}
