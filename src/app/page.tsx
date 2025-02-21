"use client"
import {Analytics} from "@vercel/analytics/react"
import {motion} from "framer-motion"
import PageTransition from "@/src/components/animations/page-transition"
import HeroSection from "@/src/components/sections/hero-section"
import StickyFooter from "@/src/components/sections/sticky-footer"

const sectionVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0}
}

const cardVariants = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
}

export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <HeroSection/>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={sectionVariants}
          transition={{duration: 0.8, delay: 0.2}}
          className="min-h-screen bg-[#362741] py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={sectionVariants}
              className="text-4xl md:text-5xl font-bold mb-8 text-[#D9D5EE]"
            >
              What is LanewayHacks?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {whatIsContent.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{duration: 0.8, delay: 0.4 + index * 0.2}}
                  className="p-6 rounded-lg bg-[#281c30] border border-[#5B447A]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#B791FF]">
                    {item.title}
                  </h3>
                  <p className="text-[#D9D5EE]">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={sectionVariants}
          transition={{duration: 0.8, delay: 0.2}}
          className="min-h-screen bg-[#281c30] py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={sectionVariants}
              className="text-4xl md:text-5xl font-bold mb-8 text-[#D9D5EE]"
            >
              Why Participate?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {whyParticipateContent.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{duration: 0.8, delay: 0.4 + index * 0.2}}
                  className="p-6 rounded-lg bg-[#362741] border border-[#5B447A]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#B791FF]">
                    {item.title}
                  </h3>
                  <p className="text-[#D9D5EE]">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <StickyFooter/>
        <Analytics/>
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