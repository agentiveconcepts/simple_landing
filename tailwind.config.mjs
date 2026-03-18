/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      sm: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          50: "#F7F7F7",
          100: "#EEEEEE",
          200: "#DDDDDD",
          800: "#333333",
          900: "#222222",
        },
        primary: "#CCFF00",
        neon: "#CCFF00",
      },
      fontFamily: {
        sans: ["Inter", "Outfit", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
