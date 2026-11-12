/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: ReceiptRow module for the Pizza Planet portfolio project.         |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
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
