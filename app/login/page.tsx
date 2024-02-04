"use client";
import React from "react";
import { Bad_Script } from "next/font/google";
import { Button } from "@/components/ui/Movingborder";
import Link from "next/link";

import { redirect } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/Cardgradient";
const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export default function SparklesPreview() {
  return (
    <div
      className="relative w-full bg-black flex flex-col items-center bg-grid-white/[0.1] justify-center overflow-hidden rounded-md"
      style={{ height: "100vh" }} // Ensures this is the lowest layer by using a negative z-index
    >
      <div className="z-50 ">
        <h1
          style={{ fontFamily: badscript.style.fontFamily }}
          className="md:text-7xl text-5xl tracking-normal lg:text-6xl font-bold text-center text-white relative z-10"
        >
          Getting Started
        </h1>
      </div>
      <div
        className="self-center
         mt-10 lg:w-1/2 sm:w-3/4 mx-3 z-50"
      >
        <TextGenerateEffect words={words} />
      </div>
      <div
        className="self-center flex flex-col items-center
         mt-10 lg:w-1/2 sm:w-3/4 mx-3 z-50"
      >
        <h1
          style={{ fontFamily: badscript.style.fontFamily }}
          className="md:text-7xl text-2xl tracking-wide lg:text-6xl font-bold text-center text-white relative z-10"
        >
          Create an Account
        </h1>
        <div></div>
      </div>
    </div>
  );
}
