# MRB1378 Frontend

A single-page, dark-themed portfolio/landing site with a 3D carousel hero, animated “philosophy” section, performance metrics counters, a hexagonal skills grid, and a contact form.

## Project Structure

- `index.html` – Page layout (sections + navigation) and element IDs/classes used by the JS/CSS
- `style.css` – All styling (theme, 3D carousel, sections, animations, skills hexagons, etc.)
- `scripts.js` – Data + UI logic (3D carousel, skills filtering, particles, counters, contact form, active nav)

## Features

- 3D rotating carousel in the hero section (auto-rotates, supports next/prev, keyboard arrows, and indicators)
- Animated particle background for the “About” section
- Performance metrics animation when the stats section enters the viewport (IntersectionObserver)
- Hexagonal skills grid with category filtering tabs
- Mobile-friendly navigation menu toggle
- Smooth scrolling between sections
- Animated loader screen on page load
- Contact form submission handler (client-side) that shows a success alert

## Included Data

### Portfolio Carousel
The hero carousel is generated from `portfolioData` inside `scripts.js` and includes cards for services/tools like:
- HPE iLo
- vCenter
- GitLab
- FortiGate
- PRTG
- Portainer
- Zabbix
- Ceph Storage
- MinIO
- NetBox
- Splunk
- Bitwarden
- Chatbot AI
- Mail-Server

Each card includes:
- An image (`images/...`)
- A title (often containing a link)
- A description
- Technology “badges”
- An “Explore” button that scrolls to `#about`

### Skills Grid
The skills grid is generated from `skillsData` in `scripts.js`, including categories:
- `all`
- `frontend`
- `backend`
- `cloud`
- `emerging`

Each skill renders as a hexagon with:
- Icon
- Name
- Percentage bar + percentage text

## How It Works (Main JS Logic)

### Carousel
- `initCarousel()` creates carousel items from `portfolioData`
- `updateCarousel()` positions cards with 3D transforms and opacity based on `currentIndex`
- `nextSlide()`, `prevSlide()`, `goToSlide(index)` update the carousel and indicator states
- Auto-rotation runs every 5 seconds (`setInterval(nextSlide, 5000)`)
- Keyboard navigation:
  - `ArrowLeft` → previous slide
  - `ArrowRight` → next slide

### Particles
- `initParticles()` injects particle elements into `#particles` with randomized placement and animation timing.

### Skills Grid
- `initSkillsGrid()` renders hexagons and filters by clicking `.category-tab` elements.

### Stats Counters
- Uses an `IntersectionObserver` to trigger number animations when the `.stats-section` is visible.
- `animateCounter()` increments the `.stat-number` up to `data-target`.

### Navigation & Scrolling
- Smooth scrolling for `.nav-link` clicks
- Active nav link updates on scroll based on section visibility

### Contact Form
- On submit, prevents page reload, reads form fields via `FormData`, shows an alert, then resets the form.

## Setup / Run

### Option A: Static Hosting (Simplest)
1. Put these files in the same folder:
   - `index.html`
   - `style.css`
   - `scripts.js`
2. Ensure referenced assets exist, e.g. images like:
   - `images/iLo-01.jpg`
   - `images/Vcenter.png`
   - etc.
3. Open `index.html` in a browser.

### Option B: Local Dev Server
If you use a dev server (recommended for some browsers’ asset rules):
- Serve the folder containing `index.html`, `style.css`, `scripts.js`, and `/images/`.

## Notes

- The carousel and skills are fully driven by the data arrays in `scripts.js`.
- Links in carousel titles may require those external sites to be reachable.
- The contact form currently handles submission on the client side only (it shows an alert and clears the form).
