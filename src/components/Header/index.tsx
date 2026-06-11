"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLogo() {
  const [showAI, setShowAI] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowParticles(true);

      setTimeout(() => {
        setShowAI((prev) => !prev);
      }, 500);

      setTimeout(() => {
        setShowParticles(false);
      }, 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">

        {showParticles && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-blue-400"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 20,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 20,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                }}
              />
            ))}
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.span
            key={showAI ? "AI" : "AG"}
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.3,
            }}
            transition={{
              duration: 0.4,
            }}
            className="absolute text-xl font-black text-white"
          >
            {showAI ? "AI" : "AG"}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="font-outfit text-[26px] font-semibold tracking-[-0.03em] text-white">
        Adam Garcia
      </span>
    </div>
  );
}