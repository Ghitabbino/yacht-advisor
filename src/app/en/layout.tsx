import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yacht Advisor | Needs first. Then the right yacht.",
  description:
    "Independent, confidential consultancy: every owner is unique. By understanding your needs, we find the tailored solution. No yard or broker ties.",
  keywords: ["yacht", "yacht advisor", "consultancy", "charter", "broker"],
  metadataBase: new URL("https://ghitabbino.github.io/yacht-advisor"),
  openGraph: {
    title: "Yacht Advisor | Needs first. Then the right yacht.",
    description: "Every owner is unique. We understand your needs and we find the tailored solution.",
    type: "website",
    locale: "en_US",
    url: "https://ghitabbino.github.io/yacht-advisor/en/",
  },
  alternates: {
    canonical: "/en/",
    languages: {
      "it-IT": "/",
      "en-US": "/en/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FDFCFB] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
