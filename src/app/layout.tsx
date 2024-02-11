import "./globals.css"

export const metadata = {
  title: "Hyoban",
  description: "Hyoban's personal website",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="zh-Hans" className="dark:bg-neutral-900 dark:text-white">
      <body>{children}</body>
    </html>
  )
}
