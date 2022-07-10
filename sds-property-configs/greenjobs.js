const greenjobs = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#bada55",
    },
    fontFamily: {
      sans: ["Greeny", "sans-serif"],
      serif: ["Jobs", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};

module.exports = greenjobs;
