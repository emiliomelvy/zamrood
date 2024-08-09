import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zamrood by Pandooin | Premium Travel Experiences in Indonesia",
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
