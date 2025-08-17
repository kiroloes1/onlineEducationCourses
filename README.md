# EduNest — Online Course Education

A modern, responsive front‑end for an online learning platform. Built with semantic HTML, Tailwind CSS, and vanilla JavaScript. Includes course cards, teacher profiles, a responsive sidebar, and client‑side profile editing with SweetAlert2.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Environment & Config](#environment--config)
* [Available Pages](#available-pages)
* [State & Storage](#state--storage)
* [Styling Guidelines](#styling-guidelines)
* [Accessibility](#accessibility)
* [SEO](#seo)
* [Quality & Linting](#quality--linting)
* [Common Tasks](#common-tasks)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)

---

## Demo

Open `index.html` in your browser or run a local dev server (see [Getting Started](#getting-started)).

---

## Features

* **Responsive layout** with Tailwind CSS + mobile‑first grid.
* **Sidebar navigation** that slides in/out on small screens with overlay; fixed on large screens.
* **Course listings** with teacher avatar, date, thumbnail, and CTA.
* **Profile edit form** with SweetAlert2 validations and success/error modals.
* **LocalStorage persistence** for demo users and tokens (client‑side only).
* **SEO & PWA basics**: meta tags, manifest hooks, icons, theme color.

---

## Tech Stack

* **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6)
* **UI/UX:** Font Awesome icons, Google Fonts (Cairo)
* **Modals/Alerts:** SweetAlert2 (CDN)
* **Build/Tooling:** Optional (no build required). You can use Live Server / any static server.

---

## Project Structure

```
root/
├─ index.html
├─ about.html
├─ allcourses.html
├─ teachers.html
├─ contactUs.html
├─ profile.html           # user profile page
├─ registration.html      # sign up
├─ login.html             # sign in (optional)
├─ style.css
├─ main.js                # global JS (sidebar toggle, forms, etc.)
├─ /images                # avatars, thumbnails, icons
├─ /assets                # logos, og-image, etc.
├─ site.webmanifest
└─ README.md
```

> File names can vary; keep routes consistent with your anchors and imports.

---

## Getting Started

### 1) Clone or download

```bash
# via git
git clone <your-repo-url> edunest
cd edunest
```

### 2) Run locally (choose one)

* **Open directly:** double‑click `index.html`.
* **Live Server (VS Code extension):** Right‑click `index.html` → *Open with Live Server*.
* **Node static server (optional):**

  ```bash
  npx serve .
  # or
  python -m http.server 5500
  ```

### 3) CDN dependencies

Ensure these are present in your HTML `<head>`:

* Tailwind CSS CDN
* SweetAlert2 CDN
* Font Awesome CDN
* Google Fonts (Cairo)

---

## Environment & Config

This is a static front‑end. No `.env` is required. For demo auth, the app uses `localStorage` keys:

* `studentArray` — an array of user objects `{ token, name, email, password, icon }`.
* `token` — the currently logged‑in user token.

> **Security note:** Do **not** store real passwords in `localStorage`. If you move to a backend, hash passwords server‑side and use HTTP‑only cookies or secure tokens.

---

## Available Pages

* **Home (`index.html`)** — hero, featured courses, categories.
* **About (`about.html`)** — platform mission and value proposition.
* **Courses (`allcourses.html`)** — grid of course cards with thumbnails and videos count.
* **Teachers (`teachers.html`)** — instructors list with avatars and bios.
* **Contact (`contactUs.html`)** — contact form and support info.
* **Profile (`profile.html`)** — edit name, email, password, and select avatar with live validation.
* **Registration/Login** — optional demo auth flows.

---

## State & Storage

* Profile update flow (sample):

  1. Validate inputs (non‑empty, email format, password length ≥ 8, avatar selected).
  2. Show SweetAlert2 error/success messages.
  3. Update the matching user within `studentArray` by `token` and persist back to `localStorage`.

> Tip: Use unique IDs for DOM nodes (avoid duplicated `id` in loops) and escape strings when injecting HTML.

---

## Styling Guidelines

* Use Tailwind utility classes for spacing, color, and layout.
* Prefer semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
* Keep IDs unique; prefer classes for repeated elements (e.g., `.profile-img`).
* For transitions: `transition-transform duration-500 ease-in-out` with `translate-x` utilities.

**Sidebar pattern (mobile):**

```html
<div id="overlay" class="fixed inset-0 bg-black/50 hidden z-40"></div>
<aside id="sidebar" class="fixed top-0 left-0 h-full w-64 bg-white shadow transform -translate-x-full lg:translate-x-0 transition-transform duration-500 ease-in-out z-50">
  <!-- content -->
</aside>
```

---

## Accessibility

* Ensure sufficient color contrast for text over images.
* Add descriptive `alt` text for images (avatars, thumbnails).
* Keyboard support: focus styles on links/buttons; ensure sidebar toggle is reachable via `Tab`.
* Use `aria-expanded` on the menu button and `aria-controls` linking to the sidebar.

---

## SEO

Included:

* Descriptive `<title>` and meta description.
* Open Graph + Twitter cards (`og:title`, `og:description`, `og:image`).
* Canonical URL and `robots` directives.
* `theme-color`, `manifest`, and app icons for basic PWA support.

Suggested:

* Generate a real `sitemap.xml` and `robots.txt` when deploying.
* Use meaningful headings (H1 per page) and structured data (JSON‑LD) for courses in production.

---

## Quality & Linting

* Format HTML/CSS/JS with Prettier.
* Optional: ESLint for vanilla JS (airbnb‑base or standard config).
* Image optimization (WebP/AVIF) for faster loads.

---

## Common Tasks

**Add a new course card**

1. Copy an existing card block in `allcourses.html`.
2. Update avatar, date, thumbnail, title, and videos count.
3. Keep alt text accurate and human‑readable.

**Wire the profile avatar picker**

* Render a grid of selectable images; on click, set `profilevalue` and visually highlight the selected image with a `ring` class.

**Show a SweetAlert2 confirm with Cancel**

```js
Swal.fire({
  icon: 'warning',
  title: 'User Not Found!',
  text: 'Please register first.',
  showCancelButton: true,
  confirmButtonText: 'Register',
  cancelButtonText: 'Cancel'
}).then((res) => {
  if (res.isConfirmed) window.location.href = './registration.html';
});
```

---

## Roadmap

* **Auth backend** (JWT or session cookies), password hashing.
* **Real data**: courses, instructors, categories from an API.
* **Search & filters** for courses (by topic, level, price, language).
* **Playlists & progress tracking** with persistent state.
* **Payments & enrollment** (Stripe/PayPal) and order history.
* **Certificates** generation and sharing.
* **Internationalization (i18n)** Arabic/English toggle and RTL support.
* **Testing**: Unit tests for utilities and integration tests for flows.

---

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/my-feature`.
2. Commit with conventional commits: `feat: add sidebar overlay`.
3. Open a Pull Request with description, screenshots, and testing notes.

---

## License

This project is released under the MIT License. See `LICENSE` for details.
