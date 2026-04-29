import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { Sidebar } from "@/components/layout/Sidebar";
import { NavigationDock } from "@/components/layout/NavigationDock";
import { WispBackground } from "@/components/animations/WispBackground";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { FancyLoader } from "@/components/ui/FancyLoader";
import { AOSInitializer } from "@/components/animations/AOSInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miles Thatcher | Frontend Developer",
  description: "Frontend Developer & UI Engineer crafting high-performance web interfaces with React, TypeScript, and modern CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistSans.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased font-body flex flex-col lg:flex-row min-h-screen no-scrollbar bg-background text-foreground`}
      >
        <AOSInitializer />
        <FancyLoader />
        <SmoothScroll>
          <WispBackground />
          <Sidebar />

          <main className="flex-1 lg:ml-[480px] xl:ml-[550px] lg:mr-24 px-6 sm:px-12 lg:px-0 min-h-screen relative z-10">
            {children}
          </main>

          <NavigationDock />
        </SmoothScroll>
      </body>
    </html>
  );
}
