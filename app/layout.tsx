"use client";
import { RecoilRoot } from "recoil";
import { Providers } from "./providers";
import { Lexend } from "next/font/google";
import Navbar from "../components/Shared/Navbar"; // Import the Navbar component
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-black`}>
        <RecoilRoot>
          <Providers>
            <Navbar /> {/* Add the Navbar component here */}
            {children}
          </Providers>
        </RecoilRoot>
      </body>
    </html>
  );
}
