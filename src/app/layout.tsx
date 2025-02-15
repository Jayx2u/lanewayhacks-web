import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Geist_Mono({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LanewayHacks",
  description: "Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
