"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sun, Moon, Star } from 'lucide-react';

interface DayNightSwitchProps {
  onChange?: (isNight: boolean) => void;
}

const DayNightSwitch: React.FC<DayNightSwitchProps> = ({ onChange }) => {
  const [isNight, setIsNight] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isNight ? "night" : "day");
  }, [isNight, controls]);

  const handleToggle = () => {
    setIsNight(!isNight);
    if (onChange) {
      onChange(!isNight);
    }
  };

  const switchVariants = {
    day: { 
      backgroundColor: "#87CEEB",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    night: { 
      backgroundColor: "#1A237E",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  };

  const sunMoonVariants = {
    day: { 
      x: 0,
      rotate: 0,
      scale: 1,
      backgroundColor: "#fdd67b",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    night: { 
      x: 40,
      rotate: 360,
      scale: 0.8,
      backgroundColor: "#F4F1C9",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
  };

  const cloudVariants = {
    day: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    night: { opacity: 0, x: -20, transition: { duration: 0.5 } },
  };

  const starVariants = {
    day: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
    night: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      className="w-20 h-10 rounded-full p-1 cursor-pointer flex items-center relative overflow-hidden"
      variants={switchVariants}
      animate={controls}
      onClick={handleToggle}
    >
      <motion.div
        className="w-8 h-8 rounded-full flex items-center justify-center absolute left-1"
        variants={sunMoonVariants}
        animate={controls}
      >
        {isNight ? <Moon className="text-gray-800" size={16} /> : <Sun className="text-yellow-600" size={20} />}
      </motion.div>
      <motion.div
        className="absolute left-12 top-2"
        variants={cloudVariants}
        animate={controls}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M4 18.5A3.5 3.5 0 007.5 22H18a4 4 0 000-8h-1.26A4.5 4.5 0 108 14.5v.5H7.5A3.5 3.5 0 004 18.5z" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute left-2 top-2"
        variants={starVariants}
        animate={controls}
      >
        <Star className="text-yellow-200" size={8} />
      </motion.div>
      <motion.div
        className="absolute left-4 bottom-2"
        variants={starVariants}
        animate={controls}
      >
        <Star className="text-yellow-200" size={6} />
      </motion.div>
      <motion.div
        className="absolute left-6 top-3"
        variants={starVariants}
        animate={controls}
      >
        <Star className="text-yellow-200" size={4} />
      </motion.div>
      <motion.div
        className="absolute right-2 top-2"
        variants={starVariants}
        animate={controls}
      >
        <Star className="text-yellow-200" size={12} />
      </motion.div>
      <motion.div
        className="absolute right-4 bottom-2"
        variants={starVariants}
        animate={controls}
      >
        <Star className="text-yellow-200" size={8} />
      </motion.div>
    </motion.div>
  );
};

export default DayNightSwitch;

