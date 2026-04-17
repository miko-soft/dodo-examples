# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on http://127.0.0.1:3456 (hot reload)
npm run build      # Production build → dist/
npm run prod       # Serve production build via Vite preview
npm run server     # Start PM2 backend server on port 3457 (serves dist/)
npm run nodemon    # Backend server with auto-restart (dev)
npm run inst       # Clean reinstall (removes node_modules + package-lock.json)
```

There is no test suite. Lint is configured in `.eslintrc` (ES6+, browser/node env) but no lint script is defined.

## Architecture

This is a **demo/example repository** for the `@mikosoft/dodo` SPA framework. It showcases ~67 controllers, each demonstrating a specific framework feature.

### Frontend (Vite + DoDo Framework)

- **Entry:** `src/index.html` → `src/app.js`
- **`src/app.js`** is the single wiring file — it imports all controllers, defines all routes, and initializes the `App` instance via method chaining:
  ```js
  new App().httpClient($httpClient).auth($auth).i18n(i18n).debug($debugOpts).routes(routes).listen()
  ```
- Routes are tuples in `app.js`: `['when', '/path', ControllerClass, opts]`, `['redirect', '/from', '/to']`, `['notfound', NotfoundCtrl]`

### Controller-View Pattern

Every example follows the same structure:

**Controller** (`src/controllers/<category>/XyzCtrl.js`) — extends `Controller`:
- `__loader(trx)` — set page title, load view HTML, configure meta
- `__init(trx)` — set `this.$model`, call framework APIs
- `__postrend(trx)` — post-render DOM logic, bind events

Views are loaded as raw HTML strings via Vite's `?raw` import:
```js
import view from '/views/pages/category/xyz.html?raw'
```

**View** (`src/views/pages/<category>/xyz.html`) — plain HTML using `dd-*` directives:
- `dd-text`, `dd-model`, `dd-if`, `dd-each`, `dd-click`, `dd-class`, `dd-style`, `dd-value`, `dd-disabled`, `dd-checked`, etc.

### Controller Categories

| Directory | Purpose |
|---|---|
| `controllers/dd/` | Core directive demos (`dd-text`, `dd-if`, `dd-each`, …) |
| `controllers/ddCloners/` | Cloning directives |
| `controllers/ddListeners/` | Event listener directives |
| `controllers/view/` | View manipulation |
| `controllers/model/` | Data model features |
| `controllers/lib/` | Framework utilities (Auth, Form, Navigation, Cookie, Storage, Paginator) |
| `controllers/controller/` | Controller lifecycle demos |

### Configuration (`src/conf/`)

- `$auth.js` — authentication service (login/logout/role guards)
- `$httpClient.js` — HTTP client for API calls
- `$debugOpts.js` — per-directive debug flags
- `index.js` — i18n setup (English, German, Croatian in `src/i18n/`)

### Backend (`server/`)

A minimal `@mikosoft/spa-server` instance that serves `dist/` with URL rewrites for SPA routing. Environment config via `server/.env.development` and `server/.env.production`. Not needed for frontend dev (`npm run dev` is self-contained).

### Build

Vite config (`vite.config.js`) roots at `src/`. Static assets live in `src/public/` and are copied to `dist/` unchanged. Production assets land under `dist/dodoBuild/`.
