'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

type AppLinkProps = React.PropsWithChildren<{
  href: string
  transition?: false
  className?: string
  title?: string
} | {
  href: string
  transition: true
  className?: (isLoading: boolean) => string
  title?: string
}>

export function AppLink({ href, title, className, children, transition }: AppLinkProps) {
  const router = useRouter()
  const [isLoading, startTransition] = useTransition()

  if (!href)
    return <>{children}</>

  if (href.startsWith('http') && !transition) {
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

  if (!transition) {
    return (
      <Link
        href={href}
        className={className}
        title={title}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        startTransition(() => {
          router.push(href)
        })
      }}
      className={typeof className === 'function' ? className(isLoading) : className}
      title={title}
    >
      {children}
    </a>
  )
}
