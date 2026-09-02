# Stock Tracker

A web app for browsing a curated list of stocks, viewing live quotes and company details, saving a personal watchlist, and comparing two tickers side by side.

**Live version:** [https://react-stock-tracker.netlify.app/](https://react-stock-tracker.netlify.app/)

**This is an MVP.** The feature set is intentionally limited: a fixed universe of companies, sector-only filtering, a small local watchlist, and market data from a single public API. Expect rough edges, rate-limit constraints, and no authentication or persistence beyond the browser.

## Features

- **Stock list** — paginated browse of a static catalog (~100 companies) with current price and daily change
- **Sector filters** — narrow the list by industry sector
- **Search** — jump to a company from the header
- **Stock detail** — quote, country, IPO date, market capitalization, industry, and recent company news
- **Watchlist** — save up to 5 tickers in `localStorage` and see them on the home page
- **Compare** — pick two tickers and compare name, quote, and company profile fields

## Coming next

Later versions will add more advanced filtering and sorting, plus charts on the single-stock page and the compare page.

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [MUI](https://mui.com/)
- [TanStack Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)
- [Finnhub](https://finnhub.io/) for quotes, company profiles, logos, and news

## Getting started

### Prerequisites

- Node.js (current LTS recommended)
- npm
- A free [Finnhub API key](https://finnhub.io/register)

### Setup

```bash
npm install
```

Copy the example env file and add your key:

```bash
cp .env.example .env
```

Set `VITE_FINNHUB_API_KEY` in `.env`. Live quotes, company stats, and news will not load without it.

### Run

```bash
npm run dev
```

The app opens in the browser (Vite default: `http://localhost:5173`).

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

## MVP limitations

- Company list is static (`src/assets/data/stocks.json`), not a live exchange listing
- Watchlist is stored only in the browser (`localStorage`), capped at 5 tickers, and is not synced across devices
- Filtering is sector-only (richer filters and sorting are planned)
- Market data depends on Finnhub availability and free-tier rate limits
- No user accounts or alerts
- Charts are not in the MVP; they are planned for the single-stock and compare pages
