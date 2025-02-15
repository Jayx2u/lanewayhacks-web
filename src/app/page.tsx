"use client"
import { BackgroundBeams } from "@/src/components/ui/background-beams"
import Image from 'next/image'
// import { motion } from "framer-motion"
// import { FaStar } from "react-icons/fa"

export default function Home() {

  return (
    <div className="h-screen w-full bg-[#281c30] relative flex flex-col items-end justify-start antialiased p-12 text-unbounded">
      <div className="relative z-10 text-lg md:text-7xl p-4">
        <Image
          src="/lanewayhacks-logo.png"
          alt="LanewayHacks"
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-right font-sans font-bold mb-8"
          width={700}
          height={700}
        />
      </div>
      <p className="text-[#D9D5EE] max-w-2xl my-2 text-sm md:text-lg text-right pr-8 pl-4 font-unbounded">
        In Q3 2025, we will be hosting Melbourne&apos;s largest hackathon for high school students: Laneway Hacks 2025! Student participants will embark on an exhilarating 8-hour journey to create original projects that push the boundaries of their technical skills and creativity.
      </p>

      {/* Vertical Text Pattern */}
      <div className="fixed right-4 top-0 h-full flex items-center justify-center writing-mode-vertical z-20">
        <div className="transform rotate-180 whitespace-nowrap tracking-widest text-[#C5B5D9] opacity-80 text-lg font-thin" style={{ writingMode: 'vertical-rl' }}>
          HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON • HACKATHON
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}