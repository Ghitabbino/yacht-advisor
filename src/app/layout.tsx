import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
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
  title: "Yacht Advisor | Prima i bisogni. Poi lo yacht giusto.",
  description:
    "Consulenza indipendente e riservata per armatori: ogni armatore è unico. Capendo i vostri bisogni, indichiamo la soluzione su misura. Nessun legame con cantieri o broker.",
  keywords: ["yacht", "yacht advisor", "consulenza nautica", "charter", "broker"],
  metadataBase: new URL("https://ghitabbino.github.io/yacht-advisor"),
  openGraph: {
    title: "Yacht Advisor | Prima i bisogni. Poi lo yacht giusto.",
    description: "Ogni armatore è unico. Capendo i vostri bisogni, indichiamo la soluzione su misura.",
    type: "website",
    locale: "it_IT",
    url: "https://ghitabbino.github.io/yacht-advisor/",
  },
  alternates: {
    canonical: "/",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${cinzel.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFCFB] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
