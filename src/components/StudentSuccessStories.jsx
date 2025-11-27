import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleBreath = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function StudentSuccessStories() {
  const stories = [
    {
      quote:
        "The teaching method made Japanese grammar so easy to understand. I'm now confident in basic conversations!",
      name: "Priya Sharma",
      location: "Mumbai",
      kanji: "楽",
      kanjiMeaning: "Joy",
      phrase: "楽しかった",
    },
    {
      quote:
        "I got placed in a Japanese MNC after completing N4. The cultural insights were incredibly valuable.",
      name: "Rahul Verma",
      location: "Bangalore",
      kanji: "夢",
      kanjiMeaning: "Dream",
      phrase: "夢が叶った",
    },
    {
      quote:
        "Small batch sizes mean I get personalized attention. My speaking skills improved dramatically!",
      name: "Ananya Das",
      location: "Delhi",
      kanji: "心",
      kanjiMeaning: "Heart",
      phrase: "心から感謝",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [active, setActive] = React.useState(0);
  const total = stories.length;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  // Auto-slide only on mobile
  React.useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    if (!m.matches) return;
    const timer = setInterval(() => next(), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 py-12 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden relative">

      {/* Title */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16">
        <span className="text-5xl font-bold text-red-600 opacity-20">成功物語</span>
        <h2 className="text-3xl font-bold mt-3">Student Success Stories</h2>
        <p className="text-gray-600 mt-3">
          本物の成功体験 • Real transformation stories from our students
        </p>
      </motion.div>

      {/* 📱 MOBILE — PERFECT 3D CAROUSEL */}
      <div className="sm:hidden relative w-full max-w-xs mx-auto h-[380px] overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
          {stories.map((item, index) => {
            const pos = (index - active + total) % total;

            let x = 0, scale = 1, rotateY = 0, opacity = 1, zIndex = 10;
            let blurred = false;

            if (pos === 0) {
              // MAIN active card
              x = 0; scale = 1; rotateY = 0; opacity = 1; zIndex = 20;
            } else if (pos === 1) {
              // Right card
              x = 90; scale = 0.85; rotateY = -45; opacity = 0.7; zIndex = 5; blurred = true;
            } else if (pos === total - 1) {
              // Left card
              x = -90; scale = 0.85; rotateY = 45; opacity = 0.7; zIndex = 5; blurred = true;
            } else {
              // Cards not in view
              opacity = 0; scale = 0.5;
            }

            const isActive = pos === 0;

            return (
              <motion.div
                key={index}
                className="absolute w-[250px]"
                style={{
                  transform: `translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  filter: blurred ? "blur(6px) brightness(0.95)" : "none",
                  transition: "all 0.6s cubic-bezier(.65,.05,.36,1)",
                }}
              >
                {/* draggable ONLY on main card */}
                <motion.div
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -55) next();
                    else if (info.offset.x > 55) prev();
                  }}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-6 border border-red-100 min-h-[350px]">
                    <motion.div
                      className="absolute top-1/2 left-1/2 opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      variants={scaleBreath}
                      initial="initial"
                      animate="animate"
                    >
                      <span className="text-[100px] font-bold text-gray-300">{item.kanji}</span>
                    </motion.div>

                    <div className="p-3 bg-red-400 rounded-full text-white inline-block mb-4">
                      <FaQuoteLeft />
                    </div>

                    <p className="text-gray-700 mb-6 text-base">"{item.quote}"</p>

                    <div className="h-px bg-red-200 my-4" />

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-red-400 text-white flex items-center justify-center">
                        {item.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-gray-600 text-sm">📍 {item.location}</p>
                      </div>
                    </div>

                    <div className="border-t border-red-100 mt-4 pt-4">
                      <p className="text-xl font-bold text-red-400">{item.phrase}</p>
                      <span className="text-xs italic text-gray-500">
                        "{item.kanjiMeaning}"
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 💻 DESKTOP GRID (unchanged) */}
      <div
        ref={ref}
        className="hidden sm:grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
      >
        {stories.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 border border-red-100 relative"
          >
            <span className="absolute text-[120px] font-bold text-gray-200 opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {item.kanji}
            </span>

            <div className="p-3 bg-red-400 text-white rounded-full inline-block mb-4">
              <FaQuoteLeft />
            </div>

            <p className="text-gray-700 mb-6">"{item.quote}"</p>

            <h4 className="font-bold">{item.name}</h4>
            <p className="text-sm text-gray-600">📍 {item.location}</p>

            <div className="border-t border-red-100 mt-4 pt-4">
              <p className="text-xl font-bold text-red-400">{item.phrase}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-xs">
        あなたの物語も、ここから始まります
        <br />
        <span className="text-[10px]">Your story begins here</span>
      </div>
    </section>
  );
}
