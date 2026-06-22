# 🫧 Bubble Burst

A beautiful, fast-paced, interactive web-based bubble-popping game built using vanilla HTML, CSS, and JavaScript. Test your reflexes and accuracy by matching target numbers before the timer runs out!

🔗 **[Live Demo](#)** *(https://bubble-burst-alpha.vercel.app)*

---

## ✨ Features

- **Modern Glassmorphism UI:** A sleek, minimal user interface featuring a gorgeous responsive design layout.
- **Micro-Interactions & Animations:** - Dynamic scale-up effects on hovering over bubbles.
  - Smooth springy animations on the **Game Over** panel.
  - Floating trophies celebrating your final achievements.
- **Dynamic Color Palette:** Designed with a premium sage-green and emerald theme, stepping away from aggressive primary neon colors.
- **Optimized Performance:** Built with native JavaScript event delegation (`#pbtm` container handles clicks) to ensure zero lag with hundreds of interactive bubbles on screen.

---

## 🎮 How To Play

1. **Check the Target ("Hit"):** Look at the top navigation panel to see your current target digit (0–9).
2. **Find & Burst:** Locate the bubble containing the matching number inside the bottom grid.
3. **Score Points:** Clicking the correct bubble rewards you with **+10 points** and dynamically changes the target digit.
4. **Beat the Clock:** You only have 60 seconds! Once the timer hits zero, a gorgeous summary panel displays your performance and offers a quick retry option.

---

## 🛠️ Tech Stack

- **HTML5:** Structured semantic markup.
- **CSS3:** Custom animations (`@keyframes`), custom properties, and responsive grid layouts.
- **JavaScript (ES6+):** Pure vanilla JS logic, interval timers, and modern event listener workflows.

---

## 📂 Project Structure

```bash
├── index.html     # Main structural markup
├── style.css      # Custom animations, variables, and beautiful design elements
├── script.js      # Timer operations, event handlers, and generation loops
└── README.md      # Documentation (This file!)