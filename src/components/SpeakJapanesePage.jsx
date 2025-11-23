import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle } from "react-icons/fa";
import FadeUp from "../animations/FadeUp";
import ShimmerText from "../animations/ShimmerText";
import BrushStrokeDivider from "../animations/BrushStrokeDivider";
import { staggerContainer, staggerItem } from "../animations/variants";

// 🔥 CLEAN KANJI (no glow)
function CleanBreathingKanji({ kanji, className = "" }) {
  return (
    <motion.span
      className={className}
    >
      {kanji}
    </motion.span>
  );
}
const WavePattern = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
    <motion.path
      d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
      fill="url(#waveGradient)"
      initial={{ y: 10 }}
      animate={{ y: [10, 0, 10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fce7ef" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);
export default function SpeakJapanesePage() {
  const points = [
    "Beginner-friendly teaching",
    "Small batch live classes",
    "Cultural explanations included",
  ];

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden no-rays">

      {/* Remove rays, glow, blur everywhere */}
      <style>{`
        .no-rays *::before, 
        .no-rays *::after {
          content: none !important;
        }
        .no-rays *, 
        .no-rays *::before, 
        .no-rays *::after {
          box-shadow: none !important;
          filter: none !important;
          text-shadow: none !important;
          background-image: none !important;
          mix-blend-mode: normal !important;
        }
      `}</style>

      {/* CLEAN BACKGROUND KANJI - Hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <CleanBreathingKanji
          kanji="本"
          className="absolute right-10 xl:right-20 bottom-32 text-[300px] xl:text-[500px] font-bold text-pink-50"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 relative z-10 mt-16 md:mt-24">

        {/* SLIDING IMAGES */}
        <div className="md:w-1/2 w-full h-[280px] sm:h-[350px] md:h-[420px] relative overflow-hidden rounded-2xl bg-white shadow-lg">
          <motion.div
            className="flex flex-col h-full"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: images.length * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div key={index} className="w-full h-[280px] sm:h-[350px] md:h-[420px] shrink-0">
                <img
                  src={src}
                  alt="japan"
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 w-full relative z-10">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We help beginners speak <br className="hidden sm:block" />
              Japanese{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                <ShimmerText>the right way.</ShimmerText>
              </span>
            </h2>
          </FadeUp>

          <BrushStrokeDivider className="my-6 sm:my-8" />

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-gray-600 mt-4 sm:mt-6 leading-relaxed">
              Fledge Academy was created to make learning Japanese simple,
              practical, and enjoyable. Our approach blends structured lessons,
              cultural insights, and real-life speaking practice.
            </p>
          </FadeUp>

          {/* Bullet Points */}
          <motion.ul
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
          >
            {points.map((item, index) => (
              <motion.li
                key={index}
                variants={staggerItem}
                className="flex items-center gap-3 text-sm sm:text-base text-gray-800"
              >
                <FaCheckCircle className="text-purple-500 shrink-0" size={18} />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
      </div>
        {/* Bottom Wave Pattern */}
      <WavePattern/>
    </section>
  );
}
