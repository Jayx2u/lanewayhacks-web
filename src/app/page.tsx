"use client"
import { BackgroundBeams } from "@/src/components/ui/background-beams"
import Image from 'next/image'
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

export default function BackgroundBeamsDemo() {
  const patternText = "HACKATHON";

  return (
    <div className="h-screen w-full bg-[#281c30] relative flex flex-col items-end justify-start antialiased p-4 text-unbounded">
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
      <div className="fixed right-8 top-0 h-screen overflow-hidden pointer-events-none z-20">
        <motion.div
          className="absolute right-0 h-full text-[#D9D5EE] opacity-20 whitespace-nowrap tracking-widest font-bold flex flex-col items-center justify-start"
          style={{ writingMode: 'vertical-rl' }}
          initial={{ y: "-100%" }}
          animate={{
            y: "100%"
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 my-2">
              {patternText}
              <FaStar className="rotate-90" size={12} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second one justttt in case */}
      <div className="fixed right-8 top-0 h-screen overflow-hidden pointer-events-none z-20">
        <motion.div
          className="absolute right-0 h-full text-[#D9D5EE] opacity-20 whitespace-nowrap tracking-widest font-unbounded flex flex-col items-center justify-start"
          style={{ writingMode: 'vertical-rl' }}
          initial={{ y: "0%" }}
          animate={{
            y: "300%"
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 my-2">
              {patternText}
              <FaStar className="rotate-90" size={12} />
            </div>
          ))}
        </motion.div>
      </div>

      <BackgroundBeams />
    </div>
  )
}