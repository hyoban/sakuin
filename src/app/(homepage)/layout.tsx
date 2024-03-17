import { AppearanceSwitch } from '~/components/appearance-switch'

import { env } from '../../env'
import { client } from '../../lib/client'
import { AppLink } from '../external-link'
import { Navigation } from '../navigation'
import { getUniverseLinks } from '../utils'

export default async function HomeLayout({ children }: React.PropsWithChildren) {
  const { HANDLE } = env
  const {
    characterName,
    description,
    socialPlatforms,
    navigation,
    xlogUrl,
  } = await client.site.getInfo(HANDLE)
  const pages = await client.page.getAll(HANDLE)
  const navigations = pages.map(page => ({
    href: `/${page.slug}`,
    label: page.title,
  }))

  const links = getUniverseLinks(
    socialPlatforms,
    navigation,
    xlogUrl,
    env.SITE_URL,
  )

  return (
    <main className="mx-auto max-w-[692px] px-6 my-6 sm:my-16 antialiased prose prose-neutral dark:prose-invert">
      <section>
        <h2 className="flex items-center gap-3">
          {characterName}
          <AppearanceSwitch className="scale-75" />
        </h2>
        <p>{description}</p>
        {links.length > 0 && (
          <section className="flex gap-4 items-center">
            {links.map(link => (
              <AppLink
                href={link.href}
                key={link.href}
                className={link.icon}
                title={link.title}
              >
                {link.title}
              </AppLink>
            ))}
          </section>
        )}
      </section>
      <Navigation additionalNavigation={navigations} />
      {children}
    </main>
  )
}
