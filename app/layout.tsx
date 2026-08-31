import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { SiteProvider } from "@/components/SiteProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { MenuOverlay } from "@/components/MenuOverlay";
import { Cursor } from "@/components/Cursor";
import { site } from "@/lib/site";
import "./globals.css";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex.variable} h-full`}>
      <body className="min-h-full">
        <SiteProvider>
          <a
            href="/works"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[4000] focus:bg-white focus:px-3 focus:py-2"
          >
            Skip to works
          </a>
          <Loader />
          <Cursor />
          <SmoothScroll />
          <Nav />
          <MenuOverlay />
          <div className="grain" aria-hidden />
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
