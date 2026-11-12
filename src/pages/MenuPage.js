/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: MenuPage module for the Pizza Planet portfolio project.           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  | Rights: Proprietary; see LICENSE                                           |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<main id="main-content" tabindex="-1" data-page="menu">
			<div data-component="src/components/menu/MenuHeader.js">
			</div>
			<div class="container content">
				<div data-component="src/components/menu/MenuSizes.js">
				</div>
				<div class="two-col section-spaced">
					<div data-component="src/components/menu/MenuToppings.js">
					</div>
					<div data-component="src/components/menu/MenuCrusts.js">
					</div>
				</div>
				<div data-component="src/components/menu/MenuSides.js">
				</div>
				<div data-component="src/components/menu/MenuCta.js">
				</div>
			</div>
		</main>
	`;
}
