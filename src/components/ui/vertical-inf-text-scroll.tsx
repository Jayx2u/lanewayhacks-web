import { motion } from 'framer-motion'
import { PiStarFourFill } from "react-icons/pi";

function VerticalScroll() {
  const text = (
    <div className="transform rotate-180 whitespace-nowrap tracking-widest text-[#C5B5D9] opacity-80 text-lg font-thin" style={{ writingMode: 'vertical-rl' }}>
      <span className="flex flex-row items-center gap-2">
        HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON <PiStarFourFill /> HACKATHON
      </span>
    </div>
  );

  return (
    <div style={{
      overflow: 'hidden',
      height: '100vh'
    }}>
      <motion.div
        style={{ writingMode: 'vertical-rl' }}
        animate={{ y: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 34,
          ease: 'linear'
      }}
        className="flex flex-col items-center"
      >
        {text}
      </motion.div>
    </div>
  );
}

export default VerticalScroll