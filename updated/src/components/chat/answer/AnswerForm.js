/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The answer form keeps the editable input markup separate from the |
  | state-machine logic.                                                       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<form id="answer-form">
			<div data-component="src/components/chat/answer/AnswerPrompt.js">
			</div>
			<div data-component="src/components/chat/answer/AnswerChips.js">
			</div>
			<div class="answer-row">
				<input autocomplete="off" id="answer" type="text" aria-describedby="answer-feedback" aria-invalid="false">
				<button type="submit">
					Continue →
				</button>
			</div>
		</form>
	`;
}
