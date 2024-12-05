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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        aeonik: ["Aeonik", "sans-serif"],
        aeonik_regular: ["Aeonik-Regular", "sans-serif"],
        aeonik_medium: ["Aeonik-Medium", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
      },
      keyframes: {
        "text-slide-1": {
          "0%, 33.33%": { transform: "translateY(0%)", opacity: "1" }, // First text appears
          "41.66%, 100%": { transform: "translateY(-100%)", opacity: "0" }, // Slide out
        },
        "text-slide-2": {
          "0%, 33.33%": { transform: "translateY(100%)", opacity: "0" }, // Offscreen below
          "41.66%, 66.66%": { transform: "translateY(0%)", opacity: "1" }, // Slide in and stay
          "74.99%, 100%": { transform: "translateY(-100%)", opacity: "0" }, // Slide out
        },
        "text-slide-3": {
          "0%, 66.66%": { transform: "translateY(100%)", opacity: "0" }, // Offscreen below
          "74.99%, 100%": { transform: "translateY(0%)", opacity: "1" }, // Slide in and stay
        },
        fade: {
          "0%": { color: "#c2bcf6" },
          "50%": { color: "#0040C2" },
          "100%": { color: "#0040C2" },
        },
      },
      animation: {
        "text-slide-1":
          "text-slide-1 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-2":
          "text-slide-2 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3":
          "text-slide-3 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        fade: "fade 5s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
