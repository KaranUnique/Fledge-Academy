import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BrushStrokeDivider({ className = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`w-full flex justify-center my-12 ${className}`}>
      <motion.div
        className="relative w-48 h-1"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.95] }}
        style={{ originX: 0.5 }}
      >
        {/* Main brush stroke */}
        <div 
          className="absolute inset-0 bg-linear-to-r from-transparent via-gray-400 to-transparent"
          style={{
            height: "2px",
            filter: "blur(0.5px)",
            opacity: 0.6
          }}
        />
        
        {/* Rough brush texture effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(100, 100, 100, 0.3) 20%, rgba(100, 100, 100, 0.5) 50%, rgba(100, 100, 100, 0.3) 80%, transparent 100%)",
            height: "3px",
            top: "-0.5px",
            filter: "blur(1px)",
            mixBlendMode: "multiply"
          }}
        />
      </motion.div>
    </div>
  );
}
