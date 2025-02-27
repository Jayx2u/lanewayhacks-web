import { useState, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
    margin: "100px 0px"
  });

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  const faqItems = [
    {
      id: '01',
      question: "Who Can Join LanewayHacks?",
      answer: "Any high school student in Melbourne can join! Whether you're a coding pro or just starting out, all skill levels are welcome. You just need curiosity and enthusiasm for technology!"
    },
    {
      id: '02',
      question: "Do I Need To Know How To Code?",
      answer: "Not at all! We welcome complete beginners. Our mentors will help you learn the basics and guide you throughout the event. What matters most is your willingness to learn and create."
    },
    {
      id: '03',
      question: "What Should I Bring?",
      answer: "Bring your laptop, charger, and any hardware you want to hack with. We'll provide food, drinks, and all the essential hardware components you might need for your projects."
    },
    {
      id: '04',
      question: "How Do Teams Work?",
      answer: "You can form teams of up to 4 people. Don't have a team? No worries! We'll have team-forming activities at the start of the event to help you find your perfect squad."
    },
    {
      id: '05',
      question: "What Kind Of Projects Can I Build?",
      answer: "Anything you can imagine! From websites and apps to hardware hacks and games. We encourage creative, weird, and wonderful ideas that solve problems or just make people smile."
    },
    {
      id: '06',
      question: "Is There Any Cost To Join?",
      answer: "Nope! LanewayHacks is completely free. We provide the venue, food, mentorship, and hardware components - all you need to bring is your creativity!"
    },
    {
      id: '07',
      question: "Will There Be Food?",
      answer: "Yes! We'll keep you energized with meals, snacks, and drinks throughout the event. We cater to various dietary requirements - just let us know in advance."
    },
    {
      id: '08',
      question: "How Do I Register?",
      answer: "Click the 'Register Now' button at the top of the page to secure your spot. Be quick - spaces fill up fast! You'll receive a confirmation email with all the details you need."
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      className="w-full bg-[#281C30] text-[#D9D5EE]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {faqItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="border-b border-[#3D2E4A] overflow-hidden"
          variants={itemVariants}
          onHoverStart={() => setHoveredItem(index)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <motion.div
            className="flex items-center justify-between p-6 cursor-pointer relative"
            onClick={() => toggleItem(index)}
            whileTap={{scale: 0.98}}
          >
            <div className="flex items-start">
              <motion.div
                className="text-[#D9D5EE] mr-4 opacity-70"
                animate={{
                  color: hoveredItem === index ? '#B791FF' : '#D9D5EE',
                  opacity: hoveredItem === index ? 1 : 0.7,
                  transition: {duration: 0.3}
                }}
              >
                ({item.id})
              </motion.div>
              <motion.h3
                className="text-lg font-medium text-[#D9D5EE]"
                animate={{
                  color: openItem === index ? '#B791FF' : hoveredItem === index ? '#B791FF' : '#D9D5EE',
                  transition: {duration: 0.3}
                }}
              >
                {item.question}
              </motion.h3>
            </div>
            <motion.div
              className="flex items-center"
              animate={{
                rotate: openItem === index ? 180 : 0,
                transition: {duration: 0.5, type: "spring", stiffness: 200}
              }}
            >
              <svg
                className="w-6 h-6 text-[#B791FF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </motion.div>

            {/* Animated line indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-[#B791FF]"
              initial={{width: 0}}
              animate={{
                width: hoveredItem === index || openItem === index ? '100%' : 0,
                transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}
              }}
            />
          </motion.div>

          <AnimatePresence>
            {openItem === index && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="px-4 pb-6 pl-12 overflow-hidden"
              >
                <motion.p
                  className="font-poppins text-[#D9D5EE] opacity-80 pt-6"
                  initial={{opacity: 0, y: 10}}
                  animate={{
                    opacity: 0.8,
                    y: 0,
                    transition: {delay: 0.1, duration: 0.3}
                  }}
                  exit={{opacity: 0, transition: {duration: 0.2}}}
                >
                  {item.answer}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Magnetic cursor follower */}
      <div className="fixed top-0 left-0 pointer-events-none w-full h-full z-50 overflow-hidden">
        <motion.div
          className="w-6 h-6 rounded-full bg-[#B791FF]/30 blur-lg"
          animate={{
            x: hoveredItem !== null ? hoveredItem * 50 + 150 : -100,
            y: hoveredItem !== null ? 200 + hoveredItem * 10 : -100,
            scale: hoveredItem !== null ? 4 : 1,
            opacity: hoveredItem !== null ? 1 : 0,
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 300
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default FAQAccordion;