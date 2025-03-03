import {motion} from 'framer-motion'
import {PiStarFourFill} from "react-icons/pi";

function VerticalScroll() {
  const text = (
    <div className="whitespace-nowrap tracking-widest text-[#C5B5D9] opacity-80 text-lg font-thin"
         style={{writingMode: 'vertical-rl'}}>
      <span className="flex flex-row items-center gap-2">
        HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON <PiStarFourFill/> HACKATHON
      </span>
    </div>
  );

  return (
    <div style={{
      overflow: 'hidden',
      height: '100vh'
    }}>
      <motion.div
        style={{writingMode: 'vertical-rl'}}
        animate={{y: ['0%', '-50%']}}
        transition={{
          repeat: Infinity,
          duration: 34,
          ease: 'linear',
          repeatType: "loop"
        }}
        className="flex flex-col items-center absolute right-0 [writing-mode:vertical-rl] rotate-180"
      >
        {text}
      </motion.div>
    </div>
  );
}

export default VerticalScroll