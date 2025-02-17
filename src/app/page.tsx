"use client"
import Image from 'next/image'
import { Analytics } from "@vercel/analytics/react"
import { PiStarFourFill } from "react-icons/pi"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/src/components/animations/background-beams"
import VerticalScroll from "@/src/components/animations/vertical-inf-text-scroll"
import MaskedText from "@/src/components/animations/masked-text"
import EmailSignup from '@/src/components/ui/input'

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#281c30] relative flex flex-col items-end justify-start antialiased p-8 md:p-12 text-unbounded">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-lg md:text-7xl p-2 text-right"
      >
        <Image
          src="/laneway-logo.png"
          alt="LanewayHacks"
          className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          width={700}
          height={700}
        />
      </motion.div>

      <div className="relative z-10 text-right pr-8">
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t-2 border-[#C5B5D9] my-4"
        />
        <MaskedText
          text="We will be hosting Melbourne's largest hackathon for high school students: Laneway Hacks 2025! Student participants will embark on an exhilarating 8-hour journey to create original projects that push the boundaries of their technical skills and creativity."
          className="text-[#D9D5EE] max-w-2xl my-2 text-lg md:text-xl pl-0 md:pl-4 font-unbounded"
        />
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t-2 border-[#C5B5D9] my-4"
        />
        <MaskedText
          text="REGISTER YOUR INTEREST"
          className="text-[#B791FF] text-lg md:text-ml font-unbounded font-black"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-end md:justify-end font-unbounded"
        >
          <EmailSignup />
        </motion.div>
      </div>

      <div className="relative md:absolute justify-end bottom-8 left-0 md:left-8 flex flex-col z-10 font-unbounded text-right md:text-left mt-16 pt-8 px-8 md:px-0">
        <div className="text-[#B791FF] text-4xl md:text-6xl font-bold flex items-center md:gap-2 w-full justify-end md:justify-start">
          <MaskedText
            text="Q3 2025"
            className="order-2 md:order-1"
          />
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <PiStarFourFill className="order-1 md:order-2 mr-2"/>
          </motion.div>
        </div>
        <MaskedText
          text="MELBOURNE CBD, AUSTRALIA"
          className="text-[#D9D5EE] text-lg md:text-xl font-medium mt-2"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed right-4 top-0 h-full flex items-center justify-center writing-mode-vertical z-20"
      >
        <VerticalScroll />
      </motion.div>
      <BackgroundBeams />
      <Analytics/>
    </div>
  )
}