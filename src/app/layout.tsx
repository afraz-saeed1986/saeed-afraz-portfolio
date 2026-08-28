
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteConfig = {
  name: "Saeed Afraz",
  title: "Saeed Afraz — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 12+ years of experience building scalable, high-performance and data-driven products with React, TypeScript, Next.js and Angular.",
  url: "https://your-domain.com",
  email: "hello@saeedafraz.dev",
  jobTitle: "Senior Frontend / Product Engineer",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s — Saeed Afraz",
  },

  description: siteConfig.description,

  keywords: [
    "Saeed Afraz",
    "Senior Frontend Engineer",
    "Senior Product Engineer",
    "Frontend Engineer",
    "React Engineer",
    "TypeScript Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Angular",
    "Frontend Architecture",
    "Web Performance",
    "Data-driven Applications",
    "Fintech",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  applicationName: siteConfig.name,

  category: "technology",

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description:
      "Senior Frontend Engineer building scalable, performant and data-driven web applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Senior Frontend Engineer building scalable, performant and data-driven web applications.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#111111",
    },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,

  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Angular",
    "Frontend Architecture",
    "Web Performance",
    "Data-driven Applications",
    "Fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}

