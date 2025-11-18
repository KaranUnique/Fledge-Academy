import React from "react";
import { motion } from "framer-motion";

export default function ShimmerText({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{
          maskImage: "linear-gradient(to right, transparent, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)",
        }}
      />
      {children}
    </span>
  );
}
