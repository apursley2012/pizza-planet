/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: AnswerCompleteState module for the Pizza Planet portfolio         |
  | project.                                                                   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
