/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Owns the browser ordering state machine, validation handoffs,     |
  | receipt updates, and transaction completion flow.                          |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { ORDER_STEPS } from '../types/order.js';
import { createMessageBubble } from '../components/chat/MessageBubble.js';
import {
	COUPON_VALUE,
	SIZE_PRICES,
	computeTotals,
	earnsCoupon,
	formatCurrency,
	lineTotalFor
} from '../utils/pricing.js';
import {
	parseCardNumber,
	parseCrust,
	parseCvv,
	parseExpiry,
	parseFulfillment,
	parseName,
	parsePayment,
	parseQuantity,
	parseSize,
	parseTip,
	parseToppings,
	parseYesNo,
	titleCase
} from '../utils/validation.js';

const INTRO_MESSAGES = [
	'Hello, my name is Alex, your virtual assistant. I will help you order a pizza!',
	'I am going to ask you a few questions. After typing an answer, press Enter.',
	'First up — what name should I put on the ticket?'
];

// Fresh factory objects prevent one ticket from sharing mutable pizza/order state with another.
const EMPTY_PIZZA = () => ({
	size: null,
	unitPrice: null,
	toppings: null,
	crust: null,
	quantity: null
});

const EMPTY_ORDER = () => ({
	customerName: '',
	pizzas: [],
	currentPizza: EMPTY_PIZZA(),
	addAnother: null,
	fulfillment: null,
	paymentMethod: null,
	card: null,
	tip: 0,
	couponEarned: false,
	orderStatus: null,
	complete: false
});

let idCounter = 0;

// Message and pizza IDs only need to be unique for the current browser session.
const nextId = (prefix) => `${prefix}-${idCounter += 1}`;
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// These names preserve the special welcome branch from the original chatbot requirements.
const isCreatorName = (name) =>
	['alysha pursley', 'professor quigley'].includes(name.trim().toLowerCase());

// Prices are read from the pricing module so prompt text and calculations stay in sync.
const sizePricePrompt = () =>
	`small (${formatCurrency(SIZE_PRICES.small)}), ` +
	`medium (${formatCurrency(SIZE_PRICES.medium)}), or ` +
	`large (${formatCurrency(SIZE_PRICES.large)})`;

/**
 * Provides the UI contract for each order step. Unknown steps intentionally fall back to the
 * completed state so a bad transition cannot leave the composer in an undefined interactive state.
 */
export function buildStepConfig(step, order) {
	if (!ORDER_STEPS.includes(step)) step = 'done';

	const configs = {
		name: {
			label: 'Your name',
			question: 'What name should go on the ticket?',
			placeholder: 'Type your answer…',
			chips: []
		},
		size: {
			label: 'Pizza size',
			question: 'Small, medium, or large?',
			placeholder: 'Type your answer…',
			chips: ['Small', 'Medium', 'Large']
		},
		toppings: {
			label: 'Toppings',
			question: 'Separate multiple toppings with spaces.',
			placeholder: 'Type your answer…',
			chips: ['Cheese', 'Pepperoni Mushroom', 'Sausage Onion Pepper'],
			helper: 'No extras? Enter “cheese”.'
		},
		crust: {
			label: 'Crust',
			question: 'Which crust?',
			placeholder: 'Type your answer…',
			chips: ['Thin', 'Thick', 'Pan', 'Deep dish']
		},
		quantity: {
			label: 'Quantity',
			question: 'How many of this pizza?',
			placeholder: 'Type your answer…',
			chips: ['1', '2', '3'],
			inputMode: 'numeric'
		},
		addAnother: {
			label: 'Another pizza?',
			question: 'Add another pizza to the order?',
			placeholder: 'yes or no',
			chips: ['Yes', 'No']
		},
		fulfillment: {
			label: 'Carry out or delivery',
			question: 'How are you getting this pizza?',
			placeholder: 'carry out or delivery',
			chips: ['Carry out', 'Delivery']
		},
		payment: {
			label: 'Payment',
			question: 'Cash or card?',
			placeholder: 'cash or card',
			chips: ['Cash', 'Card']
		},
		cardNumber: {
			label: 'Demo card number',
			question: 'Enter a fictional card number.',
			placeholder: '4242 4242 4242 4242',
			chips: ['4242 4242 4242 4242'],
			helper: 'Demonstration only — never enter a real card.',
			inputMode: 'numeric'
		},
		cardExpiry: {
			label: 'Expiration',
			question: 'Expiration date, MM/YY.',
			placeholder: 'MM/YY',
			chips: ['08/29'],
			helper: 'Demonstration only — fictional dates please.',
			inputMode: 'numeric'
		},
		cardCvv: {
			label: 'CVV',
			question: 'Three or four digits.',
			placeholder: '123',
			chips: ['123'],
			helper: 'Demonstration only — nothing is charged or stored.',
			inputMode: 'numeric'
		},
		tip: {
			label: 'Driver tip',
			question: 'Tip for your driver?',
			placeholder: '0.00',
			chips: ['0', '3', '5', '8'],
			inputMode: 'numeric'
		},
		anotherOrder: {
			label: 'Another order?',
			question: 'Would you like to place another order?',
			placeholder: 'yes or no',
			chips: ['Yes', 'No']
		}
	};

	return configs[step] || {
		label: 'Order complete',
		question: order.couponEarned
			? 'You earned a $10 coupon for next time.'
			: 'Thanks for ordering with us.',
		placeholder: '',
		chips: []
	};
}

