import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressBarProps {
  percentage: number;
  label: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, label }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div 
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }} // Added a slight delay
    >
      <div className="relative w-40 h-40 rounded-full bg-neutral-700 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 160 160">
          <circle
            className="text-neutral-600"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <motion.circle
            className="text-yellow-500"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference} // Start with full offset
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
            transform="rotate(-90 80 80)"
            animate={{ strokeDashoffset: strokeDashoffset }} // Animate to actual offset
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute text-white text-2xl font-bold">
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-lg font-medium text-neutral-300">{label}</p>
    </motion.div>
  );
};

export default CircularProgressBar;
