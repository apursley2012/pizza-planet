/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Keeps the branded home-page hero separate from the ordering       |
  | introduction content.                                                      |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<section class="logo-hero" aria-labelledby="pizza-planet-hero-title">
			<div class="container logo-hero-inner">
				<img class="logo-hero-image" src="../public/pizza-planet-logo.png" alt="" width="1320" height="1320">
				<h1 id="pizza-planet-hero-title" class="logo-hero-title">
					Pizza Planet
				</h1>
			</div>
		</section>
		<section class="order-intro">
			<div class="container order-intro-grid">
				<div>
					<div class="badge">
						Order at the counter
					</div>
					<h2 class="display">
						Tell us what you want.
						<span>
							One question at a time.
						</span>
					</h2>
					<p>
						No twelve-field form. Pizza Planet takes your order the way the counter always has — name, size, toppings, crust, and how many. Your
						receipt prints itself as you go.
					</p>
					<a class="btn btn-page" href="menu.html">
						See the menu first
					</a>
				</div>
				<img alt="Pepperoni and mushroom pizza" class="hero-img" src="../public/hero-pizza.jpg">
			</div>
		</section>
	`;
}
