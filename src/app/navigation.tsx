'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="not-prose flex gap-4 my-6 text-xl">
      <Link
        href="/"
        className={clsx(
          pathname === '/'
            ? 'font-semibold underline underline-offset-4'
            : 'opacity-80',
          'hover:opacity-100',
        )}
      >
        Posts
      </Link>
      <Link
        href="/portfolios"
        className={clsx(
          pathname === '/portfolios'
            ? 'font-semibold underline underline-offset-4'
            : 'opacity-80',
          'hover:opacity-100',
        )}
      >
        Portfolios
      </Link>
    </nav>
  )
}
