import {
  heroui
} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        "6xl": "4rem",
      },

      animation: {
        "zoom-in": "zoomIn 1.5s ease-in-out forwards",
        "block-in": "scaleIn 0.8s ease-out forwards",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(0.75)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        scaleIn: {
          "0%": {
            transform: "scale(0.75)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            foreground: "#2C1001",
            primary: "#FFDE81",
            secondary: {
              DEFAULT: "#49342F",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFDE81",
              foreground: "#2C1001",
            },
            secondary: "#49342F",
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};

export default config;