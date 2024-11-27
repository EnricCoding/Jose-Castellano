import type { Metadata } from "next";
import "./globals.css";
import { genPageMetadata } from "./genMetadata";

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
        className={` antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
