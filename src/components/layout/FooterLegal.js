/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: The demo disclosure appears on every page so the static site      |
  | never implies real order processing.                                       |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

export default function render() {
	return `
		<div class="legal">
			<span> 
				Pizza Planet Order Chatbot. © 2026 Alysha Pursley. All Rights Reserved 
			</span>
			
			<span> 
				Demo site — no real orders, kitchen, or payments. Card fields are for demonstration only. 
			</span>
		</div>
	`;
}
