/*
  +----------------------------------------------------------------------------+
  | Pizza Planet Ordering Chatbot                                              |
  | Purpose: Browser entry point kept intentionally small so application setup |
  | stays in App.js.                                                           |
  | Author: Alysha Pursley                                                     |
  | Copyright (c) 2026 Alysha Pursley.                                         |
  +----------------------------------------------------------------------------+
*/

import { startApp } from './App.js';

startApp().catch((error) => {
	// Keep the original visible fallback so a failed module load does not leave a blank page.
	console.error(error);
	const root = document.querySelector('#app');
	if (root) root.textContent = 'The page could not be loaded.';
});
