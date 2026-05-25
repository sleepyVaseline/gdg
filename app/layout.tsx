import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.bio.slice(0, 160),
  keywords: [
    "portfolio",
    "developer",
    "Bengaluru",
    "Bangalore",
    "India",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    // Add images: [{ url: "/og.png", width: 1200, height: 630 }] when you have an OG image
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-texture`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
