type ExternalLinkProps = React.PropsWithChildren<{
  href: string
  className?: string
  title?: string
}>

export function ExternalLink({ href, title, className, children }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      className={className}
      title={title}
    >
      {children}
    </a>
  )
}
