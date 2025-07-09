/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#24292e',
          light: '#333a40', // Slightly lighter for variations
          dark: '#1a1e22',  // Slightly darker for variations
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'brand-orange': '#FF9900', // New brand orange color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter for a cleaner, more sober look
      },
    },
  },
  plugins: [],
};