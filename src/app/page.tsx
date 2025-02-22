"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Ticket from "./components/ticket";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsFinal(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative flex flex-col min-h-screen max-h-screen overflow-hidden">
      <Image
        src="/images/left-spotlight.svg"
        width={1836.93}
        height={1843.43}
        alt="Left Spotlight"
        className="fixed left-[50px] mix-blend-soft-light top-0 z-[30] w-screen h-screen pointer-events-none"
      />

      <Image
        src="/images/right-spotlight.svg"
        width={1132.53}
        height={1724.1}
        alt="Right Spotlight"
        className="fixed right-[-450px] mix-blend-soft-light top-0 z-[30] w-screen h-screen pointer-events-none"
      />
      {!isAnimating && (
        <div className="absolute top-10 left-10 w-1/2 h-full z-40">
          <p className="text-2xl font-fiveBySeven">
            TO:
            <span className="ml-6 font-conte text-2xl opacity-50">
              demoer name
            </span>
          </p>
          <p className="text-2xl font-fiveBySeven">
            FROM:
            <span className="ml-6 font-conte text-2xl opacity-50">Socratica</span>
          </p>

          <button
            onClick={() => {
              setIsAnimating(true);
              console.log("clicked");
            }}
            className="z-50 mt-8 flex flex-row items-center gap-2 bg-[#212121] text-white px-6 py-3 border-2 border-white/30 shadow-letter hover:bg-[#333333] hover:shadow-none"
          >
            <Image
              src="/images/asterism.svg"
              alt="Asterism"
              width={16}
              height={16}
            />
            <p className="uppercase text-base font-fiveBySevenBold">
              Open Your Letter
            </p>
          </button>
        </div>
      )}
      
      {!isAnimating && (
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <Image src="/backgrounds/right-side.svg" alt="Background" layout="fill" objectFit="cover" />
        </div>
      )}

      <div
        className={`absolute top-0 right-0 w-full h-full transition-transform duration-1000 ${
          isAnimating ? "transform translate-x-0" : "transform translate-x-1/2"
        }`}
      >
        {isAnimating && (
          <Image
            src="/backgrounds/background-middle.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              isFinal ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {isFinal && (
          <Image
            src="/backgrounds/background-final.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000 opacity-100"
          />
        )}

        {isFinal && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="relative">
              <Image
                src="/images/letter.svg"
                alt="Letter"
                width={500}
                height={500}
                className="transition-opacity duration-1000 opacity-100"
              />
              <div className="absolute inset-0 top-[5.5rem] left-[5.75rem]">
                <p className="text-3xl font-conte text-black opacity-50">Dear Demoer,</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 right-0 w-1/2 h-auto z-10 transition-transform duration-1000 ${
          isAnimating ? "transform translate-y-1/2" : "transform translate-y-0"
        }`}
        style={{
          transform: isFinal
            ? "translate(-130%, 150%) rotate(15deg)"
            : isAnimating
            ? "translate(-50%, 50%) rotate(15deg)"
            : "rotate(40deg) translate(-375px, 150px)",
        }}
      >
        <Ticket />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-grow" />
        <Image
          src={isAnimating ? "/images/socratica-transparent.svg" : "/images/socratica.svg"}
          alt="Socratica"
          layout="responsive"
          width={2284}
          height={462}
        />
      </div>
    </div>
  );
}
