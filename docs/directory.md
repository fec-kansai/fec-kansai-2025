# ディレクトリ構造

## apps/storybook

Storybook 用のディレクトリです。
`apps/web/components` の汎用コンポーネント及び、`packages/ui/components` の shadcn/ui のコンポーネントを Storybook に登録します。
また、VRT による差分検知のために各ページの `page.tsx` も登録します。

`apps/web/components` のコンポーネントは、自作した汎用コンポーネントを原則として全て登録します。
`packages/ui/components` のコンポーネントは、原則として全て登録します。ただし、shadcn/ui から取ってきて加工無しで利用しているものは最低限の設定で構いません。

## apps/web

実際のウェブサイトのアプリケーションです。

### app

Next.js の app router の app ディレクトリです。

基本的には `page.tsx` のみ配置し、ページ固有のコンポーネントや hooks などは後述の `page` ディレクトリに配置します。

### components

汎用コンポーネントを配置します。ただし、shadcn/ui のコンポーネントは `packages/ui` に配置します。
汎用コンポーネントは原則として shadcn/ui から取ってくるようにし、それだけで対応できないもののみ自作するようにします。

### page

ページ固有のコンポーネントや hooks などを配置します。
コンポーネントは `page/{page}/{component}.tsx`、hooks は `page/{page}/hooks/{hook}.ts` のように配置します。

### hooks

汎用的な React のカスタムフックを配置します。

### lib

汎用的な関数などを配置します。

## packages/ui

shadcn/ui のコンポーネントを配置します。
内部のディレクトリ構造は apps/web とほぼ同じです。
