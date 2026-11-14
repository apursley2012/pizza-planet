<!--
File: README.md
Document Title: Pizza Planet
Author: Alysha Pursley
Date: August 2026
-->
 
<div align="center">
 
<img src="./public/pizza-planet-logo.png" alt="Pizza Planet Logo" width="65%" height="auto">
 
<h1>Pizza Planet: A Pizza Ordering Chatbot Demo 🍕</h1>
 
<p><a href="https://github.com/apursley2012/pizza-planet/stargazers"><img src="https://img.shields.io/github/stars/apursley2012/pizza-planet?style=for-the-badge&amp;label=Stars" alt="Stars"></a> <a href="https://github.com/apursley2012/pizza-planet/forks"><img src="https://img.shields.io/github/forks/apursley2012/pizza-planet?style=for-the-badge&amp;label=Forks" alt="Forks"></a> <a href="https://github.com/apursley2012/pizza-planet/issues"><img src="https://img.shields.io/github/issues/apursley2012/pizza-planet?style=for-the-badge&amp;label=Issues" alt="Issues"></a> <a href="https://github.com/apursley2012/pizza-planet/commits"><img src="https://img.shields.io/github/last-commit/apursley2012/pizza-planet?style=for-the-badge&amp;label=Last%20Commit" alt="Last Commit"></a> <a href="https://github.com/apursley2012/pizza-planet"><img src="https://img.shields.io/github/repo-size/apursley2012/pizza-planet?style=for-the-badge&amp;label=Repo%20Size" alt="Repo Size"></a> <a href="https://github.com/apursley2012/pizza-planet"><img src="https://img.shields.io/github/languages/top/apursley2012/pizza-planet?style=for-the-badge&amp;label=Top%20Language" alt="Top Language"></a> <a href="https://github.com/apursley2012/pizza-planet"><img src="https://img.shields.io/github/languages/count/apursley2012/pizza-planet?style=for-the-badge&amp;label=Languages" alt="Languages"></a> <a href="https://github.com/apursley2012/pizza-planet/graphs/contributors"><img src="https://img.shields.io/github/contributors/apursley2012/pizza-planet?style=for-the-badge&amp;label=Contributors" alt="Contributors"></a> <a href="https://github.com/apursley2012/pizza-planet/graphs/commit-activity"><img src="https://img.shields.io/github/commit-activity/m/apursley2012/pizza-planet?style=for-the-badge&amp;label=Monthly%20Commits" alt="Monthly Commits"></a> </p>
 
<p><a href="https://apursley2012.github.io/pizza-planet/"><img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-222222?style=for-the-badge&amp;logo=githubpages&amp;logoColor=white" alt="Live Demo"></a> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript"></p>
 
<p><strong>A conversational pizza-ordering application that guides customers through an order one decision at a time while maintaining a live receipt with pizzas, quantities, tax, delivery fees, payment choices, tips, and the final total.</strong></p>
 
<p><a href="https://apursley2012.github.io/pizza-planet/">Open the live project</a> · <a href="https://github.com/apursley2012/pizza-planet">View the repository</a> · <a href="https://github.com/apursley2012/pizza-planet/issues/new/choose">Report an issue or request an addition</a></p>
 
</div>
 
---
 
## Table of Contents 📖
 
