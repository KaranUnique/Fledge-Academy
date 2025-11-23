import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaBookOpen,
  FaLaptopCode,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

export default function HowItWorksPage() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isMobile, setIsMobile] = useState(false); // ← detects mobile
  const roadmapRef = useRef(null);

  const lastScrollY = useRef(window.scrollY);
  const [scrollDir, setScrollDir] = useState("down");

  // Detect Mobile
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // < md breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Detect Scroll Direction — Desktop only
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Intersection Observer — Desktop only
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, idx])]);
          } else {
            setVisibleSteps((prev) => prev.filter((i) => i !== idx));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = roadmapRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMobile]);

  const roadmapSteps = [
    {
      icon: <FaCalendarAlt />,
      title: "Join a Free Trial",
      subtitle: "無料体験",
      desc: "Begin your journey with a live trial class. Experience authentic Japanese teaching.",
      level: "Start",
      color: "from-red-100 to-pink-100",
      jpSymbol: "始",
    },
    {
      icon: <FaBookOpen />,
      title: "Master Hiragana & Katakana",
      subtitle: "ひらがな・カタカナ",
      desc: "Build your foundation with the Japanese writing systems and basic grammar.",
      level: "Foundation",
      color: "from-orange-100 to-amber-100",
      jpSymbol: "基",
    },
    {
      icon: <FaLaptopCode />,
      title: "Live Interactive Classes",
      subtitle: "ライブレッスン",
      desc: "Practice speaking, listening, and conversational skills with native guidance.",
      level: "Practice",
      color: "from-blue-100 to-cyan-100",
      jpSymbol: "練",
    },
    {
      icon: <FaChartLine />,
      title: "JLPT Preparation",
      subtitle: "日本語能力試験",
      desc: "Advance through N5 to N1 levels with structured test preparation.",
      level: "Master",
      color: "from-purple-100 to-indigo-100",
      jpSymbol: "達",
    },
    {
      icon: <FaStar />,
      title: "Fluency & Beyond",
      subtitle: "流暢さ",
      desc: "Achieve natural fluency and explore Japanese culture, business, or academics.",
      level: "Excellence",
      color: "from-pink-100 to-rose-100",
      jpSymbol: "完",
    },
  ];

  return (
    <div className="w-full min-h-screen">

      {/* HERO */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 relative overflow-hidden">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 text-4xl sm:text-5xl md:text-6xl">
              ⛩️
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black/80 mb-4 px-4">
              Your Japanese Learning{" "}
              <span className="text-transparent bg-clip-text bg-black/80">
                Roadmap
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              From your first <span className="font-semibold">こんにちは</span>{" "}
              to fluent conversations
            </p>

            <div className="mt-6 text-xs sm:text-sm text-gray-600">
              日本語の旅 (Your Japanese Journey)
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section
        className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
        ref={roadmapRef}
      >
        <div className="max-w-4xl mx-auto relative">

          {/* Middle Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-[92%] bg-gradient-to-b from-red-300 via-orange-300 to-purple-300 opacity-30 rounded-full" />

          {roadmapSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.includes(String(index));

            // The important part: mobile → NO animation
            const motionProps = isMobile
              ? {
                  initial: { opacity: 1, x: 0 },
                  animate: { opacity: 1, x: 0 },
                }
              : {
                  initial: "hidden",
                  animate: isVisible ? "visible" : "hidden",
                  variants:
                    scrollDir === "down"
                      ? {
                          hidden: isEven
                            ? { opacity: 0, x: -80 }
                            : { opacity: 0, x: 80 },
                          visible: { opacity: 1, x: 0 },
                        }
                      : {
                          hidden: isEven
                            ? { opacity: 0, x: -80 }
                            : { opacity: 0, x: 80 },
                          visible: isEven
                            ? { opacity: 1, x: 40 }
                            : { opacity: 1, x: -40 },
                        },
                  transition: { duration: 0.7, type: "spring" },
                };

            return (
              <motion.div
                key={index}
                data-index={index}
                {...motionProps}
                className={`relative mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-4 md:gap-8`}
              >
                {/* CARD */}
                <div
                  className={`w-full md:w-5/12 ${
                    isEven ? "md:text-right" : "md:text-left"
                  } text-center md:text-left`}
                >
                  <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-gray-100 overflow-hidden">
                    <div
                      className={`absolute top-0 ${
                        isEven
                          ? "md:right-0 md:rounded-bl-full"
                          : "md:left-0 md:rounded-br-full"
                      } right-0 rounded-bl-full w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${
                        step.color
                      } opacity-10`}
                    />

                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      } justify-center`}
                    >
                      <span className="text-2xl sm:text-3xl opacity-60">
                        {step.jpSymbol}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                        {step.level}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-red-200 font-medium mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* CENTER ICON */}
                <div className="w-full md:w-2/12 flex justify-center relative z-10 order-first md:order-none">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30 blur-2xl`}
                    />

                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0px_8px_18px_rgba(0,0,0,0.15)] flex items-center justify-center border-4 sm:border-[6px] border-gray-200">
                      <div
                        className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                      />
                      <div className="relative text-2xl sm:text-3xl text-gray-600">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Final Section */}
          <div className="text-center flex flex-col items-center mt-8 sm:mt-12">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🗻</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Your Goal Awaits
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              目標達成 (Goal Achievement)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
