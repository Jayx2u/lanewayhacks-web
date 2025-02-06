"use client"
import { BackgroundBeams } from "@/src/components/ui/background-beams"
import Image from 'next/image'

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="relative z-10 text-lg md:text-7xl">
          <Image
          src="/temp-logo.png"
          alt="LanewayHacks"
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8"
          width={500}
          height={500}
        />
        </div>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm md:text-lg text-center relative z-10 mb-10">
          In Q3 2025, we will be hosting Melbourne's largest hackathon for high school students: Laneway Hacks 2025! Student participants will embark on an exhilarating 8-hour journey to create original projects that push the boundaries of their technical skills and creativity.
        </p>
        <div className="flex items-center justify-center w-full gap-2 relative z-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full max-w-md bg-neutral-950 placeholder:text-neutral-700 text-white px-4 py-2"
          />
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors">
          Join
        </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

