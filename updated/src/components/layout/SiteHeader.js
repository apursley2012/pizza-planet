/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Shared site header keeps desktop and mobile navigation markup in  |
  | one reusable component.                                                    |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<header class="site-header">
			<div class="container header-inner">
				<div data-component="src/components/layout/HeaderLogo.js">
				</div>
				<div data-component="src/components/layout/HeaderNav.js">
				</div>
				<div data-component="src/components/layout/HeaderPhoneLink.js">
				</div>
				<div data-component="src/components/layout/HeaderMenuButton.js">
				</div>
			</div>
			<div data-component="src/components/layout/HeaderMobileMenu.js">
			</div>
			<div data-component="src/components/ui/CheckerStrip.js">
			</div>
		</header>
	`;
}

/** Keeps desktop/mobile navigation state and ARIA state synchronized from one initialization path. */
export function init() {
	const current = location.pathname.split('/').pop() || 'order.html';

	// Both navigation versions use the same active-page rule so desktop and mobile stay consistent.
	document.querySelectorAll('.nav a, .mobile-nav a').forEach((link) => {
		const active = link.getAttribute('href') === current;
		link.classList.toggle('active', active);
		if (active) link.setAttribute('aria-current', 'page');
		else link.removeAttribute('aria-current');
	});

	const button = document.querySelector('.mobile-toggle');
	const nav = document.querySelector('.mobile-nav');
	if (!button || !nav) return;

	const setMenuOpen = (open) => {
		nav.classList.toggle('open', open);
		button.setAttribute('aria-expanded', String(open));
		button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		button.textContent = open ? '✕' : '☰';
	};

	button.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));

	// Escape closes the temporary mobile navigation and returns focus to its trigger.
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && nav.classList.contains('open')) {
			setMenuOpen(false);
			button.focus();
		}
	});
}