/**
 * Freezes the business state used by the final receipt and status messages.
 */
function finishOrder(order) {
	const totals = computeTotals(order);
	const coupon = earnsCoupon(totals.total);
	const eta = order.fulfillment === 'delivery' ? '35–45 minutes' : '20–25 minutes';

	return {
		...order,
		couponEarned: coupon,
		complete: true,
		orderStatus:
			order.fulfillment === 'delivery'
				? `In the oven — out for delivery in about ${eta}.`
				: `In the oven — ready at the counter in about ${eta}.`
	};
}

/**
 * Builds the final conversational messages from the same totals shown on the receipt.
 */
function finishReplies(order) {
	const totals = computeTotals(order);
	const coupon = earnsCoupon(totals.total);
	const eta = order.fulfillment === 'delivery' ? '35–45 minutes' : '20–25 minutes';
	const replies = [
		{
			text:
				`Order confirmed, ${order.customerName}! Your total comes to ${formatCurrency(totals.total)} — ` +
				`${formatCurrency(totals.subtotal)} subtotal, ${formatCurrency(totals.tax)} sales tax, ` +
				`${formatCurrency(totals.deliveryFee)} delivery fee, and ${formatCurrency(totals.tip)} driver tip.`,
			tone: 'success'
		}
	];

	if (coupon) {
		replies.push({
			text:
				`Nice — you spent $50 or more, so you’ve earned a ${formatCurrency(COUPON_VALUE)} coupon ` +
				'toward your next order. (It doesn’t come off today’s total.)',
			tone: 'success'
		});
	}

	replies.push({
		text:
			`Status: your pizza is in the oven. ${
				order.fulfillment === 'delivery'
					? `Estimated delivery in ${eta}.`
					: `Estimated pickup in ${eta}.`
			} (Simulated — there’s no real kitchen behind this demo.)`
	});

	return replies;
}

/**
 * Connects the order state machine to the chat form and live receipt.
 * The page owns presentation; parsing and pricing stay in their shared utility modules.
 */
