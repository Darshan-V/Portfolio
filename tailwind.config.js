/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
]
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      Amatic: ["Amatic SC", "sans"],
      Pacifico: ["Pacifico", "serief"],
      Neucha: ["Neucha", "mono"],
    },
    screens: {
      xs: "350",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      moblie: "360px",
    },
    backgroundImage: {
      bgImage: "url(../../public/bg.png)",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
    animation: {
      wiggle: "wiggle 3s ease-in-out infinite",
    },
  },
}
export const plugins = []
