import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
  label: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, label }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 160 160">
          <circle
            className="text-gray-600"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
          />
          <circle
            className="text-yellow-500"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="80"
            cy="80"
            transform="rotate(-90 80 80)"
          />
        </svg>
        <div className="absolute text-white text-2xl font-bold">
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-lg font-medium text-gray-300">{label}</p>
    </div>
  );
};

export default CircularProgressBar;
