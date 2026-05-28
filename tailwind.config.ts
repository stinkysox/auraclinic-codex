import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf6ef",
        champagne: "#ead9bf",
        gold: "#b7925b",
        clay: "#c98f75",
        charcoal: "#211c18",
        mist: "#f3ebe2",
        porcelain: "#fffaf4",
        cocoa: "#5d4a3d"
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      boxShadow: {
        aura: "0 28px 80px rgba(67, 46, 31, 0.16)",
        glow: "0 0 80px rgba(183, 146, 91, 0.24)"
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 10%, rgba(255,255,255,.55), transparent 24%), radial-gradient(circle at 80% 20%, rgba(201,143,117,.18), transparent 25%), linear-gradient(135deg, #fbf6ef 0%, #f3ebe2 50%, #fffaf4 100%)"
      }
    }
  },
  plugins: []
};

export default config;
