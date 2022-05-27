module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF5733",
          secondary: "#154360",
          accent: "#5D6D7E",
          neutral: "#F79E1B",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}