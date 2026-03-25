<div align="center">
<img src="icon-512.png" width="72" height="72" alt="logo"/>
# ⚡ Pulse
### Modern Google News Reader PWA

[![Live Demo](https://img.shields.io/badge/Live-Demo-e63946?style=for-the-badge&logo=google-chrome&logoColor=white)](https://br1jm0h4n.github.io/Pulse/)
[![License: MIT](https://img.shields.io/badge/License-MIT-11111f?style=for-the-badge)](./LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-4cc9f0?style=for-the-badge&logo=pwa&logoColor=11111f)](./manifest.webmanifest)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=11111f)](./index.html)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-e34f26?style=for-the-badge&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-Custom-1572b6?style=for-the-badge&logo=css3&logoColor=white)](./index.html)

</div>

---

## ✨ Highlights

- 📰 **Live top stories** from Google News RSS feed.
- 🔎 **Instant filtering** by title or source.
- 🧠 **Smart caching** with freshness indicators and stale fallback.
- 🔊 **Read Aloud mode** with adjustable speech speed controls.
- 📲 **Installable PWA** with offline-ready service worker behavior.
- 🎨 **Polished UI** with responsive cards, ticker, and dark newsroom styling.

## 🚀 Live Preview

👉 **Open Pulse:** https://br1jm0h4n.github.io/Pulse/

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Data:** Google News RSS
- **PWA:** `manifest.webmanifest` + `sw.js`
- **Speech:** Web Speech API (`speechSynthesis`)

## 🧩 Core Features

1. **Top Stories Feed**
   - Loads and parses RSS items.
   - Extracts clean title/source metadata.
2. **Ticker Stream**
   - Rotating headline ticker for quick scanning.
3. **Read Aloud + TTS Speed**
   - Reads currently visible stories.
   - Speed can be configured in the settings modal beside the read-aloud button.
4. **Cache Layer**
   - Uses localStorage cache with TTL.
   - Falls back to stale cache when network is unavailable.

## 📦 Run Locally

```bash
# 1) Clone
git clone https://github.com/br1jm0h4n/Pulse.git

# 2) Enter folder
cd Pulse

# 3) Serve with any static server (example)
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

## 📁 Project Structure

```text
Pulse/
├── index.html              # App UI + logic
├── sw.js                   # Service worker
├── manifest.webmanifest    # PWA manifest
├── icon-192.png
├── icon-512.png
├── icon-512-maskable.png
└── README.md
```

## 📄 License

Distributed under the MIT License. See [`LICENSE`](./LICENSE).
