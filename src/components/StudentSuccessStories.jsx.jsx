import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleBreath = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

const breathingScale = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const parallaxFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Cherry Blossom
const CherryBlossom = ({ delay = 0 }) => (
  <motion.div
    className="absolute"
    initial={{ y: -50, x: 0, opacity: 0, rotate: 0 }}
    animate={{
      y: "100vh",
      x: [0, 30, -20, 40, 0],
      opacity: [0, 1, 1, 0],
      rotate: 360
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C12 2 10 6 10 8C10 10 11 11 12 11C13 11 14 10 14 8C14 6 12 2 12 2Z" fill="#ffc0cb" opacity="0.7" />
      <path d="M12 11C12 11 16 9 18 9C20 9 21 10 21 11C21 12 20 13 18 13C16 13 12 11 12 11Z" fill="#ffc0cb" opacity="0.7" />
      <path d="M12 11C12 11 14 15 14 17C14 19 13 20 12 20C11 20 10 19 10 17C10 15 12 11 12 11Z" fill="#ffb3ba" opacity="0.7" />
      <path d="M12 11C12 11 8 13 6 13C4 13 3 12 3 11C3 10 4 9 6 9C8 9 12 11 12 11Z" fill="#ffb3ba" opacity="0.7" />
      <circle cx="12" cy="11" r="2" fill="#ff85a3" />
    </svg>
  </motion.div>
);

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
      color: "from-red-400/20 to-pink-400/20"
    },
    {
      quote:
        "I got placed in a Japanese MNC after completing N4. The cultural insights were incredibly valuable.",
      name: "Rahul Verma",
      location: "Bangalore",
      kanji: "夢",
      kanjiMeaning: "Dream",
      phrase: "夢が叶った",
      color: "from-blue-400/20 to-indigo-400/20"
    },
    {
      quote:
        "Small batch sizes mean I get personalized attention. My speaking skills improved dramatically!",
      name: "Ananya Das",
      location: "Delhi",
      kanji: "心",
      kanjiMeaning: "Heart",
      phrase: "心から感謝",
      color: "from-purple-400/20 to-pink-400/20"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Mobile 3D Carousel Logic
  const [active, setActive] = React.useState(0);
  const total = stories.length;

  const nextCard = () => setActive((prev) => (prev + 1) % total);
  const prevCard = () => setActive((prev) => (prev - 1 + total) % total);

  // Auto-slide for mobile
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    if (!mq.matches) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white">

      {/* 🌸 Falling Petals */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="hidden sm:block" style={{ left: `${Math.random() * 100}%` }}>
          <CherryBlossom delay={i * 2} />
        </div>
      ))}

      {/* Soft Glows */}
      <motion.div 
        className="hidden md:block absolute top-20 left-[10%] w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,182,193,0.4) 0%, transparent 70%)" }}
        variants={breathingScale}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="hidden md:block absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(173,216,230,0.4) 0%, transparent 70%)" }}
        variants={breathingScale}
        initial="initial"
        animate="animate"
      />

      {/* SECTION TITLE (your original) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-20 relative z-10"
      >
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-5xl md:text-6xl font-bold text-red-600 opacity-20 tracking-wider inline-block">
            成功物語
          </span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 relative inline-block px-4">
          Student Success Stories
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
          />
        </h2>

        <p className="text-gray-600 mt-6 max-w-xl mx-auto">
          本物の成功体験 • Real transformation stories from our students
        </p>
      </motion.div>

      {/* 📱 MOBILE – 3D CAROUSEL */}
      <div className="sm:hidden relative w-full max-w-xs mx-auto mb-16 h-[380px] overflow-visible">
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) {
              setActive((prev) => (prev + 1) % total);
            } else if (info.offset.x > 50) {
              setActive((prev) => (prev - 1 + total) % total);
            }
          }}
          style={{ touchAction: "pan-x" }}
        >
          {stories.map((item, index) => {
            const pos = (index - active + total) % total;
            let transform = "scale(0.5)";
            let opacity = 0;
            let zIndex = 1;
            let filter = "none";
            if (pos === 0) {
              transform = "translateX(0px) scale(1) rotateY(0deg)";
              opacity = 1;
              zIndex = 5;
              filter = "none";
            } else if (pos === 1) {
              transform = "translateX(90px) scale(0.85) rotateY(-45deg)";
              opacity = 0.7;
              zIndex = 3;
              filter = "blur(6px) brightness(0.95)";
            } else if (pos === total - 1) {
              transform = "translateX(-90px) scale(0.85) rotateY(45deg)";
              opacity = 0.7;
              zIndex = 3;
              filter = "blur(6px) brightness(0.95)";
            }
            return (
              <motion.div
                key={index}
                className="absolute w-[250px]"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  transition: "all 0.6s cubic-bezier(.65,.05,.36,1)"
                }}
              >
                {/* CARD */}
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-6 border border-red-100 min-h-[350px]">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
                    variants={scaleBreath}
                    initial="initial"
                    animate="animate"
                  >
                    <span className="text-[100px] font-bold text-gray-200">{item.kanji}</span>
                  </motion.div>
                  <div className="bg-linear-to-br from-red-400 to-pink-400 p-3 rounded-full mb-4 inline-block">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  <p className="text-gray-700 text-base mb-6">"{item.quote}"</p>
                  <div className="h-px bg-linear-to-r from-transparent via-red-300 to-transparent my-4" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-400 to-pink-400 flex items-center justify-center text-white text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-gray-600 text-sm">
                        <span className="text-red-400">📍</span> {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-red-100">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold text-red-400">{item.phrase}</p>
                      <span className="text-xs text-gray-500 italic">"{item.kanjiMeaning}"</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 💻 DESKTOP GRID (unchanged) */}
      <div
        ref={ref}
        className="hidden sm:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-20"
      >
        {stories.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={parallaxFade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden p-6 border border-red-100 min-h-[350px]">

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
                variants={scaleBreath}
                initial="initial"
                animate="animate"
              >
                <span className="text-[120px] font-bold text-gray-200">{item.kanji}</span>
              </motion.div>

              <div className="bg-linear-to-br from-red-400 to-pink-400 p-3 rounded-full mb-6 inline-block">
                <FaQuoteLeft className="text-white text-xl" />
              </div>

              <p className="text-gray-700 text-base mb-6">"{item.quote}"</p>

              <div className="h-px bg-linear-to-r from-transparent via-red-300 to-transparent my-6" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-400 to-pink-400 flex items-center justify-center text-white text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-gray-600 text-sm">
                    <span className="text-red-400">📍</span> {item.location}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-red-100">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-red-400">{item.phrase}</p>
                  <span className="text-xs text-gray-500 italic">"{item.kanjiMeaning}"</span>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center mt-12 px-4"
      >
        <p className="text-gray-400 text-xs tracking-widest">あなたの物語も、ここから始まります</p>
        <p className="text-gray-500 text-[10px] mt-2">Your story begins here</p>
      </motion.div>

    </section>
  );
}
