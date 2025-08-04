# Monorepo Setup

This repository demonstrates a basic [pnpm](https://pnpm.io/) monorepo managed with [Turborepo](https://turbo.build/). It includes a sample web application and shared packages.

## Structure

- `apps/web` - React application built with Vite.
- `packages/ui` - Reusable UI components.
- `packages/utils` - Shared utility functions.

## Getting Started

Install dependencies:

```sh
pnpm install
```

Start development mode for all projects:

```sh
pnpm dev
```

Build all packages and apps:

```sh
pnpm build
```

Run linters:

```sh
pnpm lint
```

## License

MIT

