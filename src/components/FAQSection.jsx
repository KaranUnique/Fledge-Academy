import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    q: "Do I need any prior knowledge?",
    a: "No prior knowledge is required. We start from absolute basics.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Classes are live with session recordings available for revision.",
  },
  {
    q: "What if I miss a class?",
    a: "You will receive the class recording so you never fall behind.",
  },
  {
    q: "Is JLPT preparation included?",
    a: "Yes, our curriculum includes JLPT-focused training and mock tests.",
  },
  {
    q: "Who is this course suitable for?",
    a: "Anyone who wants to learn Japanese—from beginners to professionals.",
  },
  {
    q: "How do I join the free trial?",
    a: "Click on 'Join Free Trial' on our website and complete the signup.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 px-4 bg-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 mt-3 text-center text-lg">
        Everything you need to know about learning Japanese with us.
      </p>

      {/* FAQ Items */}
      <div className="mt-12 w-full max-w-3xl space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-l-4 border-red-500 shadow-sm"
          >
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center py-5 px-4"
            >
              <p className="text-lg font-medium">{item.q}</p>

              <div className="bg-indigo-500/10 p-2 rounded-full">
                {openIndex === idx ? (
                  <Minus className="text-indigo-500" size={20} />
                ) : (
                  <Plus className="text-indigo-500" size={20} />
                )}
              </div>
            </button>

            {/* Answer */}
            {openIndex === idx && (
              <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
