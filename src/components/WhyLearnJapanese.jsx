import React from "react";
import { FaBriefcase, FaHeart, FaPlane, FaGraduationCap, FaStar, FaBook } from "react-icons/fa";

export default function WhyLearnJapanese() {
  const features = [
    {
      icon: <FaBriefcase className="text-white text-xl" />,
      title: "Career Opportunities",
      desc: "Work with Japanese MNCs, tech companies, and global enterprises seeking bilingual professionals.",
    },
    {
      icon: <FaHeart className="text-white text-xl" />,
      title: "Cultural Connection",
      desc: "Experience anime, manga, J-pop, and traditional culture in its authentic form.",
    },
    {
      icon: <FaPlane className="text-white text-xl" />,
      title: "Travel with Confidence",
      desc: "Navigate Japan independently, connect with locals, and discover hidden gems.",
    },
    {
      icon: <FaGraduationCap className="text-white text-xl" />,
      title: "JLPT Certification",
      desc: "Achieve N5 to N1 levels with structured preparation and mock tests.",
    },
    {
      icon: <FaStar className="text-white text-xl" />,
      title: "Personal Growth",
      desc: "Master a complex writing system and develop discipline through consistent practice.",
    },
    {
      icon: <FaBook className="text-white text-xl" />,
      title: "Lifelong Learning",
      desc: "Join a community of learners and continue growing through resources and support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Why Learn Japanese?
        </h2>
        <p className="text-gray-500 mb-16">
          Discover opportunities, culture, and a new way of thinking.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-all relative overflow-hidden"
            >
              {/* Icon container */}
              <div className="w-12 h-12 flex items-center justify-center bg-purple-500 rounded-xl mb-6">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>

              {/* Light background Japanese character (optional for effect) */}
              <span className="absolute text-gray-200 text-7xl font-bold opacity-20 right-4 top-4 pointer-events-none select-none">
                {index === 0 && "仕事"}
                {index === 1 && "文化"}
                {index === 2 && "旅"}
                {index === 3 && "N5/N4"}
                {index === 4 && "和"}
                {index === 5 && "学ぶ"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
