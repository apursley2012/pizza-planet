/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: OrderPage composes the hero, chat, and receipt; its initializer   |
  | starts the order controller.                                               |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<main id="main-content" tabindex="-1" data-page="order">
			<div data-component="src/components/order/OrderHero.js">
			</div>
			<div class="container order-grid">
				<div data-component="src/components/order/OrderChatPanel.js">
				</div>
				<div data-component="src/components/order/OrderReceiptColumn.js">
				</div>
			</div>
		</main>
	`;
}

export async function init() {
	const { initializeOrderChat } = await import('../controllers/orderChatController.js');
	initializeOrderChat();
}
