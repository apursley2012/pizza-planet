/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: VisitPage groups hours, location, contact, and order CTA          |
  | components without mixing their markup.                                    |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<main id="main-content" tabindex="-1" data-page="visit">
			<div data-component="src/components/visit/VisitHeader.js">
			</div>
			<div class="container content visit-grid">
				<div>
					<div data-component="src/components/visit/VisitHours.js">
					</div>
					<div class="tiles">
						<div data-component="src/components/visit/VisitAddressTile.js">
						</div>
						<div data-component="src/components/visit/VisitDeliveryTile.js">
						</div>
					</div>
				</div>
				<div>
					<div data-component="src/components/visit/VisitContactCard.js">
					</div>
					<div data-component="src/components/visit/VisitCta.js">
					</div>
				</div>
			</div>
		</main>
	`;
}
