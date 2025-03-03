"use client"
import Image from 'next/image'
import {motion} from "framer-motion"
import {PiStarFourFill} from "react-icons/pi"
import {BackgroundBeams} from "@/src/components/animations/background-beams"
import VerticalScroll from "@/src/components/animations/vertical-inf-text-scroll"
import MaskedText from "@/src/components/animations/masked-text"
import EmailSignup from '@/src/components/ui/input'
import {FaDiscord} from 'react-icons/fa'

export default function HeroSection() {
  return (
    <div
      className="min-h-screen w-full bg-[#281c30] relative flex flex-col items-end justify-start antialiased p-8 pr-16 text-unbounded overflow-hidden">

      {/* Noise Texture */}
      <Image
        src="/elements/noise.png"
        alt="Noise Texture"
        fill
        className="absolute inset-0 object-cover mix-blend-overlay opacity-20 z-0"
        priority
        draggable={false}
      />

      {/* Background Elements */}
      <Image
        src="/elements/star-1.png"
        alt="Background Element 1"
        width={500}
        height={500}
        className="absolute -top-48 -left-48 z-[1]"
        priority
        draggable={false}
      />

      {/* Hero Section */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.2}}
        className="relative z-10 w-full max-w-[700px] mt-4 md:mt-8"
      >
        <Image
          src="/laneway-logo.png"
          alt="LanewayHacks"
          className="w-full h-auto"
          width={700}
          height={700}
          priority
          draggable={false}
        />
      </motion.div>

      <div className="relative z-10 text-right w-full max-w-2xl pr-4 md:pr-8">
        <motion.hr
          initial={{scaleX: 0}}
          animate={{scaleX: 1}}
          transition={{duration: 0.8, delay: 0.4}}
          className="border-t-2 border-[#C5B5D9] my-4"
        />
        <MaskedText
          text="We will be hosting Melbourne's largest hackathon for high school students: Laneway Hacks 2025! Student participants will embark on an exhilarating 8-hour journey to create original projects that push the boundaries of their technical skills and creativity."
          className="text-hack-white my-2 text-base md:text-lg lg:text-xl pl-0 md:pl-4 font-unbounded"
        />
        <motion.hr
          initial={{scaleX: 0}}
          animate={{scaleX: 1}}
          transition={{duration: 0.8, delay: 0.6}}
          className="border-t-2 border-[#C5B5D9] my-4"
        />
        <MaskedText
          text="REGISTER YOUR INTEREST"
          className="text-hack-purple text-base md:text-lg font-unbounded font-black mb-2"
        />
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.8}}
          className="flex justify-end md:justify-end font-unbounded"
        >
          <EmailSignup/>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 1}}
          className="flex flex-col items-end justify-end mt-8"
        >
          <MaskedText
            text="JOIN THE CONVERSATION"
            className="text-hack-purple text-base md:text-lg font-unbounded font-black mb-4"
          />
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-hack-button px-6 py-3 text-hack-white
               hover:bg-[#8B7AA1] transition-colors duration-300
               font-medium shadow-lg shadow-[#281c30]/50"
          >
            <FaDiscord size={20}/>
            Join Discord
          </a>
        </motion.div>
      </div>

      <div
        className="relative w-full md:absolute md:bottom-8 md:left-8 flex flex-col z-10 font-unbounded text-right md:text-left mt-16 pt-8 px-4 md:px-0">
        <div
          className="text-hack-purple text-3xl md:text-4xl lg:text-6xl font-bold flex items-center gap-2 w-full justify-end md:justify-start">
          <MaskedText
            text="Q3 2025"
            className="order-2 md:order-1"
          />
          <motion.div
            initial={{rotate: -180, opacity: 0}}
            animate={{rotate: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
          >
            <PiStarFourFill className="order-1 md:order-2"/>
          </motion.div>
        </div>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 1}}
          className="text-hack-white text-base md:text-lg lg:text-xl font-medium mt-2"
        >
          MELBOURNE CBD, AUSTRALIA
        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.8, delay: 1.2}}
        className="absolute right-4 top-0 h-full items-center justify-center writing-mode-vertical z-20 flex md:flex"
      >
        <VerticalScroll/>
      </motion.div>
      <BackgroundBeams className="hidden md:block"/>
    </div>
  )
}