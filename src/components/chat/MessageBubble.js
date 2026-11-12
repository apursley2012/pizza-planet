/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: MessageBubble module for the Pizza Planet portfolio project.      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

export function createMessageBubble(text, role = "bot", tone = "") {
	const element = document.createElement("div");
	element.className = `bubble ${role}${tone ? ` ${tone}` : ""}`;
	element.textContent = text;
	return element;
}

export default function render() {
	return `
		<div class="bubble" data-message-bubble hidden>
		</div>
	`;
}
