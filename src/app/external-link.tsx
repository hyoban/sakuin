import Link from 'next/link'

type AppLinkProps = React.PropsWithChildren<{
  href: string
  className?: string
  title?: string
}>

export function AppLink({ href, title, className, children }: AppLinkProps) {
  if (!href)
    return <>{children}</>

  if (href.startsWith('http')) {
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

  return (
    <Link
      href={href.startsWith('/') ? href : `/${href}`}
      className={className}
      title={title}
    >
      {children}
    </Link>
  )
}
