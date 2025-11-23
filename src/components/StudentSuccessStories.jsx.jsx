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

// Enso Circle Component
const EnsoCircle = ({ size = 120, delay = 0 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    initial={{ opacity: 0, rotate: -90 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 2, delay }}
  >
    <motion.circle
      cx="60"
      cy="60"
      r="50"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 0.85 }}
      transition={{ duration: 2, delay: delay + 0.5, ease: "easeInOut" }}
    />
  </motion.svg>
);

// Cherry Blossom Component
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
      <path
        d="M12 2C12 2 10 6 10 8C10 10 11 11 12 11C13 11 14 10 14 8C14 6 12 2 12 2Z"
        fill="#ffc0cb"
        opacity="0.7"
      />
      <path
        d="M12 11C12 11 16 9 18 9C20 9 21 10 21 11C21 12 20 13 18 13C16 13 12 11 12 11Z"
        fill="#ffc0cb"
        opacity="0.7"
      />
      <path
        d="M12 11C12 11 14 15 14 17C14 19 13 20 12 20C11 20 10 19 10 17C10 15 12 11 12 11Z"
        fill="#ffb3ba"
        opacity="0.7"
      />
      <path
        d="M12 11C12 11 8 13 6 13C4 13 3 12 3 11C3 10 4 9 6 9C8 9 12 11 12 11Z"
        fill="#ffb3ba"
        opacity="0.7"
      />
      <circle cx="12" cy="11" r="2" fill="#ff85a3" />
    </svg>
  </motion.div>
);

// Wave Pattern Component


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
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white">
      {/* Cherry Blossom Petals - Hidden on mobile */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="hidden sm:block" style={{ left: `${Math.random() * 100}%` }}>
          <CherryBlossom delay={i * 2} />
        </div>
      ))}

      {/* Breathing Soft Background Glows - Hidden on mobile */}
      <motion.div 
        className="hidden md:block absolute top-20 left-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,182,193,0.4) 0%, transparent 70%)" }}
        variants={breathingScale}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="hidden md:block absolute bottom-20 right-[15%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(173,216,230,0.4) 0%, transparent 70%)" }}
        variants={breathingScale}
        initial="initial"
        animate="animate"
      />

      {/* Traditional Japanese Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l4 8-4 8-4-8 4-8zm0 44l4 8-4 8-4-8 4-8zM0 30l8 4-8 4-8-4 8-4zm44 0l8 4-8 4-8-4 8-4z' fill='%23d32f2f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Section Header with Japanese Typography */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10"
      >
        {/* Japanese Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 opacity-20 tracking-wider inline-block">
            成功物語
          </span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block px-4">
          Student Success Stories
          {/* Red accent line */}
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto px-4">
          本物の成功体験 • Real transformation stories from our students
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div 
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 mb-12 sm:mb-16 md:mb-20"
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
            {/* Card with Japanese Paper Texture */}

            <div className="relative bg-white rounded-xl shadow-md overflow-hidden p-5 sm:p-6 border border-red-100 transition-all duration-500 min-h-[320px] sm:min-h-[350px] md:min-h-80">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500`} />

              {/* Large Kanji Background - Responsive sizing */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                variants={scaleBreath}
                initial="initial"
                animate="animate"
              >
                <span className="text-[80px] sm:text-[100px] md:text-[120px] font-bold text-gray-200 opacity-20 select-none leading-none">
                  {item.kanji}
                </span>
              </motion.div>

              {/* Quote Icon with Traditional Styling */}
              <motion.div
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={inView ? { 
                  opacity: 1, 
                  rotate: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 + 0.3
                  }
                } : { opacity: 0, rotate: -30, scale: 0.8 }}
                className="relative inline-block mb-4 sm:mb-6 z-10"
              >
                <div className="bg-gradient-to-br from-red-400 to-pink-400 p-2.5 sm:p-3 rounded-full">
                  <FaQuoteLeft className="text-white text-lg sm:text-xl" />
                </div>
              </motion.div>

              {/* Quote Text */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 mb-4 sm:mb-6 min-h-[80px] sm:min-h-[100px]">
                "{item.quote}"
              </p>

              {/* Traditional Divider */}
              <div className="relative my-4 sm:my-6 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent" />

              {/* User Info with Japanese Accent */}
              <div className="flex items-center gap-3 relative z-10 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
                    <span className="text-red-400">📍</span> {item.location}
                  </p>
                </div>
              </div>

              {/* Japanese Phrase with Translation */}
              <div className="relative z-10 pt-3 sm:pt-4 border-t border-red-100">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-400 tracking-wide">
                    {item.phrase}
                  </p>
                  <span className="text-[10px] sm:text-xs text-gray-500 italic whitespace-nowrap">"{item.kanjiMeaning}"</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    

      {/* Closing Japanese Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center relative z-10 mt-12 sm:mt-16 px-4"
      >
        <p className="text-gray-400 text-xs sm:text-sm tracking-widest">
          あなたの物語も、ここから始まります
        </p>
        <p className="text-gray-500 text-[10px] sm:text-xs mt-2">
          Your story begins here
        </p>
      </motion.div>
    </section>
  );
}