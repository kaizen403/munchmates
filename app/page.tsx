import SparklesCore from "@/components/ani_ui/Particles";
import React from "react";
import { Bad_Script } from "next/font/google";
import { Button } from "@/components/ani_ui/Movingborder";
import Link from "next/link";
import Image from "next/image";
import Track from "@/components/Track";
const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="relative w-full bg-black flex flex-col items-center bg-grid-red-400/[0.1] justify-center overflow-hidden rounded-md"
      style={{ height: "100vh", overflowY: "auto" }} // Ensures this is the lowest layer by using a negative z-index
    >
      <div
        className="absolute inset-0 w-full"
        style={{ minHeight: "100%", zIndex: 5 }}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FF0000"
        />
      </div>
      <div className="flex flex-col z-50 -mt-72">
        <h1 className="md:text-7xl pt-72 text-5xl tracking-normal lg:text-6xl font-bold text-center text-white relative z-10">
          Cupid Match
        </h1>

        <div>
          <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-full" />
          <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[5px] w-full blur-sm" />
          <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-600 to-transparent h-px w-full" />
        </div>
        <p
          className="my-1 text-white p-3 text-center tracking-wide text-lg"
          style={{ fontFamily: badscript.style.fontFamily }}
        >
          A dating app for college students that matches singles with their
          soulmates using an innovative matching algorithm.
        </p>
        <div className="flex flex-col items-center">
          <Image alt={"dwjo"} src={"/heart.svg"} width={130} height={130} />
        </div>
        <Track />
        <div
          className="self-center
         mt-8 z-50"
        >
          <Link href="/getstarted">
            <div className="flex flex-col items-center">
              <Button
                borderRadius="2px"
                className="bg-black text-white text-lg dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Create Account
              </Button>
            </div>
          </Link>
          <p className="my-3 text-white text-sm">
            Already have an account?{" "}
            <Link className="underline text-pink-600" href={"/login"}>
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
