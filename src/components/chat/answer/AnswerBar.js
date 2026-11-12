/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: AnswerBar module for the Pizza Planet portfolio project.          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
