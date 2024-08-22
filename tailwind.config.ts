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
      },
    },
  },
  plugins: [],
};
export default config;
