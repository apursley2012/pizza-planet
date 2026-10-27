/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The composer groups input, feedback, completion state, and reset  |
  | controls without owning order logic.                                       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="composer">
			<div data-component="src/components/chat/answer/AnswerForm.js">
			</div>
			<div data-component="src/components/chat/answer/AnswerFeedback.js">
			</div>
			<div data-component="src/components/chat/answer/AnswerCompleteState.js">
			</div>
			<div data-component="src/components/chat/answer/AnswerResetButton.js">
			</div>
		</div>
	`;
}
