"use client"
import {motion} from "framer-motion"
import PageTransition from "@/src/components/animations/page-transition"
import HeroSection from "@/src/components/sections/hero-section"
import StickyFooter from "@/src/components/sections/sticky-footer"
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
      duration: 0.8,
      ease: [0.25, 0.1, 0, 1]
    }
  }
};

export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <HeroSection/>

        {/* Left-aligned What Is section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={sectionVariants}
          className="min-h-screen bg-[#362741] py-16 md:py-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#281c30]/30"/>

          <div className="container mx-auto px-4 sm:px-6 relative">
            <motion.div
              variants={sectionVariants}
              className="flex flex-col items-start mb-8 md:mb-16"
            >
              <span className="text-hack-purple text-sm tracking-[0.3em] uppercase mb-4">
                About the Event
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-hack-white leading-tight max-w-4xl">
                What is <br className="hidden sm:block"/>LanewayHacks?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-8">
                {whatIsContent.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    transition={{duration: 0.8, delay: 0.2 * index}}
                    className="group p-6 md:p-8 bg-[#281c30]/50 backdrop-blur-sm border border-[#5B447A]
                       hover:border-hack-purple transition-all duration-500"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-hack-purple
                           group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-hack-white/80 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={cardVariants}
                className="relative h-[300px] md:h-full md:min-h-[600px] rounded-lg overflow-hidden order-first md:order-last"
              >
                <Image
                  src="/images/1.png"
                  alt="Students collaborating"
                  className="object-cover w-full h-full"
                  width={700}
                  height={700}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281c30] via-transparent to-transparent"/>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Right-aligned Why Participate section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-100px"}}
          variants={sectionVariants}
          className="min-h-screen bg-[#281c30] py-16 md:py-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#362741]/30"/>

          <div className="container mx-auto px-4 sm:px-6 relative">
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
                variants={cardVariants}
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
                    variants={cardVariants}
                    transition={{duration: 0.8, delay: 0.2 * index}}
                    className="group p-6 md:p-8 bg-[#362741]/50 backdrop-blur-sm border border-[#5B447A]
                       hover:border-hack-purple transition-all duration-500"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-hack-purple
                           group-hover:translate-x-2 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-hack-white/80 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <StickyFooter/>
      </main>
    </PageTransition>
  )
}

const whatIsContent = [
  {
    title: "8-Hour Challenge",
    content: "An intensive hackathon where high school students collaborate, code, and create innovative solutions in just 8 hours. Perfect for both beginners and experienced coders."
  },
  {
    title: "Melbourne's Largest",
    content: "Join the biggest high school hackathon in Melbourne, bringing together young minds from across the city. Experience the vibrant tech community in the heart of CBD."
  },
  {
    title: "Tech & Creativity",
    content: "Push the boundaries of technical skills while fostering creativity in problem-solving. Work with modern tools and technologies to bring your ideas to life."
  }
];

const whyParticipateContent = [
  {
    title: "Learn & Grow",
    content: "Gain hands-on experience with new technologies and develop valuable problem-solving skills. Get mentorship from industry professionals and learn best practices."
  },
  {
    title: "Network",
    content: "Connect with like-minded students and industry mentors from Melbourne's tech community. Build relationships that extend beyond the hackathon."
  },
  {
    title: "Win Prizes",
    content: "Compete for exciting prizes and recognition for your innovative solutions. Show off your creativity and technical skills to win awards across various categories."
  },
  {
    title: "Build Portfolio",
    content: "Create projects that showcase your skills and creativity to future opportunities. Add real-world project experience to your resume and academic portfolio."
  }
];