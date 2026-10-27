/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Page modules stay separate while this loader provides the shared  |
  | header, footer, and component rendering.                                   |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

const PAGE_MODULES = {
	order: './pages/OrderPage.js',
	menu: './pages/MenuPage.js',
	story: './pages/StoryPage.js',
	visit: './pages/VisitPage.js'
};

/**
 * Resolves every data-component placeholder, including placeholders introduced by another component.
 * Initializers run only after all nested markup is present so components can safely query their DOM.
 */
async function renderComponents(root = document) {
	const initializers = [];
	let slots = [...root.querySelectorAll('[data-component]')];

	while (slots.length) {
		for (const slot of slots) {
			const moduleUrl = new URL(`../${slot.dataset.component}`, import.meta.url);
			const module = await import(moduleUrl.href);
			const template = document.createElement('template');
			template.innerHTML = module.default({ ...slot.dataset });
			slot.replaceWith(template.content);

			if (typeof module.init === 'function') initializers.push(module.init);
		}

		// A rendered component can contain more component slots, so discovery repeats until none remain.
		slots = [...root.querySelectorAll('[data-component]')];
	}

	initializers.forEach((initialize) => initialize());
}

/** Builds the shared application shell and loads the page selected by the body data attribute. */
export async function startApp() {
	const root = document.querySelector('#app');
	if (!root) throw new Error('Missing #app root element.');

	const pageName = document.body.dataset.page || 'order';
	const pagePath = PAGE_MODULES[pageName] || PAGE_MODULES.order;

	root.innerHTML = `
		<div class="app-shell">
			<div data-component="src/components/layout/SiteHeader.js"></div>
			<div class="app-main" data-component="src/pages/${pagePath.split('/').pop()}"></div>
			<div data-component="src/components/layout/SiteFooter.js"></div>
		</div>`;

	await renderComponents(root);

	// Other modules can wait for this event when they need the fully rendered component tree.
	document.dispatchEvent(new CustomEvent('app:ready'));
}
