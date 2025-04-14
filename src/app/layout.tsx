import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Header, Navbar } from "@/components";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AluDev Landing Page",
  description: "Landing Page made  by AluDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist}  antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
