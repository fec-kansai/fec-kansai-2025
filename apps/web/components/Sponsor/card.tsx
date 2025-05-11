import { cn } from "@workspace/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";

type SizeKeys = "naniwa-premium" | "osaka-maido-gold" | "mini-takoyaki-silver";

/**
 * 各スポンサーカードサイズ
 */
const VARIABLES_SIZE = {
  "naniwa-premium": "w-[240px] md:w-[168px] h-[180px] md:[126px]",
  "osaka-maido-gold": "w-[200px] md:w-[140px] h-[150px] md:[105px]",
  "mini-takoyaki-silver": "w-[160px] md:w-[112px] h-[120px] md:[84px]",
} satisfies Record<SizeKeys, string>;

const cardVariants = cva("bg-white rounded-lg p-3 overflow-hidden", {
  variants: {
    size: {
      "naniwa-premium": VARIABLES_SIZE["naniwa-premium"],
      "osaka-maido-gold": VARIABLES_SIZE["osaka-maido-gold"],
      "mini-takoyaki-silver": VARIABLES_SIZE["mini-takoyaki-silver"],
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
