/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: OrderChatPanel module for the Pizza Planet portfolio project.     |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<section class="chat-card">
			<div data-component="src/components/order/OrderChatPanelHeader.js">
			</div>
			<div data-component="src/components/chat/ChatThread.js">
			</div>
			<div data-component="src/components/chat/answer/AnswerBar.js">
			</div>
		</section>
	`;
}
