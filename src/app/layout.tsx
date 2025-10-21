import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dzikir Pagi & Petang - Amalan Harian Umat Muslim",
  description: "Aplikasi digital untuk membaca dzikir pagi dan petang dengan mudah dan nyaman. Dilengkapi dengan terjemahan dan faedah setiap dzikir.",
  keywords: ["dzikir", "pagi", "petang", "muslim", "islam", "amalan"],
  authors: [{ name: "Pengembang Aplikasi Muslim" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}