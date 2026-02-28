import React, { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const SplitText = ({ children, className }) => {
    const letters = children.split("");
    return (
      <span className={className}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.03 + 0.2 // Stagger delay
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden bg-[#0d0d0d]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c7ff00]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div style={{ opacity: opacity }} className="max-w-[90vw] mx-auto px-6 w-full relative z-10 flex flex-col justify-center h-full">
        <div>
          <div className="overflow-hidden mb-2 md:mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[#c7ff00] font-[Outfit] font-bold tracking-[0.2em] text-xs md:text-sm lg:text-base uppercase"
            >
              Portfolio 2026
            </motion.h2>
          </div>

          <div className="relative z-20">
            <div className="overflow-hidden mb-[-1vw] md:mb-[-2vw] pb-[1vw] md:pb-[2vw]">
              <h1 className="text-[13vw] md:text-[12vw] leading-[0.8] font-[Outfit] font-black tracking-tighter text-white uppercase mix-blend-exclusion flex">
                <SplitText>DIGITAL</SplitText>
              </h1>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline overflow-hidden pb-[2vw]">
              <h1 className="text-[13vw] md:text-[12vw] leading-[0.8] font-[Outfit] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#777] to-[#111] stroke-white stroke-2 flex hover:text-white transition-colors duration-700">
                <SplitText>DESIGNER</SplitText>
              </h1>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-[#c7ff00] text-lg md:text-[2vw] md:ml-6 mt-2 md:mt-0 font-[Manrope] font-normal tracking-wide align-top"
              >
                (CREATIVE)
              </motion.span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 md:mt-24 border-t border-white/10 pt-6 md:pt-8 backdrop-blur-sm">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed font-[Manrope]"
            >
              I'm <span className="text-white font-bold">Kush Mody</span>. Crafting immersive digital experiences with architectural precision and motion.
            </motion.p>

            <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="text-gray-600 text-xs md:text-sm mb-4 font-[Manrope] uppercase tracking-wider"
              >
                Scroll to Explore
              </motion.span>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.1, type: "spring" }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#c7ff00]/30 flex items-center justify-center text-[#c7ff00] hover:bg-[#c7ff00] hover:text-black transition-all duration-300 cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Parallax Grid Numbers */}
      <motion.div style={{ y }} className="absolute -left-10 bottom-20 font-[Outfit] text-white/[0.02] text-[20rem] font-black pointer-events-none select-none hidden md:block">
        01
      </motion.div>
    </div>
  );
};

export default Home;
