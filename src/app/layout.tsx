import "./globals.css"

export const metadata = {
  title: "Hyoban",
  description: "Hyoban's personal website",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="zh-Hans" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  )
}
