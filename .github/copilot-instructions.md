# Copilot instructions for PokemonTracker

Purpose: small Node.js frontend/backend to track a personal Pokémon sealed collection.

Build / test / lint
- No build step is defined.
- Install dependencies: npm install
- Run the app: node index.js (server listens on port 8000).
- Tests: package.json includes a placeholder test script. Run a single test (when added) with npm test -- <test-file-pattern> (replace with your test runner args).
- Lint: no linter configured. If ESLint or similar is added, run npm run lint.

High-level architecture
- Single-entry CommonJS Node.js app with index.js as the main file (package.json "main").
- index.js creates a tiny HTTP server responding with a static message and contains example/commented code for periodic API polling using an EventEmitter and setTimeout loop.
- External HTTP calls use the superagent dependency.
- Configuration placeholder: .env file exists (not consumed by code currently).

Key conventions and notes
- CommonJS module style (require/module.exports) rather than ESM.
- Server binds to port 8000 by default in index.js.
- The repo currently has no test framework, linter, or build tooling; add scripts to package.json to make those discoverable.
- Promisify helper in index.js is currently incorrect: the Promise executor calls both resolve and reject synchronously. If Copilot suggests changes, prefer converting to:
  - return superagent.get(path) directly (superagent returns a promise), or
  - return new Promise((resolve, reject) => superagent.get(path).then(resolve).catch(reject));

Files to inspect for future sessions
- index.js — main application logic and examples
- package.json — dependency and script metadata
- .env — local environment values (not yet wired up)

When generating suggestions
- Prefer minimal, surgical edits (do not add new tooling without a package.json script or clear user intent).
- If proposing a start script, add: "start": "node index.js" and a sensible test/lint script if a framework is introduced.

MCP / CI servers
- None suggested by repository contents.

If anything here should be expanded (tests, linting, CI, or MCP server guidance), say which area to cover next.
