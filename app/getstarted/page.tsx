import React from "react";
import { Caveat, Bad_Script } from "next/font/google";
import Form from "@/components/Form";

const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: "700",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="w-full bg-black flex flex-col items-center bg-dot-red-900 justify-center rounded-md">
      <div className="z-50 pt-20">
        <h1
          className="md:text-8xl font-lexend text-6xl tracking-wide lg:text-7xl font-extrabold text-center text-red-700 relative z-10"
          style={{ fontFamily: caveat.style.fontFamily }}
        >
          Get Started
          <div className="-mt-1 flex justify-center">
            <svg
              height="20"
              width="400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 20"
            >
              <path
                d="M0 10 Q50 20, 100 10 T200 10"
                fill="none"
                stroke="red"
                strokeWidth="4"
              />
            </svg>
          </div>
        </h1>
      </div>
      <div className="self-center mt-6 lg:w-1/2 sm:w-3/4 mx-10 z-50"></div>
      <div className="self-center flex flex-col items-center mt-10 lg:w-1/2 sm:w-3/4 mx-3 z-50">
        <h1
          className="md:text-5xl mb-5 text-4xl tracking-wide lg:text-6xl font-bold text-center text-red-700 relative z-10"
          style={{ fontFamily: caveat.style.fontFamily }}
        >
          Basic Info:
        </h1>
        <div className="text-center text-white mb-6">
          Find your perfect match effortlessly. Share details when you are
          ready—not with us, but with them!{" "}
        </div>
        <div className="w-full p-4 rounded-md shadow-lg">
          <Form />
        </div>
      </div>
      <div className="mt-10 mb-6 flex items-center text-white">
        <span>Matching based on shared interests and favorite meals</span>
      </div>
    </div>
  );
}