*   [Project Overview 🔎](#project-overview)
   *   [Purpose 🎯](#purpose)
   *   [Design Style and Inspiration 🎨](#design-style-and-inspiration)
   *   [Main Color Palette 🌈](#main-color-palette)
   *   [Preview Screenshots 🖼️](#preview-screenshots)
*   [Key Features ✨](#key-features)
*   [Tech Stack 🛠️](#tech-stack)
*   [Live Demo 🚀](#live-demo)
*   [Installation 📦](#installation)
   *   [Local Use 💻](#local-use)
   *   [GitHub Pages Deployment 🌐](#github-pages-deployment)
*   [Usage 🧭](#usage)
*   [Project Structure 🗂️](#project-structure)
   *   [Pages Included 📄](#pages-included)
   *   [Core Files and Architecture 🧩](#core-files-and-architecture)
   *   [File and Folder Structure 🌳](#file-and-folder-structure)
*   [Ordering Model 🧮](#ordering-model)
*   [Customization Guide 🎨](#customization-guide)
*   [Accessibility and Browser Compatibility ♿](#accessibility-and-browser-compatibility)
*   [Repository Relationship 🔗](#repository-relationship)
*   [Project Scope and Limitations 📌](#project-scope-and-limitations)
*   [Possible Future Enhancements 💡](#possible-future-enhancements)
*   [Contributing 🤝](#contributing)
   *   [Reporting Issues 🐛](#reporting-issues)
   *   [Requesting Additions 📝](#requesting-additions)
*   [License 📜](#license)
*   [Important Links 🔗](#important-links)
*   [Attribution ℹ️](#attribution)
 
---
 
<a id="project-overview"></a>
 
<details open>
<summary><h2><strong>Project Overview 🔎</strong></h2></summary>
 
**Pizza Planet** is a browser-based ordering application that replaces a long pizza-order form with a guided conversation. The customer answers one question at a time, while the application records each response, validates it, updates the order state, recalculates totals, and reflects the result immediately in a receipt panel beside the chat.
 
The ordering workflow is complete enough to behave like a small restaurant checkout rather than a scripted demo. A customer can choose pizza size, toppings, crust, quantity, add multiple different pizzas, select carryout or delivery, choose cash or card, enter demo card information, and optionally add a driver tip for delivery. The receipt keeps the customer name, fulfillment method, payment method, itemized pizzas, subtotal, tax, delivery fee, tip, and total visible throughout the process.
 
The current website also includes separate Menu, Our Story, and Visit pages. These present the fictional restaurant's menu, history, and contact information; they are not the case study, article, or source map pages described in an earlier version of this README.
 
</details>
 
---
 
<a id="purpose"></a>
 
<details open>
<summary><h3><strong>Purpose 🎯</strong></h3></summary>
 
I built this pizza ordering chatbot to make a multi-step ordering process easier to follow without forcing the customer to interpret a dense form all at once. Pizza ordering contains several dependent decisions: the selected size changes price, quantity changes line totals, delivery changes the final fee and whether a driver tip is relevant, and payment method changes which questions need to be asked. A conversational flow lets the application reveal only the next decision that matters.
 
The live receipt is equally important to the purpose of the project. I wanted every answer to have a visible consequence, so the application updates the item list and financial totals as the order develops. This makes the experience more transparent and makes the underlying JavaScript state easier to understand and test.
 
The project also preserves the personality of the original assistant while presenting it as a practical browser application. The chatbot confirms answers, guides checkout, displays simulated completion information, and applies the existing coupon-eligibility rule.
 
</details>
 
<a id="design-style-and-inspiration"></a>
 
<details open>
<summary><h3><strong>Design Style and Inspiration 🎨</strong></h3></summary>
 
The design is built around a neighborhood-pizzeria counter rather than a generic chatbot interface. The current site uses pizza-red and cheese-yellow accents, cool neutral backgrounds, bold dark borders, rounded panels, and offset shadows throughout its pages.
 
The desktop ordering layout separates conversation from confirmation. The chat window is the active workspace, while the receipt remains alongside it so customers can review the developing order. Shared navigation, typography, and footer styling connect the Order, Menu, Our Story, Visit, and 404 pages.
 
On smaller screens, the layout adapts to narrower widths and the navigation changes to its mobile presentation.
 
</details>
 
<a id="main-color-palette"></a>
 
<details open>
<summary><h3><strong>Main Color Palette 🌈</strong></h3></summary>
 
The palette below comes directly from `src/styles/shared.css`. I included the named project color tokens and the interface jobs they perform. Unlike the old `css/styles.css` palette, these values reflect the current project.
 
| CSS Token | Hex | Use in the Interface |
| --- | --- | --- |
| `--ink-black` | `#11161C` | Main text, outlines, borders, and offset shadows |
| `--slate-gray` | `#5E6B78` | Secondary text and muted interface copy |
| `--fog-gray` | `#AEB9C6` | Neutral borders and subdued accents |
| `--mist-gray` | `#C3CCD6` | Soft neutral separators and backgrounds |
| `--haze-gray` | `#AEB9C6` | Alternate muted gray accents |
| `--ice-gray` | `#F4F7FA` | Pale page and section backgrounds |
| `--pure-white` | `#FFFFFF` | White panels, controls, and foreground surfaces |
| `--cool-white` | `#F8FAFC` | Light card and section surfaces |
| `--soft-gray` | `#EEF2F6` | Subtle gray panel and navigation backgrounds |
| `--brand-hero-gray` | `#DCE3EB` | Muted gray background for branded hero treatments |
| `--pizza-yellow` | `#FFD166` | Yellow call-to-action buttons and highlighted surfaces |
| `--pizza-red` | `#D2451F` | Red brand accents, prominent messages, and actions |
| `--cherry-red` | `#C02739` | Deeper red accents and emphasis |
| `--herb-green` | `#4F7A3F` | Green success or positive-status accents |
| `--receipt-shadow-gray` | `#48515B` | Receipt shadow and depth treatments |
| `--footer-rule-gray` | `#3A434E` | Footer rules and dividers |
 
 
</details>
 
<a id="preview-screenshots"></a>
 
<details open>
<summary><h3><strong>Preview Screenshots 🖼️</strong></h3></summary>
 
I have not linked to screenshots that are not verified in the current project. Screenshots can be added once actual captures of the finished site are available.
 
</details>
 
<a id="key-features"></a>
 
<details open>
<summary><h2><strong>Key Features ✨</strong></h2></summary>
 
- Guided chatbot with individual prompts, response validation, and answer suggestions.
- Pizza size, toppings, crust, and quantity selection, with an option to add more pizzas.
- Carryout and delivery branches, and cash or demo-card checkout paths.
- Live itemized receipt with subtotal, tax, delivery fee, optional tip, and final total.
- A simulated completion/status experience and next-order coupon eligibility.
- Separate menu, fictional restaurant history, visit/contact, and branded 404 pages.
- Shared responsive navigation and reusable components across the main pages.
 
</details>
 
---
 
<a id="tech-stack"></a>
 
<details open>
<summary><h2><strong>Tech Stack 🛠️</strong></h2></summary>
 
| Technology | What I Use It For |
| --- | --- |
| HTML5 | Entry and page documents, metadata, and accessible content containers |
| CSS3 | Shared design tokens, component styling, page layouts, responsive breakpoints, and focus states |
| Native JavaScript modules | Rendering page components, controlling chat steps, validating answers, and calculating totals |
| GitHub Pages | Hosting the static site without a build system or server-side ordering backend |
| Google Fonts | Loading Nunito and Alfa Slab One at runtime; these are not locally bundled font files |
 
</details>
 
---
 
<a id="live-demo"></a>
 
<details open>
<summary><h2><strong>Live Demo 🚀</strong></h2></summary>
 
[https://apursley2012.github.io/pizza-planet/](https://apursley2012.github.io/pizza-planet/)
 
</details>
 
---
 
<a id="installation"></a>
 
<details open>
<summary><h2><strong>Installation 📦</strong></h2></summary>
 
Pizza Planet is a static browser project, so it does not require a backend, database, package installation, or build command for the current version. Its JavaScript uses native ES modules, so I run the site through a local HTTP server rather than opening HTML files directly through `file://`.
 
</details>
 
---
 
<a id="local-use"></a>
 
<details open>
<summary><h3><strong>Local Use 💻</strong></h3></summary>
 
1. Clone or download the repository.
2. Keep `index.html`, `404.html`, `pages/`, `public/`, and `src/` in their existing relative locations.
3. Serve the repository root with a local HTTP server (for example, `python -m http.server 8000`).
4. Open `http://localhost:8000/` in a modern browser.
5. Test the complete order path, including multiple pizzas, carryout and delivery, cash and demo card, invalid input, tips, reset behavior, and mobile layout before publishing changes.
 
</details>
 
<a id="github-pages-deployment"></a>
 
<details open>
<summary><h3><strong>GitHub Pages Deployment 🌐</strong></h3></summary>
 
The current application is compatible with GitHub Pages because its ordering logic runs entirely in the browser. Keep `index.html` at the repository root and preserve the relative asset paths, then publish from **Settings → Pages → Deploy from a branch → main → / (root)**. The root page redirects visitors to `pages/order.html`.
 
</details>
 
<a id="usage"></a>
 
<details open>
<summary><h2><strong>Usage 🧭</strong></h2></summary>
 
I start on the Order page, enter a customer name, and answer the chatbot's questions about pizza size, toppings, crust, and quantity. I can add another pizza, select carryout or delivery, and choose cash or the demonstration card flow. The receipt updates as I proceed. I can restart the ordering process to clear the current state. The other navigation links let visitors explore the menu, fictional history, and contact/visit information.
 
</details>
 
---
 
<a id="project-structure"></a>
 
<details open>
<summary><h2><strong>Project Structure 🗂️</strong></h2></summary>
 
The repository separates the working order flow into page-level components, reusable interface components, controllers, data, utilities, and styles. The shared application shell keeps the fictional restaurant's navigation and branding consistent across its pages.
 
</details>
 
---
 
<a id="pages-included"></a>
 
<details open>
<summary><h3><strong>Pages Included 📄</strong></h3></summary>
 
| Page / File | What It Actually Displays or Does |
| --- | --- |
| `index.html` | Root entry point that redirects visitors to the Order page |
| `pages/order.html` | Ordering page document that loads the chat, pizza-order introduction, and live receipt |
| `pages/menu.html` | Menu page showing size prices, crust choices, toppings, and other food/drink categories |
| `pages/story.html` | Fictional pizzeria history, milestones, and story artwork |
| `pages/visit.html` | Fictional location, contact information, opening hours, and visit/delivery messaging |
| `404.html` | Dedicated missing-page experience with matching branding, navigation, and a link back to ordering |
 
</details>
 
<a id="core-files-and-architecture"></a>
 
<details open>
<summary><h3><strong>Core Files and Architecture 🧩</strong></h3></summary>
 
| File or Folder | Specific Responsibility |
| --- | --- |
| `src/index.js` | Starts the application and shows a fallback message if loading fails |
| `src/App.js` | Selects the requested page, builds the shared header/footer shell, and loads nested components |
| `src/pages/` | Provides the four page-level renderers and page-specific initialization |
| `src/components/layout/` | Builds the site header, navigation, mobile menu, contact link, footer, and business details |
| `src/components/chat/` | Renders conversation messages, answer controls, validation feedback, and receipt sections |
| `src/components/order/` | Assembles the ordering hero, chat panel, demonstration notice, and receipt column |
| `src/components/menu/` | Renders pizza sizes, crusts, toppings, sides, and menu calls to action |
| `src/components/story/` | Renders the fictional timeline, milestones, imagery, and story call to action |
| `src/components/visit/` | Renders address, hours, contact, delivery information, and visit call to action |
| `src/controllers/orderChatController.js` | Maintains current order state, advances the conversation, handles branches, and coordinates receipt updates |
| `src/types/order.js` | Defines the ordered set of chatbot steps, including optional checkout branches |
| `src/utils/validation.js` | Parses and validates names, sizes, toppings, crusts, quantities, payment details, tips, and yes/no answers |
| `src/utils/pricing.js` | Stores pizza prices, tax/fee constants, rounding helpers, totals, and coupon eligibility rules |
| `src/data/menu.js` | Supplies displayed pizza sizes, crust descriptions, toppings, sides, drinks, and sweets |
| `src/data/site.js` | Supplies the fictional shop identity, contact details, hours, history milestones, and image paths |
| `src/data/navigation.js` | Supplies shared navigation destinations and labels |
| `src/styles/shared.css` | Defines global colors, typography, controls, header/footer styling, and accessibility helpers |
| `src/styles/order.css` | Styles the ordering hero, chat interface, receipt, and order-page layout |
| `src/styles/menu.css` | Styles menu sections, item cards, and pricing presentation |
| `src/styles/story.css` | Styles the story timeline and related artwork/content |
| `src/styles/visit.css` | Styles location, hours, and contact sections |
| `src/styles/not-found.css` | Styles the branded 404 content and its mobile navigation treatment |
| `src/styles/brand-fonts.css` | Defines the locally loaded brand typeface and its wordmark sizing |
| `public/` | Contains the logo, pizza/shop photography, and locally bundled brand font used by the site |
| `LICENSE` | Sets the proprietary terms for my original project contributions |
| `THIRD_PARTY_NOTICES.md` | Documents identified third-party materials and their applicable license notices |
 
</details>
 
<a id="file-and-folder-structure"></a>
 
<details open>
<summary><h3><strong>File and Folder Structure 🌳</strong></h3></summary>
 
```text
pizza-planet/
├── index.html
├── 404.html
├── pages/
│   ├── order.html
│   ├── menu.html
│   ├── story.html
│   └── visit.html
├── public/
│   ├── fonts/
│   │   └── brand-name.ttf
│   └── [logo and restaurant images]
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   ├── controllers/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── README.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```
 
</details>
 
<a id="ordering-model"></a>
 
<details open>
<summary><h2><strong>Ordering Model 🧮</strong></h2></summary>
 
The pricing constants are defined in `src/utils/pricing.js`. The Menu page imports the same size prices that the order flow uses, reducing the chance of displaying a different amount from the receipt.
 
| Pricing Rule | Implemented Behavior |
| --- | --- |
| Small pizza | $8.99 base price |
| Medium pizza | $13.99 base price |
| Large pizza | $17.99 base price |
| Tax | 10% of the pizza subtotal, rounded to cents |
| Carryout | No fulfillment fee |
| Delivery | $5.00 fulfillment fee |
| Tip | Optional amount added to the checkout total when applicable |
| Final total | Pizza subtotal + tax + fulfillment fee + tip |
| Coupon | $10 future-order coupon when the qualifying total reaches $50; not an immediate discount |
 
The controller builds the current order, uses dedicated validation functions for each response, and computes receipt totals through the shared pricing utilities. The card path is a demonstration of validation and branching, **not** a real payment integration. The menu also lists additional food and drinks; listing those items does not mean the current chatbot supports ordering them.
 
</details>
 
---
 
<a id="customization-guide"></a>
 
<details open>
<summary><h2><strong>Customization Guide 🎨</strong></h2></summary>
 
I update shared colors and global controls in `src/styles/shared.css`, then adjust individual pages in their corresponding stylesheets. Menu descriptions and displayed options belong in `src/data/menu.js`; shop details and story milestones belong in `src/data/site.js`. Pizza prices, tax, delivery fees, and coupon thresholds belong in `src/utils/pricing.js`. Chat prompts and transitions are coordinated in `src/controllers/orderChatController.js`, while input validation is isolated in `src/utils/validation.js`. Changes to any price or ordering branch should be checked against the receipt and displayed menu.
 
</details>
 
---
 
<a id="accessibility-and-browser-compatibility"></a>
 
<details open>
<summary><h2><strong>Accessibility and Browser Compatibility ♿</strong></h2></summary>
 
The site uses semantic page structure, native form controls, focus-visible styles, a keyboard skip link, and reduced-motion handling. Responsive CSS adapts the layout and navigation to narrower screens. I designed it for current browsers that support native JavaScript modules. These implementation choices are not a claim that every device, browser version, or assistive-technology combination has passed a formal accessibility audit.
 
</details>
 
---
 
<a id="repository-relationship"></a>
 
<details open>
<summary><h2><strong>Repository Relationship 🔗</strong></h2></summary>
 
The Order, Menu, Our Story, Visit, and 404 pages are parts of the same Pizza Planet website. They share the project's branding, layout components, styles, and supporting data. The ordering interface is the interactive demonstration; the other pages provide the surrounding fictional restaurant experience.
 
</details>
 
---
 
<a id="project-scope-and-limitations"></a>
 
<details open>
<summary><h2><strong>Project Scope and Limitations 📌</strong></h2></summary>
 
Pizza Planet is a **fictional portfolio demonstration**. The restaurant, street address, phone number, hours, and history are presentation content, not a real operating business. No orders reach a kitchen, no payment is charged, and simulated order updates do not reflect real preparation or delivery. Visitors should not enter real card details or sensitive personal information. The locally bundled font and images still require independent provenance and redistribution-rights verification before public publication.
 
</details>
 
---
 
<a id="possible-future-enhancements"></a>
 
<details open>
<summary><h2><strong>Possible Future Enhancements 💡</strong></h2></summary>
 
- Add a real menu/cart model for toppings, sides, drinks, and their price modifiers.
- Add persistent carts and automated tests for validation and pricing branches.
- Add an authenticated backend and compliant payment processing if I ever turn the demonstration into a real service.
- Add verified screenshots once I have captured the finished pages.
 
</details>
 
---
 
<a id="contributing"></a>
 
<details open>
<summary><h2><strong>Contributing 🤝</strong></h2></summary>
 
I welcome practical improvement suggestions and bug reports when they preserve the conversational ordering model and the project's existing visual identity. This is a proprietary project, so suggestions do not grant permission to reuse or redistribute my original code or assets.
 
</details>
 
---
 
<a id="reporting-issues"></a>
 
<details open>
<summary><h3><strong>Reporting Issues 🐛</strong></h3></summary>
 
Include the ordering step involved, the value entered, what you expected, what happened instead, and browser/device information when relevant.
 
</details>
 
<a id="requesting-additions"></a>
 
<details open>
<summary><h3><strong>Requesting Additions 📝</strong></h3></summary>
 
Feature requests should explain how the addition improves the pizza-ordering workflow rather than adding unrelated application features.
 
</details>
 
<a id="license"></a>
 
<details open>
<summary><h2><strong>License 📜</strong></h2></summary>
 
Copyright © 2026 Alysha Pursley. All rights reserved in my original contributions. This project is proprietary; see [`LICENSE`](./LICENSE) for the applicable terms. Third-party materials remain subject to their own licenses and notices in [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md).
 
</details>
 
---
 
<a id="important-links"></a>
 
<details open>
<summary><h2><strong>Important Links 🔗</strong></h2></summary>
 
- **Live project:** https://apursley2012.github.io/pizza-planet/
- **Repository:** https://github.com/apursley2012/pizza-planet
- **Issues:** https://github.com/apursley2012/pizza-planet/issues
 
</details>
 
---
 
<a id="attribution"></a>
 
<details open>
<summary><h2><strong>Attribution ℹ️</strong></h2></summary>
 
I retain ownership of my original project contributions only. External fonts and other identified third-party works are credited in `THIRD_PARTY_NOTICES.md`; inclusion of a notice does not itself establish redistribution permission for assets of unverified origin.
 
---
 
<div align="center">
 
**© 2026 Alysha Pursley. All Rights Reserved.**
 
</div>
 
</details>
 
---
 
<div align="center">
 
***Made with ❤️ and a bit of 🪄.***
 
**©️ 2026 Alysha Pursley. All Rights Reserved.**
 
</div>
