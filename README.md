# Rahi Rovers

Rahi Rovers is a responsive tours and travel website for exploring destinations, tour packages, and college events across India.

## Tech stack

- React 18 with TypeScript
- Vite 5
- Tailwind CSS and shadcn/ui
- React Router
- TanStack Query
- Vercel Analytics

## Prerequisites

Install the following before setting up the project:

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)
- Git

This project uses npm and `package-lock.json` for dependency management. Bun is not required.

## Local setup

Clone the repository and enter the project directory:

```powershell
git clone https://github.com/rakaliku/river-raft-adventures.git
cd river-raft-adventures
```

Install the exact dependency versions recorded in `package-lock.json`:

```powershell
npm ci
```

Start the development server:

```powershell
npm run dev
```

The application will be available at [http://localhost:8080](http://localhost:8080). Vite automatically reloads the page when source files change.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server on port 8080 |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run build:dev` | Create a build using Vite's development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

To test a production build locally:

```powershell
npm run build
npm run preview
```

## Project structure

```text
river-raft-adventures/
|-- public/                 Static files copied directly to the build
|-- src/
|   |-- assets/             Images and the Rahi Rovers logo
|   |-- components/         Shared page sections and UI components
|   |   `-- ui/             Reusable shadcn/ui components
|   |-- hooks/              Shared React hooks
|   |-- lib/                Utility functions
|   |-- pages/              Route-level page components
|   |-- App.tsx             Providers and application routes
|   |-- index.css           Global styles and Tailwind layers
|   `-- main.tsx            React application entry point
|-- index.html              HTML shell, metadata, and favicon links
|-- package.json            Scripts and dependencies
|-- tailwind.config.ts      Tailwind theme configuration
|-- tsconfig.json           TypeScript configuration
`-- vite.config.ts          Vite configuration and path aliases
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Main Rahi Rovers landing page |
| `/college-events` | College events page |
| Any unmatched route | Not-found page |

## Branding and assets

- The main logo is located at `src/assets/logo.png`.
- The favicon and Apple touch icon are configured in `index.html`.
- Destination and hero images are stored in `src/assets/`.

When replacing the logo, keep the same filename or update both component imports and the icon links in `index.html`.

## Updating dependencies

Install a new package with npm so that both `package.json` and `package-lock.json` remain synchronized:

```powershell
npm install <package-name>
```

Refresh Browserslist browser compatibility data with:

```powershell
npx update-browserslist-db@latest
```

Run the build after dependency changes:

```powershell
npm run build
```

## Deployment

The site can be deployed through Vercel's Git integration. When the Vercel project is connected to this repository and `main` is configured as the production branch, pushing to `main` automatically triggers a production deployment.

```powershell
git add -A
git commit -m "Describe your changes"
git push origin main
```

For safer collaboration, create a feature branch and open a pull request before merging into `main`.

## Troubleshooting

### Port 8080 is already in use

Stop the process using the port, or start Vite on another port:

```powershell
npm run dev -- --port 8081
```

### Dependencies appear inconsistent

Remove `node_modules` and reinstall from the npm lockfile:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
```

### An old favicon is still visible

Browsers cache favicons aggressively. Hard-refresh the page, clear the site's cached data, or open the site in a private browsing window.
