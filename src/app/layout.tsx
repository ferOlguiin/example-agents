import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Profecías Fallidas — El fin de los programadores que nunca llegó",
  description:
    "Desde ChatGPT hasta hoy: cómo los CEOs predijeron el fin de los programadores. Una línea del tiempo con cada profecía, su contexto de marketing, y la realidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
