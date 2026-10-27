/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The shared footer composes brand, location, hours, and disclosure |
  | components for every page.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<footer class="site-footer">
			<div class="container footer-grid">
				<div data-component="src/components/layout/FooterBrand.js">
				</div>
				<div data-component="src/components/layout/FooterFindUs.js">
				</div>
				<div data-component="src/components/layout/FooterHours.js">
				</div>
			</div>
			<div data-component="src/components/layout/FooterLegal.js">
			</div>
		</footer>
	`;
}
