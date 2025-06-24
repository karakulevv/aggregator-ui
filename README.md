# News Aggregator UI

A modern, privacy-focused news aggregation web app built with React and Tailwind CSS.

## Tech Stack & Overview
- **React (TypeScript):** Modular, maintainable SPA framework
- **Tailwind CSS:** Utility-first, responsive, dark mode-ready design
- **React Router v6:** Client-side navigation
- **gh-pages / Docker + Nginx (optional):** Static or containerized deployment

**Purpose:**
A web UI for displaying and managing aggregated news articles, with a focus on privacy and user experience.

**Features:**
- Responsive card grid for articles with category filtering
- Dark mode toggle
- Privacy policy and content removal request form (supports multiple image uploads)
- API base URL configurable via `.env`

**Extensible:**
Modular codebase with reusable components, ready for real API integration and further feature expansion.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Create a `.env` file in the project root:
```
REACT_APP_API_BASE_URL=https://your-api-base-url.com
```

### 3. Run the app
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
- `src/components/` – Reusable UI components
- `src/sampleArticles.ts` – Example article data
- `src/App.tsx` – Tab navigation and layout

## License
MIT
