/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Shared parsers keep validation rules out of the order UI and      |
  | return one consistent result shape.                                        |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

const fail = (error) => ({ ok: false, error });

// These option lists are frozen because the order flow treats them as business rules, not mutable state.
export const CRUSTS = Object.freeze(['thin', 'thick', 'pan', 'deep dish']);
export const SIZES = Object.freeze(['small', 'medium', 'large']);

/** Converts normalized values back to readable labels for chat and receipt output. */
export function titleCase(value) {
	return String(value)
		.split(' ')
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}

/** Trims repeated whitespace while rejecting an empty ticket name. */
export function parseName(raw) {
	const value = raw.trim().replace(/\s+/g, ' ');
	if (!value) return fail('We need a name for the ticket — it can’t be blank.');
	if (value.length > 40) return fail('That name is a little long — 40 characters max.');
	return { ok: true, value };
}

/** Accepts only the three sizes supported by the pricing table. */
export function parseSize(raw) {
	const value = raw.trim().toLowerCase();
	if (!value) return fail('Pick a size: small, medium, or large.');
	if (SIZES.includes(value)) return { ok: true, value };
	return fail(`“${raw.trim()}” isn’t a size we make. Choose small, medium, or large.`);
}

/**
 * Keeps the original space-separated topping input model and normalizes each token for storage.
 * A plain cheese pizza is represented by entering "cheese" rather than an empty toppings value.
 */
export function parseToppings(raw) {
	const value = raw.trim().replace(/\s+/g, ' ');
	if (!value) return fail('Toppings can’t be blank. Type “cheese” if you don’t want anything extra.');
	return { ok: true, value: value.split(' ').map((topping) => topping.toLowerCase()) };
}

/** Accepts only crust names shown by the order counter. */
export function parseCrust(raw) {
	const value = raw.trim().replace(/\s+/g, ' ').toLowerCase();
	if (!value) return fail('Crust can’t be blank — thin, thick, pan, or deep dish.');
	if (!CRUSTS.includes(value)) {
		return fail(`We roll four crusts: thin, thick, pan, or deep dish. “${raw.trim()}” isn’t one of them.`);
	}
	return { ok: true, value };
}

/**
 * Requires a positive whole-number pizza count and routes 50+ pizza orders to the shop.
 * The decimal-looking validation branch exists so values such as 2.5 receive the whole-pizza message.
 */
export function parseQuantity(raw) {
	const value = raw.trim();
	if (!value) return fail('How many of these? Enter a number greater than 0.');
	if (!/^\d+(\.\d+)?$/.test(value)) return fail('Quantity has to be a number — try 1, 2, or 3.');

	const parsed = Number(value);
	if (!Number.isFinite(parsed) || parsed <= 0) return fail('Quantity has to be greater than 0.');
	if (!Number.isInteger(parsed)) return fail('We can only bake whole pizzas — enter a whole number.');
	if (parsed > 50) return fail('That’s a party order — call the shop for 50+ pizzas.');
	return { ok: true, value: parsed };
}

/** Normalizes the short and long forms used by both repeat-order questions. */
export function parseYesNo(raw) {
	const value = raw.trim().toLowerCase();
	if (value === 'yes' || value === 'y') return { ok: true, value: 'yes' };
	if (value === 'no' || value === 'n') return { ok: true, value: 'no' };
	return fail('Just a yes or a no (y / n) here.');
}

/** Maps accepted pickup wording to the single internal "carry out" value used by pricing. */
export function parseFulfillment(raw) {
	const value = raw.trim().toLowerCase().replace(/\s+/g, ' ');
	if (['carry out', 'carryout', 'pickup', 'pick up'].includes(value)) {
		return { ok: true, value: 'carry out' };
	}
	if (value === 'delivery') return { ok: true, value: 'delivery' };
	return fail('Say “carry out” or “delivery” so we know where this pizza is headed.');
}

/** Normalizes common card wording while keeping cash and card as the only stored methods. */
export function parsePayment(raw) {
	const value = raw.trim().toLowerCase().replace(/\s+/g, ' ');
	if (value === 'cash') return { ok: true, value: 'cash' };
	if (['card', 'credit', 'debit', 'credit card', 'debit card'].includes(value)) {
		return { ok: true, value: 'card' };
	}
	return fail('We take cash or card — which will it be?');
}

/**
 * Validates the shape of a fictional card number only. No real payment verification is attempted.
 * Spaces and hyphens are removed before the last four digits are retained by the order controller.
 */
export function parseCardNumber(raw) {
	const digits = raw.replace(/[\s-]/g, '');
	if (!digits) return fail('Enter a demo card number — fictional digits only.');
	if (!/^\d+$/.test(digits)) return fail('Card numbers are digits only (spaces are fine).');
	if (digits.length < 13 || digits.length > 19) {
		return fail('A card number is 13–19 digits. Make one up — this is a demo.');
	}
	return { ok: true, value: digits };
}

/** Normalizes one- or two-digit months and two- or four-digit years to MM/YY. */
export function parseExpiry(raw) {
	const value = raw.trim();
	const match = value.match(/^(\d{1,2})\s*[/-]?\s*(\d{2}|\d{4})$/);
	if (!match) return fail('Use MM/YY — for example 08/29.');

	const month = Number(match[1]);
	if (month < 1 || month > 12) return fail('The month has to be between 01 and 12.');

	const year = match[2].length === 2 ? Number(match[2]) : Number(match[2]) % 100;
	return {
		ok: true,
		value: `${String(month).padStart(2, '0')}/${String(year).padStart(2, '0')}`
	};
}

/** Accepts the three- and four-digit CVV shapes used by the demo form. */
export function parseCvv(raw) {
	const value = raw.trim();
	if (!/^\d{3,4}$/.test(value)) return fail('CVV is 3 or 4 digits.');
	return { ok: true, value };
}

/** Accepts a non-negative dollar amount with at most two decimal places. */
export function parseTip(raw) {
	const value = raw.trim().replace(/^\$/, '');
	if (!value) return fail('Enter a tip amount — 0 is fine too.');
	if (!/^\d+(\.\d{1,2})?$/.test(value)) return fail('Tips are a dollar amount, like 5 or 4.50.');

	const parsed = Number(value);
	if (!Number.isFinite(parsed) || parsed < 0) return fail('A tip can’t be negative.');
	if (parsed > 200) return fail('That’s a heroic tip — keep it under $200.');
	return { ok: true, value: parsed };
}
