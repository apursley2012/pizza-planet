/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Central pricing rules keep the menu, chat prompts, receipt, and   |
  | tests on one source of truth.                                              |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export const SIZE_PRICES = Object.freeze({
	small: 8.99,
	medium: 13.99,
	large: 17.99
});

export const TAX_RATE = 0.1;
export const DELIVERY_FEE = 5;
export const CARRY_OUT_FEE = 0;
export const COUPON_THRESHOLD = 50;
export const COUPON_VALUE = 10;

/** Centralizes cent rounding so tax, fees, and receipt totals cannot drift from floating-point residue. */
export const round2 = (value) => Math.round(value * 100) / 100;

/** Keeps every customer-facing money value on the same two-decimal display contract. */
export const formatCurrency = (value) => `$${Number(value).toFixed(2)}`;

/** Rounds each pizza line before aggregation so receipt lines and the final subtotal stay consistent. */
export const lineTotalFor = (unitPrice, quantity) => round2(unitPrice * quantity);

/** Keeps carryout explicitly free while centralizing the only fulfillment surcharge. */
export const deliveryFeeFor = (order) => (
	order.fulfillment === 'delivery' ? DELIVERY_FEE : CARRY_OUT_FEE
);

/**
 * Calculates every receipt total from the current order state.
 * `totalCost` intentionally preserves the original requirement of subtotal + delivery fee.
 * Pizza Planet's browser demo then adds tax and optional tip to produce the checkout `total`.
 */
export function computeTotals(order) {
	const subtotal = round2(
		order.pizzas.reduce((sum, pizza) => sum + pizza.lineTotal, 0)
	);
	const tax = round2(subtotal * TAX_RATE);
	const deliveryFee = round2(deliveryFeeFor(order));
	const tip = round2(order.tip);
	const totalCost = round2(subtotal + deliveryFee);
	const total = round2(totalCost + tax + tip);

	return { subtotal, tax, deliveryFee, tip, totalCost, total };
}

/** The $50 threshold awards a future-order coupon; it never discounts the current checkout. */
export const earnsCoupon = (total) => total >= COUPON_THRESHOLD;
