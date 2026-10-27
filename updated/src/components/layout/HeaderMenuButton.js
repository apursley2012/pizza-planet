/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The mobile menu button starts collapsed; SiteHeader.js owns its   |
  | interactive state changes.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<button type="button" class="mobile-toggle" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded="false">
			☰
		</button>
		\n
	`;
}
