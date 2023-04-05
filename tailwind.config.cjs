const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    
    content: ["./src/**/*.{html,js,astro,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
};