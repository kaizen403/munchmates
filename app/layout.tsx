"use client";
import { RecoilRoot } from "recoil";
import { Providers } from "./providers";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <RecoilRoot>
          <Providers>{children}</Providers>
        </RecoilRoot>
      </body>
    </html>
  );
}
