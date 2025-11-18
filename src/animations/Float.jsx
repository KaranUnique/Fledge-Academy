import React from "react";
import { motion } from "framer-motion";
import { float, subtleFloat } from "./variants";

export default function Float({ children, subtle = false, className = "" }) {
  const variant = subtle ? subtleFloat : float;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
