/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: OrderChatPanelHeader module for the Pizza Planet portfolio        |
  | project.                                                                   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
