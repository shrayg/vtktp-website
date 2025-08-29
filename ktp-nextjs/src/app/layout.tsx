import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kappa Theta Pi - Virginia Tech",
  description: "Alpha Gamma Chapter of Kappa Theta Pi at Virginia Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center`}>
        <Sidebar />
        <main className="min-h-screen bg-[#f4f8fb] w-full max-w-7xl pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
