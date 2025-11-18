import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaHeart, FaPlane, FaGraduationCap, FaStar, FaBook, FaPagelines } from "react-icons/fa";
import FadeUp from "../animations/FadeUp";
import BrushStrokeDivider from "../animations/BrushStrokeDivider";
import EnsoCircle from "../animations/EnsoCircle";
import { staggerContainer, staggerItem, hoverLift, rotateSubtle, softTilt, breathingScale } from "../animations/variants";

export default function WhyLearnJapanese() {
  const features = [
    {
      icon: <FaBriefcase size={22} />,
      title: "Career Opportunities",
      desc: "Work with Japanese MNCs, tech companies, and global enterprises seeking bilingual professionals.",
      kanji: "仕"
    },
    {
      icon: <FaHeart size={22} />,
      title: "Cultural Connection",
      desc: "Experience anime, manga, J-pop, and traditional culture in its authentic form.",
      kanji: "愛"
    },
    {
      icon: <FaPlane size={22} />,
      title: "Travel with Confidence",
      desc: "Navigate Japan independently, connect with locals, and discover hidden gems.",
      kanji: "旅"
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: "JLPT Certification",
      desc: "Achieve N5 to N1 levels with structured preparation and mock tests.",
      kanji: "学"
    },
    {
      icon: <FaStar size={22} />,
      title: "Personal Growth",
      desc: "Master a complex writing system and develop discipline through consistent practice.",
      kanji: "成"
    },
    {
      icon: <FaBook size={22} />,
      title: "Lifelong Learning",
      desc: "Join a community of learners and continue growing through resources and support.",
      kanji: "本"
    },
  ];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Large Faint Kanji in Background */}
      <span className="absolute left-1/2 top-24 -translate-x-1/2 text-[320px] font-bold text-pink-200 opacity-[0.07] select-none pointer-events-none z-0" style={{letterSpacing:'0.2em', fontFamily:'serif'}}>日</span>

      {/* Breathing Soft Radial Glows */}
      <motion.div 
        className="absolute top-10 left-[5%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none bg-pink-100 opacity-40"
        variants={breathingScale}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none bg-pink-200 opacity-30"
        variants={breathingScale}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      {/* Section Heading */}
      <FadeUp>
        <div className="text-center mb-14 px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Why Learn Japanese?</h2>
          <p className="text-gray-600 mt-2">
            Discover opportunities, culture, and a new way of thinking.
          </p>
        </div>
      </FadeUp>
      
      {/* <BrushStrokeDivider /> */}

      {/* Features Grid */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            initial="rest"
            whileHover="hover"
            className="relative group"
          >
            {/* Card Soft Pink Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-pink-100 opacity-20 blur-xl z-0" />
            
            {/* Card Content */}
            <motion.div
              variants={softTilt}
              className="bg-white py-8 px-7 rounded-3xl shadow-lg border border-pink-100/60 relative overflow-visible group transition-transform duration-300 ease-out hover:scale-[1.025] flex flex-col items-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Feature Icon */}
              <div className="mb-2 text-pink-300 text-2xl">{item.icon}</div>
              
              {/* Title + Brush Stroke Divider */}
              <h3 className="text-lg font-semibold text-gray-900 relative z-10 tracking-tight text-center mb-1">{item.title}</h3>
              <div className="w-10 h-1 mb-3 bg-linear-to-r from-pink-200 to-pink-50 rounded-full mx-auto" />
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 text-center mb-2">
                {item.desc}
              </p>

              {/* Animated Rotating Kanji Background with Sway */}
              <motion.span
                variants={rotateSubtle}
                initial="initial"
                animate="animate"
                className="absolute text-[70px] font-bold text-pink-200 opacity-10 right-4 bottom-2 select-none pointer-events-none z-0"
                style={{fontFamily:'serif'}}
              >
                {item.kanji}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
