//  // tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        NavClr: "#E10A0A",
        green: "#046413",
        HeroClr: "#5D4D4D",
        white: "#ffffff",
        lightash: "#838282",
        midnightash: "#323131",
        purple: "#8400AB",
        purple2: "#7402BA",
        dark: "#000000",

        extend: {},
      },
      screens: {
        xs: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // // => @media (min-width: 1536px) { ... }
        mod: { max: "639px" },
        navLogo: { max: "1080px" },
        minilg: { min: "850px" },
        mid: { max: "767px" },
        Nlg: { max: "1023px" },
        // => @media (min-width: 0px and max-width: 639px) { ... }
      },
      fontFamily: {
        montserrat: ["Montserrat Subrayada", "sans-serif"], // Ensure correct naming
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "hover", "focus"],
      translate: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
