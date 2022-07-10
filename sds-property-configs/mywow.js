const mywow = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bloop: "#0000ff",
    },
    fontFamily: {
      sans: ["Verdana", "sans-serif"],
      serif: ["Arial", "serif"],
    },
    extend: {
      borderRadius: {
        "10xl": "2rem",
      },
    },
  },
};

module.exports = mywow;