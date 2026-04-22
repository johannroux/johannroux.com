import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Johann Roux",
    template: "%s · Johann Roux",
  },
  description:
    "Software engineering manager and backend engineer. Building reliable, high-impact products with strong engineering practices.",
  metadataBase: new URL("https://www.johannroux.com"),
  manifest: `${basePath}/favicon/site.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/favicon/favicon.ico` },
      { url: `${basePath}/favicon/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${basePath}/favicon/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: `${basePath}/favicon/apple-touch-icon.png`, sizes: "180x180" }],
    shortcut: [{ url: `${basePath}/favicon/favicon.ico` }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <div className="flex-1">
          <SiteHeader />
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
