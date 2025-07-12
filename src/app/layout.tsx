import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "../../lib/react-query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aurora Status Checker - Professional Website Monitoring",
  description: "Monitor your websites and APIs with real-time status checking, downtime alerts, and performance analytics. Professional monitoring made simple.",
  keywords: ["website monitoring", "uptime monitoring", "status checker", "API monitoring", "downtime alerts", "performance monitoring", "SaaS"],
  authors: [{ name: "Aurora Status Checker" }],
  creator: "Aurora Status Checker",
  publisher: "Aurora Status Checker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://status.alvinchang.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aurora Status Checker - Professional Website Monitoring",
    description: "Monitor your websites and APIs with real-time status checking, downtime alerts, and performance analytics. Professional monitoring made simple.",
    url: 'https://status.alvinchang.dev',
    siteName: 'Aurora Status Checker',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aurora Status Checker - Professional Website Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aurora Status Checker - Professional Website Monitoring",
    description: "Monitor your websites and APIs with real-time status checking, downtime alerts, and performance analytics.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
