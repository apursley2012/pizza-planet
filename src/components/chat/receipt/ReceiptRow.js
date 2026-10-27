/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Reusable label/value markup keeps receipt fields consistent while |
  | allowing targeted value IDs.                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render({ label = "", valueId = "" } = {}) {
	const id = valueId ? ` id="${valueId}"` : "";
	return `
		<div class="receipt-row">
			<span>
				${label}
			</span>
			<strong${id}>
				—
			</strong>
		</div>
	`;
}
