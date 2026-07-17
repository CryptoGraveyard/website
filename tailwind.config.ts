import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"]
      },
      colors: {
        grave: {
          950: "#050709",
          900: "#0b0f13",
          800: "#111820",
          700: "#1c2630",
          500: "#405160"
        },
        acid: {
          400: "#a6ff3d",
          500: "#78d92a"
        },
        bone: {
          100: "#f4f0dc",
          200: "#d8d0b6",
          500: "#9d947a"
        },
        blood: {
          500: "#dc3245",
          700: "#8f1d32"
        },
        violet: {
          400: "#b575ff",
          700: "#6d39b5"
        }
      },
      boxShadow: {
        glow: "0 0 28px rgba(166, 255, 61, 0.18)",
        card: "0 18px 60px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
