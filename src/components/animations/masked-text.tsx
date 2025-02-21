import {motion, useInView} from "framer-motion";
import {useRef} from "react";

interface MaskedTextProps {
  text: string;
  className?: string;
}

const MaskedText = ({text, className = ""}: MaskedTextProps) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, {once: true, margin: "-100px"});

  return (
    <div ref={textRef} className="relative overflow-hidden">
      <motion.p
        className={className}
        initial={{y: "100%"}}
        animate={isInView ? {y: 0} : {y: "100%"}}
        transition={{duration: 0.8, ease: [0.33, 1, 0.68, 1]}}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default MaskedText;