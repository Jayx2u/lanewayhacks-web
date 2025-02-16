"use client"
import { BackgroundBeams } from "@/src/components/ui/background-beams"
import EmailSignup from '@/src/components/ui/input'
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/react"
import { PiStarFourFill } from "react-icons/pi";

export default function Home() {

  return (
    <div className="h-screen w-full bg-[#281c30] relative flex flex-col items-end justify-start antialiased p-8 md:p-12 text-unbounded">
      <div className="relative z-10 text-lg md:text-7xl p-2 text-right">
        <Image
          src="/laneway-logo.png"
          alt="LanewayHacks"
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          width={700}
          height={700}
        />
      </div>
      <div className="relative z-10 text-center md:text-right pr-8">
        <hr className="border-t-2 border-[#C5B5D9] my-4" />
        <p className="text-[#D9D5EE] max-w-2xl my-2 text-lg md:text-xl pl-0 md:pl-4 font-unbounded">
          We will be hosting Melbourne&apos;s largest hackathon for high school students: Laneway Hacks 2025! Student participants will embark on an exhilarating 8-hour journey to create original projects that push the boundaries of their technical skills and creativity.
        </p>
        <hr className="border-t-2 border-[#C5B5D9] my-4" />
        <div className="text-[#B791FF] text-lg md:text-ml font-unbounded font-black">
          REGISTER YOUR INTEREST
        </div>
        <div className="flex justify-center md:justify-end font-unbounded">
          <EmailSignup />
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className="relative md:absolute bottom-8 left-0 md:left-8 flex flex-col z-10 font-unbounded text-left mt-16 pt-8 px-8 md:px-0">
        <div className="text-[#B791FF] text-4xl md:text-6xl font-bold flex items-center gap-2">
          <span>Q3 2025</span> <PiStarFourFill />
        </div>
        <div className="text-[#D9D5EE] text-lg md:text-xl font-medium mt-2">
          MELBOURNE CBD, AUSTRALIA
        </div>
      </div>

      {/* Vertical Text Pattern */}
      <div className="fixed right-4 top-0 h-full flex items-center justify-center writing-mode-vertical z-20">
        <div className="transform rotate-180 whitespace-nowrap tracking-widest text-[#C5B5D9] opacity-80 text-lg font-thin" style={{ writingMode: 'vertical-rl' }}>
          <span className="flex flex-row items-center gap-2">
            HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON
          </span>
        </div>
      </div>
      <BackgroundBeams />
      <Analytics/>
    </div>
  )
}