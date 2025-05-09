import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

const cardVariants = cva(
  "bg-white rounded-lg p-5 hover:cursor-pointer overflow-hidden",
  {
    variants: {
      size: {
        "naniwa-premium": "w-[240px] h-[180px]",
        "osaka-maido-gold": "w-[200px] h-[150px]",
        "mini-takoyaki-silver": "w-[160px] h-[120px]"
      },
    },
    defaultVariants: {
      size: "naniwa-premium",
    },
  }
);

const cardImageVariants = "hover:opacity-50 hover:scale-110 duration-200 focus:scale-105 active:scale-95"

interface SponsorCardProps {
  href: string,
  imageSrc: string,
  alt: string,
  size: "naniwa-premium" | "osaka-maido-gold" | "mini-takoyaki-silver"
}

function SponsorCard(props: React.ComponentProps<"p">&SponsorCardProps & VariantProps<typeof cardVariants>){

  const {className,href,imageSrc,size,alt} = props

  return (
  <button className={cn(cardVariants({ size, className }))}>
    <a href={href} target="_blank">
      <img className={cardImageVariants} src={imageSrc} alt={alt}/>
    </a>
  </button>
)
}

export { SponsorCard }
