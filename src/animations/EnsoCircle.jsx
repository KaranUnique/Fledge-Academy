import React from "react";
import { motion } from "framer-motion";
import { inkDraw } from "./variants";

export default function EnsoCircle({ 
  size = 120, 
  className = "",
  delay = 0 
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        <motion.path
          d="M 60 10 
             A 50 50 0 1 1 59.9 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.4"
          className="text-gray-600"
          variants={inkDraw}
          initial="hidden"
          animate="visible"
          transition={{ delay }}
        />
      </svg>
    </div>
  );
}
