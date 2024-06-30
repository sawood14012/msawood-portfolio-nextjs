import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          500: '#fbbf24', // Mid-tone yellow
          600: '#d97706', // Darker yellow
          700: '#b45309', // Darker yellow
        },
        brown: {
          600: '#8b4513', // Dark brown
        },
        blue: {
          600: '#2563eb', // Dark blue
        },
        purple: {
          500: '#7c3aed', // Mid-tone purple
        },
        pink: {
          500: '#ec4899', // Mid-tone pink
        },
      },
    },
  },
  plugins: [],
};
export default config;
