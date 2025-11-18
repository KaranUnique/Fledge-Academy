import React from "react";
import { motion } from "framer-motion";
import FadeUp from "../animations/FadeUp";
import Float from "../animations/Float";
import VerticalJapaneseText from "../animations/VerticalJapaneseText";
import EnsoCircle from "../animations/EnsoCircle";
import { breathingOpacity, rotateSway, brushReveal } from "../animations/variants";
import RoseFlower from "../assets/RoseFlower.png";
import OrgimiBird from "../assets/OrigamiBird.png"
import Heroimg from "../assets/Sample-hero.png"

export default function Home() {
  return (
    <div className="w-full md:pt-8 min-h-screen bg-white font-[Poppins] relative overflow-hidden">
      {/* Vertical Japanese Text Decoration */}
      <VerticalJapaneseText 
        text="日本語を学ぶ旅へようこそ" 
        position="left"
      />
      
      {/* Large Breathing Kanji "未来" (Future) */}
      <motion.div
        variants={breathingOpacity}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 right-[15%] text-[220px] font-bold text-gray-200 select-none pointer-events-none z-0"
        style={{ lineHeight: 1 }}
      >
        未来
      </motion.div>

      {/* Ensō Circle behind content */}
      <div className="absolute top-[20%] left-[10%] opacity-10">
        <EnsoCircle size={200} delay={0.5} />
      </div>
      
      {/* Soft Radial Pastel Glow - Background Layer with Breathing */}
      <motion.div 
        className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none glow-purple-soft breathing-glow"
        style={{ willChange: "transform, opacity" }}
      />
      
      {/* HERO SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-12 relative z-10">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl text-center md:text-left pl-20">
          <FadeUp delay={0.2}>
            <motion.h1 
              className="text-3xl md:text-[55px] font-bold leading-15 text-[#000000]/70 calligraphy-reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Learn Japanese Online — From Zero to Confidence
            </motion.h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Live interactive classes, cultural immersion,
              and simple step-by-step progress.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
              <motion.button 
                className="relative bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Book Free Trial</span>
              </motion.button>

              <button className="text-gray-700 font-medium hover:text-black hover:underline transition">
                See Courses
              </button>
            </div>
          </FadeUp>
          
          {/* Rose Flower (Pink Tree) as Large Background at Bottom */}
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="mt-10 md:mt-0 relative">
          {/* Breathing Soft Radial Glow Behind Crane */}
          <motion.div 
            className="absolute -top-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none glow-pink-soft"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative">
            <img
              src={Heroimg}
              className="w-64 md:w-180 opacity-90"
              alt="bg"
            />
          </div>
        </div>
      </section>
      {/* Pink Tree (RoseFlower) as Absolute Background at Bottom of Home */}
      <motion.div
        className="pointer-events-none absolute left-0 bottom-20 w-full flex justify-left z-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        aria-hidden="true"
      >
          <img
          src={RoseFlower}
          alt="Sakura Pink Tree"
          className="w-[90vw] max-w-4xl min-w-[300px] h-auto object-contain select-none opacity-500 drop-shadow-xl"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
