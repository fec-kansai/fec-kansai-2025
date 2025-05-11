import { cn } from "@workspace/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";

type SizeKeys = "naniwa-premium" | "osaka-maido-gold" | "mini-takoyaki-silver";

/**
 * 各スポンサーカードサイズ
 */
const VARIABLES_SIZE = {
  "naniwa-premium": "md:w-[240px] w-[168px] md:h-[180px] h-[126px]",
  "osaka-maido-gold": "md:w-[200px] w-[140px] md:h-[150px] h-[105px]",
  "mini-takoyaki-silver": "md:w-[160px] w-[112px] md:h-[120px] h-[84px]",
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
  size: SizeKeys;
}

function SponsorCard(
  props: React.ComponentProps<"button"> &
    SponsorCardProps &
    VariantProps<typeof cardVariants>,
) {
  const { className, href, imageSrc, size, alt } = props;

  return (
    <a
      href={href}
      target="_blank"
      className={cn(cardVariants({ size, className }))}
      rel="noreferrer"
    >
      <img className={cardImageVariants} src={imageSrc} alt={alt} />
    </a>
  );
}

export { SponsorCard };
