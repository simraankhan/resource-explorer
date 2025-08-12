import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const archivo = localFont({
  src: [
    { path: "/fonts/Archivo-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Archivo-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Archivo-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/Archivo-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Rick & Morty is platform for search various characters",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
