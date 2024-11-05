import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const signature = localFont({
  src: "./fonts/signature.ttf",
  variable: "--font-signature",
  weight: "400",
});
const playwrite = localFont({
  src: "./fonts/Playwrite.ttf",
  variable: "--font-playwrite",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rishabh Sharma",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://app.tinyanalytics.io/pixel/7Ex9qqyQyfmcEk01"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${signature.variable} ${playwrite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
