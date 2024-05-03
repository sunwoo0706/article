import "@/styles/globals.css"
import { Metadata, type Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const defaultMetadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://article.sunwoo.xyz"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    ...defaultMetadata,
    type: "website",
  },
  twitter: {
    ...defaultMetadata,
    site: "@sunwoo0706",
    creator: "@sunwoo0706",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background font-sans antialiased selection:bg-[#FFF9A8]",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <main className="mx-auto my-12 max-w-2xl px-6 sm:my-32">
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
