# Frontend Conference Kansai 2025

This repository is source codes for Frontend Conference Kansai 2025's Website.

## Requirements

- Volta or nodenv

## Setup

### Install Node.js

- Use Volta

```bash
volta install node@23.1.0
volta install pnpm@10.6.3
```
- Use nodenv

```bash
nodenv install 23.1.0
npn i -g pnpm@10.6.3
```

### Install node_modules

```bash
pnpm i --frozen-lockfile
```

## Start dev server

```bash
pnpm dev
```

- Web Only

```bash
pnpm dev --filter=web
```

- Storybook Only
```bash
pnpm dev --filter=storybook
```
