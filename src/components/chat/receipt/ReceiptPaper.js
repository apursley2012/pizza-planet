/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: ReceiptPaper owns the responsive torn-paper outline while receipt |
  | content stays in smaller components.                                       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="receipt-paper-frame" id="receipt-paper-frame">
			<svg class="receipt-outline" id="receipt-outline" aria-hidden="true">
				<path id="receipt-outline-path">
				</path>
			</svg>
			<div class="receipt-paper-content">
				<div data-component="src/components/chat/receipt/ReceiptHeader.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptSummary.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptPizzaList.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptTotals.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptCoupon.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptStatus.js">
				</div>
				<div data-component="src/components/chat/receipt/ReceiptFootnote.js">
				</div>
			</div>
		</div>
	`;
}

/** Keeps the decorative paper outline synchronized with content-driven receipt dimensions. */
export function init() {
	const frame = document.getElementById('receipt-paper-frame');
	const svg = document.getElementById('receipt-outline');
	const path = document.getElementById('receipt-outline-path');
	if (!frame || !svg || !path) return;

	// These values match the intended paper edge depth without hard-coding a fixed receipt width.
	const inset = 2;
	const toothDepth = 9;
	const toothWidth = 13;

	const drawReceipt = () => {
		const width = frame.offsetWidth;
		const height = frame.offsetHeight;
		if (width <= 0 || height <= 0) return;

		const left = inset;
		const right = width - inset;
		const innerWidth = right - left;
		let teeth = Math.max(8, Math.round(innerWidth / toothWidth));

		// An even tooth count makes the top and bottom edges finish on matching baselines.
		if (teeth % 2 !== 0) teeth += 1;

		const step = innerWidth / teeth;
		const topPoint = inset;
		const topBase = inset + toothDepth;
		const bottomPoint = height - inset;
		const bottomBase = height - inset - toothDepth;
		const segments = [`M ${left} ${topBase}`];

		for (let i = 1; i <= teeth; i += 1) {
			segments.push(`L ${left + i * step} ${i % 2 ? topPoint : topBase}`);
		}

		segments.push(`L ${right} ${bottomBase}`);

		for (let i = 1; i <= teeth; i += 1) {
			segments.push(`L ${right - i * step} ${i % 2 ? bottomPoint : bottomBase}`);
		}

		segments.push('Z');
		svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
		path.setAttribute('d', segments.join(' '));
	};

	drawReceipt();

	// ResizeObserver keeps the outline attached to dynamic receipt content; resize is the fallback.
	if ('ResizeObserver' in window) new ResizeObserver(drawReceipt).observe(frame);
	else window.addEventListener('resize', drawReceipt);
}