export function initializeOrderChat() {
	const thread = document.querySelector('#thread');
	const form = document.querySelector('#answer-form');
	const input = document.querySelector('#answer');
	const label = document.querySelector('#answer-label');
	const chips = document.querySelector('#chips');
	const status = document.querySelector('#step-status');
	const feedback = document.querySelector('#answer-feedback');

	// The controller exits quietly on pages that do not contain the order interface.
	if (!thread || !form || !input || !label || !chips || !status || !feedback) return;

	let order = EMPTY_ORDER();
	let step = 'name';
	const submitButton = form.querySelector('button[type="submit"]');

	function setText(selector, value) {
		const node = document.querySelector(selector);
		if (node) node.textContent = value;
	}

	// textContent keeps customer-entered values out of HTML parsing paths.
	function bubble(text, role = 'bot', tone = '') {
		const element = createMessageBubble(text, role, tone);
		element.dataset.messageId = nextId(role);
		thread.appendChild(element);
		thread.scrollTop = thread.scrollHeight;
	}

	/**
	 * Re-renders every receipt field from current state instead of maintaining a second copy
	 * of calculated values inside the DOM.
	 */
	function updateReceipt() {
		const totals = computeTotals(order);

		setText('#r-name', order.customerName || '—');
		setText('#r-method', order.fulfillment ? titleCase(order.fulfillment) : '—');
		setText('#r-payment', order.paymentMethod ? titleCase(order.paymentMethod) : '—');
		setText('#r-subtotal', formatCurrency(totals.subtotal));
		setText('#r-tax', formatCurrency(totals.tax));
		setText('#r-delivery', formatCurrency(totals.deliveryFee));
		setText('#r-tip', formatCurrency(totals.tip));
		setText('#r-total', formatCurrency(totals.total));

		const list = document.querySelector('#receipt-pizzas');
		if (list) {
			list.replaceChildren();

			if (!order.pizzas.length) {
				const empty = document.createElement('p');
				empty.className = 'empty';
				empty.textContent =
					'Nothing on the ticket yet. Answer a few questions and your pizzas will show up here.';
				list.appendChild(empty);
			} else {
				order.pizzas.forEach((pizza, index) => {
					const row = document.createElement('div');
					row.className = 'receipt-pizza';

					const details = document.createElement('div');
					const heading = document.createElement('strong');
					heading.textContent = `Pizza ${index + 1}`;

					const detail = document.createElement('div');
					detail.className = 'receipt-pizza-detail';
					detail.textContent =
						`${pizza.quantity} × ${titleCase(pizza.size)} · ${titleCase(pizza.crust)} · ` +
						pizza.toppings.map(titleCase).join(', ');

					details.append(heading, detail);

					const amount = document.createElement('strong');
					amount.textContent = formatCurrency(pizza.lineTotal);

					row.append(details, amount);
					list.appendChild(row);
				});
			}
		}

		const coupon = document.querySelector('[data-receipt-coupon]');
		if (coupon) {
			coupon.hidden = !order.couponEarned;
			coupon.textContent = order.couponEarned
				? `$${COUPON_VALUE.toFixed(2)} coupon earned for next time.`
				: '';
		}

		const orderStatus = document.querySelector('[data-receipt-status]');
		if (orderStatus) {
			orderStatus.hidden = !order.orderStatus;
			orderStatus.textContent = order.orderStatus || '';
		}
	}

	/**
	 * Rebuilds step-specific controls because each step has different valid shortcuts and input modes.
	 */
	function renderStep() {
		const config = buildStepConfig(step, order);

		label.textContent = config.question;
		input.placeholder = config.placeholder;
		input.inputMode = config.inputMode || 'text';
		status.textContent = step === 'done' ? 'Ticket closed' : `Step · ${config.label}`;

		chips.replaceChildren();
		config.chips.forEach((value) => {
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'chip';
			button.textContent = value;
			button.addEventListener('click', () => submit(value));
			chips.appendChild(button);
		});

		feedback.textContent = config.helper || '';
		feedback.classList.remove('error');
		input.setAttribute('aria-invalid', 'false');

		const done = step === 'done';
		input.hidden = done;
		if (submitButton) submitButton.hidden = done;

		const complete = document.querySelector('[data-answer-complete]');
		if (complete) {
			complete.hidden = !done;
			const question = complete.querySelector('[data-complete-question]');
			if (question) question.textContent = config.question;
		}

		form.hidden = done;
	}

	// Rejected input stays in the transcript so the customer can see what failed without losing context.
	function reject(raw, message) {
		bubble(raw.trim() || '—', 'customer');
		bubble(message, 'bot', 'error');
		feedback.textContent = message;
		feedback.classList.add('error');
		input.setAttribute('aria-invalid', 'true');
	}

	// State changes happen before receipt/prompt rendering so every visible region reflects one order snapshot.
	function accept(echo, replies, nextStep, nextOrder) {
		bubble(echo, 'user');
		replies.forEach((reply) => bubble(reply.text, 'bot', reply.tone || ''));
		order = nextOrder;
		step = nextStep;
		feedback.textContent = '';
		feedback.classList.remove('error');
		input.setAttribute('aria-invalid', 'false');
		updateReceipt();
		renderStep();
	}

	/**
	 * Keeps the original countdown idea visible without making a static demo wait three real minutes.
	 */
	async function completeOrder(echo, prefixReplies, finished) {
		bubble(echo, 'user');
		prefixReplies.forEach((reply) => bubble(reply.text, 'bot', reply.tone || ''));

		order = finished;
		step = 'done';
		feedback.textContent = '';
		feedback.classList.remove('error');
		updateReceipt();
		renderStep();

		for (let count = 5; count >= 1; count -= 1) {
			bubble(`Order processing: ${count}…`, 'bot');
			await delay(250);
		}

		finishReplies(order).forEach((reply) => bubble(reply.text, 'bot', reply.tone || ''));

		// totalCost is shown separately because the original requirement defines it as
		// pizza subtotal plus delivery fee, while the demo also displays tax and tip.
		const totals = computeTotals(order);
		bubble(`Pizza subtotal plus delivery fee: ${formatCurrency(totals.totalCost)}.`, 'bot');
		bubble('Would you like to place another order? (yes / no)', 'bot');

		step = 'anotherOrder';
		renderStep();
		input.focus();
	}

	async function submit(raw) {
		const current = order;
		let result;

		switch (step) {
			case 'name': {
				result = parseName(raw);
				if (!result.ok) return reject(raw, result.error);

				const welcome = isCreatorName(result.value)
					? `My creator, ${result.value}. Pleasure to serve you! What size — ${sizePricePrompt()}?`
					: `Great to meet you, ${result.value}! Let’s build your first pizza. What size — ${sizePricePrompt()}?`;

				return accept(result.value, [{ text: welcome }], 'size', {
					...current,
					customerName: result.value
				});
			}

			case 'size': {
				result = parseSize(raw);
				if (!result.ok) return reject(raw, result.error);

				const unitPrice = SIZE_PRICES[result.value];
				return accept(
					titleCase(result.value),
					[
						{
							text: `${titleCase(result.value)} it is — ${formatCurrency(unitPrice)}.`,
							tone: 'success'
						},
						{
							text:
								'Enter any toppings you want on your pizza. If you would like more than one, separate them with spaces:'
						}
					],
					'toppings',
					{
						...current,
						currentPizza: {
							...current.currentPizza,
							size: result.value,
							unitPrice
						}
					}
				);
			}

			case 'toppings': {
				result = parseToppings(raw);
				if (!result.ok) return reject(raw, result.error);

				return accept(
					result.value.map(titleCase).join(' '),
					[{ text: 'Good call. What crust — thin, thick, pan, or deep dish?' }],
					'crust',
					{
						...current,
						currentPizza: { ...current.currentPizza, toppings: result.value }
					}
				);
			}

			case 'crust': {
				result = parseCrust(raw);
				if (!result.ok) return reject(raw, result.error);

				return accept(
					titleCase(result.value),
					[{ text: 'How many of this pizza would you like?' }],
					'quantity',
					{
						...current,
						currentPizza: { ...current.currentPizza, crust: result.value }
					}
				);
			}

			case 'quantity': {
				result = parseQuantity(raw);
				if (!result.ok) return reject(raw, result.error);

				const pizza = current.currentPizza;
				if (!pizza.size || pizza.unitPrice === null || !pizza.toppings || !pizza.crust) {
					return reject(raw, 'Something’s missing on this pizza — let’s start it over.');
				}

				const lineTotal = lineTotalFor(pizza.unitPrice, result.value);
				const nextOrder = {
					...current,
					pizzas: [
						...current.pizzas,
						{
							id: nextId('pizza'),
							size: pizza.size,
							unitPrice: pizza.unitPrice,
							toppings: pizza.toppings,
							crust: pizza.crust,
							quantity: result.value,
							lineTotal
						}
					],
					currentPizza: EMPTY_PIZZA(),
					addAnother: null
				};

				return accept(
					String(result.value),
					[
						{
							text:
								`Added to your order: ${result.value} × ${titleCase(pizza.size)} ` +
								`${pizza.toppings.map(titleCase).join(' ')} on ${titleCase(pizza.crust)} crust — ` +
								`${formatCurrency(lineTotal)}.`,
							tone: 'success'
						},
						{ text: 'Would you like to add another pizza? (yes / no)' }
					],
					'addAnother',
					nextOrder
				);
			}

			case 'addAnother': {
				result = parseYesNo(raw);
				if (!result.ok) return reject(raw, result.error);

				if (result.value === 'yes') {
					return accept(
						'Yes',
						[{ text: `Let’s build another one. What size — ${sizePricePrompt()}?` }],
						'size',
						{ ...current, addAnother: 'yes', currentPizza: EMPTY_PIZZA() }
					);
				}

				return accept(
					'No',
					[{ text: 'Got it. Is this order carry out or delivery?' }],
					'fulfillment',
					{ ...current, addAnother: 'no' }
				);
			}

			case 'fulfillment': {
				result = parseFulfillment(raw);
				if (!result.ok) return reject(raw, result.error);

				return accept(
					titleCase(result.value),
					[
						{
							text:
								result.value === 'delivery'
									? 'Delivery it is — that adds a $5.00 delivery fee.'
									: 'Carry out — no delivery fee.',
							tone: 'success'
						},
						{ text: 'Will you be paying with cash or card?' }
					],
					'payment',
					{ ...current, fulfillment: result.value }
				);
			}

			case 'payment': {
				result = parsePayment(raw);
				if (!result.ok) return reject(raw, result.error);

				if (result.value === 'card') {
					return accept(
						'Card',
						[
							{
								text:
									'Heads up: these card fields are for demonstration only. No payment is processed ' +
									'— please enter completely fictional information.'
							},
							{ text: 'What’s the demo card number?' }
						],
						'cardNumber',
						{ ...current, paymentMethod: 'card' }
					);
				}

				const next = { ...current, paymentMethod: 'cash' };
				if (current.fulfillment === 'delivery') {
					return accept(
						'Cash',
						[
							{ text: 'Cash on arrival — perfect.', tone: 'success' },
							{ text: 'Would you like to add a driver tip? Enter a dollar amount (0 for none).' }
						],
						'tip',
						next
					);
				}

				const finished = finishOrder(next);
				return completeOrder(
					'Cash',
					[{ text: 'Cash at the counter — perfect.', tone: 'success' }],
					finished
				);
			}

			case 'cardNumber': {
				result = parseCardNumber(raw);
				if (!result.ok) return reject(raw, result.error);

				// Only the last four digits are retained because the card flow is a visual demo.
				const last4 = result.value.slice(-4);
				return accept(
					`•••• •••• •••• ${last4}`,
					[{ text: 'And the expiration date? (MM/YY)' }],
					'cardExpiry',
					{ ...current, card: { last4 } }
				);
			}

			case 'cardExpiry': {
				result = parseExpiry(raw);
				if (!result.ok) return reject(raw, result.error);

				return accept(
					result.value,
					[{ text: 'Last one — the CVV on the back?' }],
					'cardCvv',
					{
						...current,
						card: { last4: current.card?.last4 ?? '' }
					}
				);
			}

			case 'cardCvv': {
				result = parseCvv(raw);
				if (!result.ok) return reject(raw, result.error);

				const accepted = {
					text:
						`Demo card ending ${current.card?.last4 ?? '0000'} accepted. ` +
						'Nothing was charged — we only kept the last four digits.',
					tone: 'success'
				};

				if (current.fulfillment === 'delivery') {
					return accept(
						'•'.repeat(result.value.length),
						[
							accepted,
							{ text: 'Would you like to add a driver tip? Enter a dollar amount (0 for none).' }
						],
						'tip',
						current
					);
				}

				const finished = finishOrder(current);
				return completeOrder('•'.repeat(result.value.length), [accepted], finished);
			}

			case 'tip': {
				result = parseTip(raw);
				if (!result.ok) return reject(raw, result.error);

				const tipped = { ...current, tip: result.value };
				const replies = [];
				if (result.value > 0) {
					replies.push({
						text: `${formatCurrency(result.value)} for the driver — they’ll appreciate it.`,
						tone: 'success'
					});
				}

				return completeOrder(formatCurrency(result.value), replies, finishOrder(tipped));
			}

			case 'anotherOrder': {
				result = parseYesNo(raw);
				if (!result.ok) return reject(raw, result.error);

				if (result.value === 'yes') {
					reset();
					return;
				}

				return accept(
					'No',
					[{ text: 'Thanks for ordering with Pizza Planet.' }],
					'done',
					{ ...current, complete: true }
				);
			}

			default:
				return;
		}
	}

	function reset() {
		order = EMPTY_ORDER();
		step = 'name';
		thread.replaceChildren();
		feedback.textContent = '';
		input.setAttribute('aria-invalid', 'false');
		form.hidden = false;
		INTRO_MESSAGES.forEach((message) => bubble(message));
		updateReceipt();
		renderStep();
		input.focus();
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		submit(input.value);
		input.value = '';
	});

	document.querySelector('#reset')?.addEventListener('click', reset);
	reset();
}
