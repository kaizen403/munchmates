import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lexend } from "next/font/google";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

const lexend = Lexend({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MunchMate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
