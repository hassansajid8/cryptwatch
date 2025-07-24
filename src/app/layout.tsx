import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptWatch",
  description: "Crptowatch clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-y-scroll`}>
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>

        <footer className="p-2 w-full bg-violet-500 text-violet-200 text-right">
          <a href="https://github.com/hassansajid8/" target="_blank">@hassansajid</a>
        </footer>
      </body>
    </html>
  );
}
