/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The ordered step list is the single whitelist used to guard       |
  | chatbot state transitions.                                                 |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export const ORDER_STEPS = Object.freeze([
	'name',
	'size',
	'toppings',
	'crust',
	'quantity',
	'addAnother',
	'fulfillment',
	'payment',
	'cardNumber',
	'cardExpiry',
	'cardCvv',
	'tip',
	'anotherOrder',
	'done'
]);
