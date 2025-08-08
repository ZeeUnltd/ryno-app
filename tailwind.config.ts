import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'], // Set Manrope as the default sans font
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        aeonik: ["Aeonik", "sans-serif"],
        aeonik_regular: ["Aeonik-Regular", "sans-serif"],
        aeonik_medium: ["Aeonik-Medium", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
        manrope: ["Manrope", "sans-serif"], // Add Manrope to available fonts
      },
      keyframes: {
        "text-slide-1": {
          "0%, 33.33%": { transform: "translateY(0%)", opacity: "1" },
          "41.66%, 100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "text-slide-2": {
          "0%, 33.33%": { transform: "translateY(100%)", opacity: "0" },
          "41.66%, 66.66%": { transform: "translateY(0%)", opacity: "1" },
          "74.99%, 100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "text-slide-3": {
          "0%, 66.66%": { transform: "translateY(100%)", opacity: "0" },
          "74.99%, 100%": { transform: "translateY(0%)", opacity: "1" },
        },
        fade: {
          "0%": { color: "#c2bcf6" },
          "50%": { color: "#0040C2" },
          "100%": { color: "#0040C2" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        "text-slide-1":
          "text-slide-1 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-2":
          "text-slide-2 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3":
          "text-slide-3 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "fade": "fade 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;