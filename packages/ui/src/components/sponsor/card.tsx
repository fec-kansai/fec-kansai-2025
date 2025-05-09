interface SponsorCardProps {
  href: string,
  imageSrc: string
}

function SponsorCard(props: React.ComponentProps<"p">&SponsorCardProps){

  const {className,href,imageSrc} = props

  const classVariants = `bg-white rounded-xl p-5 ${className}`

  return (
  <button className={classVariants}>
    <a href={href} target="_blank">
      <img src={imageSrc}/>
    </a>
  </button>
)
}

export { SponsorCard }
