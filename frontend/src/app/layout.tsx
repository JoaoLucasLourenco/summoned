import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { MedievalSharp } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const medievalSharp = MedievalSharp({ weight: "400" , subsets:["latin"]});
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Summoned",
  description: "Site para quem ama RPG!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}</body>
        <Analytics/>
    </html>
  );
}
