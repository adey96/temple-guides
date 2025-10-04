import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indian Temples Encyclopedia - Complete Guide to Temples Across India",
  description:
    "Discover comprehensive information about temples across India. Learn about their history, architecture, mythological significance, and pilgrimage importance. Complete encyclopedia of Indian temples.",
  keywords:
    "Indian temples, temple encyclopedia, temple history, temple architecture, Hindu temples, pilgrimage sites, temple guide, India temples",
  openGraph: {
    title: "Indian Temples Encyclopedia",
    description:
      "Complete guide to temples across India with detailed information about history, architecture, and significance",
    images: ["/images/temple-guides-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Temples Encyclopedia",
    description:
      "Complete guide to temples across India with detailed information about history, architecture, and significance",
    images: ["/images/temple-guides-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
