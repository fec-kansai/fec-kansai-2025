import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

type SizeKeys =  "naniwa-premium" |  "osaka-maido-gold" | "mini-takoyaki-silver"

/**
 * 各スポンサーカードサイズ
 */
const VARIABLES_SIZE:Record<SizeKeys,{width:number,height:number}> = {
  "naniwa-premium":{
    width: 240,
    height: 180
  },
  "osaka-maido-gold":{
    width:200,
    height:150
  },
  "mini-takoyaki-silver":{
    width:160,
    height:120
  }
}

/**
 * スポンサーカードのサイズをレスポンシブに取得
 * @param key
 * @returns
 */
function getResponsizeCardSize(key:SizeKeys){
  const {width,height}   = VARIABLES_SIZE[key]
  const spScale = 0.7
  return `w-[${width*spScale}px] md:w-[${width}px] h-[${height* spScale}px] md:h-[${height}px]`
}


const cardVariants = cva(
  "bg-white rounded-lg p-3 hover:cursor-pointer overflow-hidden",
  {
    variants: {
      size: {
        "naniwa-premium": getResponsizeCardSize("naniwa-premium"),
        "osaka-maido-gold": getResponsizeCardSize("osaka-maido-gold"),
        "mini-takoyaki-silver": getResponsizeCardSize("mini-takoyaki-silver")
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
