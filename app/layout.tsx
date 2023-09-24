import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Prananta",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scroll-smooth bg-slate-950 antialiased select-none"
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
