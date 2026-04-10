import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SSTOPUP Exchange | Buy Airtime, Data & Bundles in Kenya - Scof Services",
    template: "%s | SSTOPUP Exchange - Scof Services",
  },
  description:
    "Buy affordable airtime, data bundles, Bonga Points, Okoa Jahazi, calls & SMS packages in Kenya. Top up via website, WhatsApp Bot, or offline. Fast, secure & available 24/7.",
  keywords: [
    "buy airtime Kenya",
    "cheap data bundles Kenya",
    "Safaricom bundles",
    "SSTOPUP Exchange",
    "Bonga Points",
    "Okoa Jahazi",
    "convert airtime to cash",
    "mobile top up Kenya",
    "Scof Services",
    "buy data without data",
    "WhatsApp bot airtime",
    "Safaricom data bundles",
    "Bingwa Sokoni",
    "flex packages Safaricom",
    "refer and earn Kenya",
  ],
  authors: [{ name: "Scof Services" }],
  creator: "Scof Services",
  publisher: "Scof Services",
  metadataBase: new URL("https://www.scofhub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.scofhub.com",
    siteName: "SSTOPUP Exchange - Scof Services",
    title: "SSTOPUP Exchange | Buy Airtime, Data & Bundles in Kenya",
    description:
      "Buy affordable airtime, data bundles, Bonga Points, Okoa Jahazi & more. Top up via website, WhatsApp Bot, or offline. Fast, secure & 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSTOPUP Exchange | Buy Airtime, Data & Bundles in Kenya",
    description:
      "Buy affordable airtime, data bundles, Bonga Points, Okoa Jahazi & more. Fast, secure & 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}