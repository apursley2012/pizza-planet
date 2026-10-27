/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The chat panel composes conversation and answer controls;         |
  | orderChatController.js owns behavior and state.                            |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
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
