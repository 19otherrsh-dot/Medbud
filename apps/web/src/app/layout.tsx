import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MedBud — World-Class Indian Healthcare, Made Accessible",
  description:
    "MedBud is the trusted AI-powered companion that connects international patients with verified Indian hospitals. From discovery to recovery — transparent pricing, visa support, and continuity of care.",
  keywords: [
    "medical tourism India",
    "best hospitals in India",
    "affordable surgery India",
    "medical travel facilitator",
    "AI healthcare matching",
    "JCI NABH hospitals India",
  ],
  openGraph: {
    title: "MedBud — World-Class Indian Healthcare, Made Accessible",
    description:
      "AI-powered medical tourism platform connecting international patients with top Indian hospitals. Transparent pricing, full logistics, and post-treatment care.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
