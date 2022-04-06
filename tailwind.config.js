module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,elm}"],
  theme: {
    colors: {
      surface: {
        0: "hsl(0, 0%, 9%)",
        1: "hsl(0, 0%, 96%)",
      },
      text: {
        0: "hsl(0, 0%, 98%)",
        1: "hsl(0, 0%, 7%)",
      },
      brand: {
        0: "hsl(39, 100%, 50%)",
      },
    },
    fontFamily: {
      "fat-wandals": ["var(--font-fat-wandals)"],
      grizzly: ["var(--font-grizzly)"],
    },
    extend: {},
  },
  plugins: [],
};
