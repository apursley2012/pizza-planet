/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Shared footer branding reads shop identity and logo paths from    |
  | the site data module.                                                      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { IMAGES, SHOP } from '../../data/site.js';
export default function render() {
	return `
		<div class="footer-brand-block">
			<div class="footer-brand-lockup">
				<span class="footer-logo-box">
					<img src="${IMAGES.logo}" alt="" loading="lazy" decoding="async">
				</span>
				<div>
					<p class="footer-brand">
						${SHOP.name}
					</p>
					<p class="footer-tagline">
						${SHOP.tagline}
					</p>
				</div>
			</div>
			<p class="footer-blurb">
				One oven, four crusts, and a counter that’s been taking orders the same way since 1974. Order online and we’ll ask you the same questions Sal would.
			</p>
			<a class="btn btn-yellow footer-order-btn" href="order.html">
				Start an order
			</a>
		</div>
	`;
}
