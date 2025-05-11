import { cn } from "@workspace/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";

type SizeKeys = "naniwa-premium" | "osaka-maido-gold" | "mini-takoyaki-silver";

/**
 * 各スポンサーカードサイズ
 */
const VARIABLES_SIZE = {
  "naniwa-premium": {
    width: 240,
    height: 180,
  },
  "osaka-maido-gold": {
    width: 200,
    height: 150,
  },
  "mini-takoyaki-silver": {
    width: 160,
    height: 120,
  },
} satisfies Record<SizeKeys, { width: number; height: number }>;

/**
 * スポンサーカードのサイズをレスポンシブに取得
 * @param key
 * @returns
 */
function getResponsiveCardSize(key: SizeKeys) {
  const { width, height } = VARIABLES_SIZE[key];
  const SP_SCALE = 0.7;
  const widthClasses = `md:w-[${width}px] w-[${width * SP_SCALE}px]`;
  const heightClasses = `md:h-[${height}px] h-[${height * SP_SCALE}px]`;
  return [widthClasses, heightClasses].join(" ");
}

const CLASSES_MAP = {
  "naniwa-premium": getResponsiveCardSize("naniwa-premium"),
  "osaka-maido-gold": getResponsiveCardSize("osaka-maido-gold"),
  "mini-takoyaki-silver": getResponsiveCardSize("mini-takoyaki-silver"),
} satisfies Record<SizeKeys, string>;

const cardVariants = cva("bg-white rounded-lg p-3 overflow-hidden", {
  variants: {
    size: {
      "naniwa-premium": CLASSES_MAP["naniwa-premium"],
      "osaka-maido-gold": CLASSES_MAP["osaka-maido-gold"],
      "mini-takoyaki-silver": CLASSES_MAP["mini-takoyaki-silver"],
    },
  },
  defaultVariants: {
    size: "naniwa-premium",
  },
});

const cardImageVariants =
  "hover:opacity-70 hover:scale-110 duration-200 focus:scale-105 active:scale-95";

interface SponsorCardProps {
  href: string;
  imageSrc: string;
  alt: string;
  size: "naniwa-premium" | "osaka-maido-gold" | "mini-takoyaki-silver";
}

function SponsorCard(
  props: React.ComponentProps<"button"> &
    SponsorCardProps &
    VariantProps<typeof cardVariants>,
) {
  const { className, href, imageSrc, size, alt } = props;

  return (
    <button type="button" className={cn(cardVariants({ size, className }))}>
      <a href={href} target="_blank" rel="noreferrer">
        <img className={cardImageVariants} src={imageSrc} alt={alt} />
      </a>
    </button>
  );
}

export { SponsorCard };
