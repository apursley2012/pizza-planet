/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: aria-live announces validation feedback without moving focus away |
  | from the current answer field.                                             |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div id="answer-feedback" class="answer-feedback" aria-live="assertive">
		</div>
	`;
}
