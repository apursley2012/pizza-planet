/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Visit header contains location-specific page copy while shared    |
  | navigation stays reusable.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<header class="page-head visit">
			<div class="container">
				<div class="eyebrow">
					Visit
				</div>
				<h1 class="display">
					One counter. One neighborhood.
				</h1>
				<p>
					Carry out is always free. We deliver inside a three-mile radius for a flat $5.00, cash or card at the door.
				</p>
			</div>
		</header>
	`;
}
