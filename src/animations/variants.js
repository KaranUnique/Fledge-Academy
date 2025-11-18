// Animation variants library for Framer Motion
// Japanese-inspired minimalistic animations

export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeUpDelay = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: "easeInOut"
    }
  }
};

export const float = {
  initial: { 
    y: 0 
  },
  animate: { 
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const subtleFloat = {
  initial: { 
    y: 0 
  },
  animate: { 
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const breathe = {
  initial: { 
    opacity: 0.35,
    scale: 1
  },
  animate: { 
    opacity: [0.35, 0.55, 0.35],
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateSubtle = {
  initial: { 
    rotate: 0 
  },
  animate: { 
    rotate: [-2, 2, -2],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const scaleBreath = {
  initial: { 
    scale: 1 
  },
  animate: { 
    scale: [1, 1.03, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const bounceIn = {
  hidden: { 
    scale: 0,
    opacity: 0 
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const hoverLift = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  hover: { 
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const parallaxSlow = (offset = 50) => ({
  initial: { y: 0 },
  animate: { y: offset }
});

export const breathingOpacity = {
  initial: { opacity: 0.08 },
  animate: {
    opacity: [0.08, 0.16, 0.08],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const breathingScale = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const rotateSway = {
  initial: { rotate: 0 },
  animate: {
    rotate: [-3, 3, -3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const parallaxFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const brushReveal = {
  hidden: { 
    opacity: 0,
    scaleX: 0,
    originX: 0
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  }
};

export const inkDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};

export const softTilt = {
  rest: { 
    rotateY: 0,
    rotateX: 0,
    scale: 1
  },
  hover: {
    rotateY: 5,
    rotateX: -5,
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};
