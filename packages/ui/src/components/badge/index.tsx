import { cva } from "class-variance-authority";
import { type HTMLAttributes, useMemo } from "react";

export type SPONSOR_PLANS =
  | "venue"
  | "mini-takoyaki"
  | "osaka-maido"
  | "student"
  | "name-card"
  | "name-rights";

export type BadgeProps = {
  plan?: SPONSOR_PLANS;
} & HTMLAttributes<HTMLDivElement>;

const badgeVariants = cva(
  "inline-flex items-center justify-center text-base/8 font-bold text-neon-stroke-width border px-[20px] py-1 w-fit",
  {
    variants: {
      colorScheme: {
        // Basic Plan
        basic: "text-neon-green border-neon-green",
        option: "text-neon-yellow border-neon-yellow",
      },
    },
  },
);

export const Badge = ({ plan = "venue", className, ...props }: BadgeProps) => {
  const BASIC_PLANS = ["mini-takoyaki", "osaka-maido", "venue"];
  const isBasicPlan = BASIC_PLANS.includes(plan);

  const planName = useMemo(() => {
    switch (plan) {
      case "mini-takoyaki":
        return "ミニたこやきスポンサー";
      case "osaka-maido":
        return "おおさかまいどスポンサー";
      case "student":
        return "学生支援スポンサー";
      case "name-card":
        return "ネームカードスポンサー";
      case "name-rights":
        return "ネーミングライツスポンサー";
      case "venue":
        return "会場スポンサー";
      default:
        return "プラン未設定";
    }
  }, [plan]);

  return (
    <div
      className={`${badgeVariants({ colorScheme: isBasicPlan ? "basic" : "option" })} ${className}`}
      {...props}
    >
      {planName}
    </div>
  );
};
