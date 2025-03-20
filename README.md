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

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`type(scope or module): message` in your commit message while using one of
the following types:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above categories

> [!TIP]
>
> If you are interested in the detailed specification you can visit [Conventional Commits](https://www.conventionalcommits.org) or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
