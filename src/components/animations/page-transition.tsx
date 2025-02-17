import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
     <div className="relative">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
        className="fixed inset-0 flex items-center justify-center bg-[#281c30] z-50"
      >
        <Image
          src="/laneway-logo.png"
          alt="LanewayHacks"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut", delay: 1.8 },
        }}
        onAnimationComplete={() => document.body.style.overflow = "auto"}
        className="will-change-opacity"
      >
        {!isLoading && children}
      </motion.div>
    </div>
  );
};

export default PageTransition;