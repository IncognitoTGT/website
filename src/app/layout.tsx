import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TGT",
  description: "Hi, I'm a developer that focuses on ReactJS and SolidJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/tgt.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
