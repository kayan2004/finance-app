/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige500: "rgba(152, 144, 139, 1)",
        beige100: "rgba(248, 244, 240, 1)",
        grey900: "rgba(32, 31, 36, 1)",
        grey500: "rgba(105, 104, 104, 1)",
        grey300: "rgba(179, 179, 179, 1)",
        grey100: "rgba(242, 242, 242, 1)",
        green: "rgba(39, 124, 120, 1)",
        yellow: "rgba(242, 205, 172, 1)",
        cyan: "rgba(130, 201, 215, 1)",
        navy: "rgba(98, 96, 112, 1)",
        red: "rgba(201, 71, 54, 1)",
        purple: "rgba(130, 108, 176, 1)",
        pink: "rgba(175, 129, 186, 1)",
        turquoise: "rgba(89, 124, 124, 1)",
        brown: "rgba(147, 103, 79, 1)",
        magenta: "rgba(147, 79, 111, 1)",
        blue: "rgba(63, 130, 178, 1)",
        navygrey: "rgba(151, 160, 172, 1)",
        amygreen: "rgba(127, 145, 97, 1)",
        gold: "rgba(202, 179, 97, 1)",
        orange: "rgba(190, 108, 73, 1)",
      },
    },
  },
  plugins: [],
};
