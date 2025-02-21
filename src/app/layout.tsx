import type {Metadata} from "next";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Unbounded} from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laneway Hacks",
  description: "Melbourne's largest hackathon for high school students",
  openGraph: {
    title: "Laneway Hacks",
    description: "Melbourne's largest hackathon for high school students",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Laneway Hacks 2025",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laneway Hacks",
    description: "Melbourne's largest hackathon for high school students",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${unbounded.variable} bg-[#281c30]`}>
    {children}

    <Analytics/>
    <SpeedInsights/>
    </body>
    </html>
  );
}