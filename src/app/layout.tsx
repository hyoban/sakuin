import "./globals.css"

import type { PropsWithChildren } from "react"

export const metadata = {
  title: "Hyoban",
  description: "Hyoban's personal website",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark:bg-neutral-900 dark:text-white">
      <body>{children}</body>
    </html>
  )
}
