'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Language } from 'sakuin'

const navigation = [
  { href: '/', label: 'Posts' },
  { href: '/portfolios', label: 'Portfolios' },
  { href: '/shorts', label: 'Shorts' },
]

export function Navigation(
  { additionalNavigation, locale }: { additionalNavigation?: Array<{ href: string, label: string }>, locale: Language },
) {
  const pathname = usePathname()
  return (
    <nav className="not-prose flex flex-wrap gap-4 my-6 text-xl">
      {navigation
        .map(({ href, label }) => (
          <Link
            key={`${locale}/${href}`}
            href={`${locale}/${href}`}
            className={clsx(
              pathname === href
                ? 'font-semibold underline underline-offset-4'
                : 'opacity-80',
              'hover:opacity-100',
            )}
          >
            {label}
          </Link>
        ))}
      {additionalNavigation?.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            pathname === href
              ? 'font-semibold underline underline-offset-4'
              : 'opacity-80',
            'hover:opacity-100',
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
