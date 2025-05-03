import { linkVariants } from "@workspace/ui";
import { cn } from "@workspace/ui/lib/utils";
import type { LinkProps as NextLinkProps } from "next/link";
import type { ReactNode } from "react";

// Storybookかどうかを判定する変数
const isStorybook =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/iframe.html");

// Next.jsのLinkコンポーネントを条件付きでインポート
// 動的インポートを使わないように変更
let NextLink: React.ComponentType<
  NextLinkProps & { children: ReactNode; className: string }
> | null = null;
if (!isStorybook) {
  // クライアントサイドかつStorybookでない場合のみNextLinkを読み込む
  try {
    // ESLintの警告を抑制（通常はインポート文をトップレベルに置くべき）
    NextLink = require("next/link").default;
  } catch (e) {
    console.error("Failed to load next/link:", e);
  }
}

// Linkコンポーネントのprops
type CustomLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
} & Omit<NextLinkProps, "href" | "className">;

export const Link = ({
  children,
  className,
  href,
  target,
  rel,
  ...rest
}: CustomLinkProps) => {
  // Web環境の場合はNext.jsのLinkコンポーネントを使用
  if (!isStorybook && NextLink) {
    return (
      <NextLink
        href={href}
        className={cn(linkVariants({ className }))}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }

  // Storybookの場合またはNextLinkが利用できない場合はaタグを使用
  return (
    <a
      className={cn(linkVariants({ className }))}
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </a>
  );
};
