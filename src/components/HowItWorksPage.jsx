import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaBookOpen, FaLaptopCode, FaChartLine, FaStar } from "react-icons/fa";

export default function HowItWorksPage() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = roadmapRef.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full pt-20 px-6 relative overflow-hidden">
        {/* Floating Sakura Petals */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            🌸
          </div>
        ))}

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 text-6xl">
              ⛩️
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Japanese Learning{" "}
              <span className="text-transparent bg-clip-text bg-pink-400">
                Roadmap
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              From your first <span className="font-semibold">こんにちは</span> to fluent conversations
            </p>

            <div className="mt-6 text-sm text-gray-600">
              日本語の旅 (Your Japanese Journey)
            </div>
          </div>
        </div>
      </section>
      
      {/* ROADMAP SECTION */}
      <section className="w-full py-24 px-6 relative" ref={roadmapRef}>
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Path Line - reduced gap to mountain */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[92%] bg-gradient-to-b from-red-300 via-orange-300 to-purple-300 opacity-30 rounded-full" />

          {roadmapSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.includes(String(index));
            
            return (
              <div
                key={index}
                data-index={index}
                className={`relative mb-20 flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                
                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 ${isEven ? 'right-0 rounded-bl-full' : 'left-0 rounded-br-full'} w-20 h-20 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-3xl opacity-60">{step.jpSymbol}</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
                        {step.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-red-200 font-medium mb-3">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="w-2/12 flex justify-center relative z-10">
                  <div className={`relative transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-xl animate-pulse-slow`} />
                    
                    {/* Icon Circle */}
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-2xl border-4 border-white hover:scale-110 transition-all duration-500 cursor-pointer text-gray-500`}>
                      {step.icon}
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-bounce-gentle">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Empty Space
                <div className="w-5/12" /> */}

              </div>
            );
          })}

          {/* Final Destination */}
          <div className="text-center relative flex flex-col items-center">
              <div className="text-8xl mb-4">🗻</div>
              <h3 className="text-2xl font-bold text-gray-900">Your Goal Awaits</h3>
              <p className="text-gray-600 mt-2">目標達成 (Goal Achievement)</p>
          </div>

        </div>
      </section>

      {/* Bottom Wave */}
      {/* <div className="w-full h-32 relative overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#fff5f5"
            opacity="0.5"
          />
        </svg>
      </div> */}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-60px) translateX(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(15px) rotate(270deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

    </div>
  );
}