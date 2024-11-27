import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { genPageMetadata } from "./genMetadata";

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

export const metadata: Metadata = genPageMetadata({
  title: "Jose GhostWriting - Potencia tu marca persona",
  description: "Descubre cómo potenciar tu marca personal con un ghostwriter experto en redacción estratégica.",
  pageRoute: "https://joseghostwriting.com",
  ogImgRoute: "/favicon.ico"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
