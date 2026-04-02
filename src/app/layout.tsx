import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "VoltDrive — Elektryczna przyszlosc. Juz dzis.",
  description:
    "Premium samochody elektryczne z Chin. Zeekr, BYD, NIO, XPeng. Bezposredni import, pelna gwarancja, konkurencyjne ceny.",
  openGraph: {
    title: "VoltDrive — Elektryczna przyszlosc. Juz dzis.",
    description:
      "Premium samochody elektryczne z Chin. Zeekr, BYD, NIO, XPeng.",
    url: "https://autremondeagency.github.io/voltdrive-landing/",
    siteName: "VoltDrive",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltDrive — Elektryczna przyszlosc. Juz dzis.",
    description:
      "Premium samochody elektryczne z Chin. Zeekr, BYD, NIO, XPeng.",
  },
  metadataBase: new URL(
    "https://autremondeagency.github.io/voltdrive-landing/"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
