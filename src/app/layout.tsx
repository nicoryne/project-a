import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigations/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project A | CEL",
  description: "CEL Statistics Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <hr className="w-[90%] mx-auto rounded-full border-[#242424]" />
        {children}
        </body>
    </html>
  );
}
