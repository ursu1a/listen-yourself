import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "../components/shared/Providers";

import { siteConfig, metaSocial, structuredData } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  alternates: { canonical: siteConfig.url },
  authors: { name: siteConfig.author },
  publisher: siteConfig.maintainer,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: metaSocial.openGraph,
  twitter: metaSocial.twitter,
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-auto min-h-[100vh]">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
