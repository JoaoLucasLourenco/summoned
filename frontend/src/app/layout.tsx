import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { MedievalSharp } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/header";
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
        <Navbar/>
        {children}</body>
        <Analytics/>
    </html>
  );
}
