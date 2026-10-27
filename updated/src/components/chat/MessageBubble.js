/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Message bubbles are created with textContent so customer input is |
  | never interpreted as HTML.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
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
