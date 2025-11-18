import React from "react";
import { motion } from "framer-motion";
import { breathe } from "./variants";
export default function BreathingKanji({ kanji, className = "", style = {} }) {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      variants={breathe}
      className={className}
      style={style}
    >
      {" "}
      {kanji}{" "}
    </motion.span>
  );
}
