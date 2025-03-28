"use client"

import {motion} from "framer-motion"
import PageTransition from "@/src/components/animations/page-transition"
import HeroSection from "@/src/components/sections/hero-section"
import FAQAccordion from '@/src/components/sections/faq'
import Footer from "@/src/components/sections/footer"
import Image from "next/image";


const sectionVariants = {
  hidden: {opacity: 0, y: 100},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0, 1]
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0, 1]
    }
  }
};


export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <HeroSection/>

        {/* What Is section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={sectionVariants}
          className="min-h-screen bg-[#362741] py-16 md:py-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#281c30]/30"/>

          <div className="w-full px-4 sm:px-6 lg:px-16 relative">
            <motion.div
              variants={sectionVariants}
              className="flex flex-col items-start mb-8 md:mb-16"
            >
              <span className="text-hack-purple text-sm tracking-[0.3em] uppercase mb-4">
                About the Event
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-hack-white leading-tight max-w-4xl">
                What is <br className="hidden sm:block"/>Laneway Hacks?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                {whatIsContent.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{delay: 0.1 * index}}
                    className="group p-6 md:p-8 bg-[#281c30]/50 backdrop-blur-sm border border-[#5B447A]
                       hover:border-hack-purple transition-all duration-500"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-hack-purple
                           group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-base md:text-lg text-hack-white/80 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{delay: 0.2}}
                className="relative h-[300px] md:h-full md:min-h-[600px] rounded-lg overflow-hidden order-first md:order-last"
              >
                <Image
                  src="/images/2.png"
                  alt="Students collaborating on hardware"
                  className="object-cover w-full h-full"
                  width={700}
                  height={700}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281c30] via-transparent to-transparent"/>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Participate section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={sectionVariants}
          className="min-h-screen bg-[#281c30] py-16 md:py-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#362741]/30"/>

          <div className="w-full px-4 sm:px-6 lg:px-16 relative">
            <motion.div
              variants={sectionVariants}
              className="flex flex-col items-start md:items-end text-left md:text-right mb-8 md:mb-16"
            >
              <span className="text-hack-purple text-sm tracking-[0.3em] uppercase mb-4">
                Benefits
              </span>
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-hack-white leading-tight max-w-4xl md:ml-auto">
                Why <br className="hidden sm:block"/>Participate?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{delay: 0.2}}
                className="relative h-[300px] md:h-full md:min-h-[600px] rounded-lg overflow-hidden order-first"
              >
                <Image
                  src="/images/1.png"
                  alt="Hackathon participants"
                  className="object-cover w-full h-full"
                  width={700}
                  height={700}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281c30] via-transparent to-transparent"/>
              </motion.div>
              <div className="flex flex-col gap-4 md:gap-8">
                {whyParticipateContent.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{delay: 0.1 * index}}
                    className="group p-6 md:p-8 bg-[#362741]/50 backdrop-blur-sm border border-[#5B447A]
                       hover:border-hack-purple transition-all duration-500"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-hack-purple
                           group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-base md:text-lg text-hack-white/80 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={sectionVariants}
          className="w-full bg-[#281C30] py-24 md:py-40 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-32"/>
          <div className="w-full px-4 sm:px-6 lg:px-16 mb-16 md:mb-24">
            <motion.div variants={sectionVariants} className="mb-16">
              <span className="text-hack-purple text-sm tracking-[0.3em] uppercase mb-4 block">
                Questions & Answers
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-hack-white leading-[0.9] max-w-4xl">
                Frequently Asked<br className="hidden sm:block"/> Questions
              </h2>
            </motion.div>
          </div>
          <FAQAccordion/>
        </motion.section>

        <Footer/>
      </main>
    </PageTransition>
  )
}

const whatIsContent = [
  {
    title: "8 Hour Code Party!",
    content: "A full day of creativity and coding where you and your squad can bring your wildest tech ideas to life! Whether you're just starting or you're already a coding pro, there's room for everyone to dive in and create something unforgettable."
  },
  {
    title: "Melbourne's Largest Teen Tech Fest",
    content: "Join hundreds of fellow teens at Melbourne's largest high school hackathon, right in the heart of the CBD! It’s a day full of energy, coding, and digital creativity all powered by young minds pushing the boundaries of tech."
  },
  {
    title: "Hardware Hacking Heaven",
    content: "Bring your ideas to life with soldering, circuit boards, and everything in between! If you can dream it, you can build it – no idea is too wacky or out-there."
  }
];

const whyParticipateContent = [
  {
    title: "Level Up Your Skills!",
    content: "Pick up new coding tricks, design hacks, and teamwork tactics. Our expert mentors are your cheat codes - they'll help you unlock achievements you never thought possible!"
  },
  {
    title: "Make Friends, Not Just Code",
    content: "Meet your people! Connect with other teens who get just as excited about tech as you are. Between coding challenges, board games to karaoke breaks, the fun doesn't stop when the project does."
  },
  {
    title: "Win Epic Loot",
    content: "Show off your skills and earn amazing rewards! (and bragging rights) From cutting-edge tech gadgets to cool swag, your friends will wish they came along!"
  },
  {
    title: "Create Your Digital Legacy",
    content: "Build a project that you can show off to future schools and employers! Plus, you'll have an actual working project to show when your parents ask, \"What do you even do on that computer all day?\""
  }
];