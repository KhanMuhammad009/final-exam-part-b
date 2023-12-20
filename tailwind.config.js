/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-02": "#fff",
        gray: {
          "100": "#222",
          "200": "#1f1f21",
          "300": "#191b1f",
          "400": "#1a1a1a",
          "500": "#0e0e0e",
          "600": "#110915",
          "700": "rgba(255, 255, 255, 0.7)",
          "800": "rgba(255, 255, 255, 0.9)",
          "900": "rgba(255, 255, 255, 0.4)",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f8f8f8",
        },
        "base-01": "#000",
        primary: "#345dee",
        darkslateblue: "#6f348e",
        darkgray: "#979797",
        gainsboro: "#e7e6e7",
        neutral: "#dfe4ea",
        dark: "#18214d",
        placeholder: "#eff2f6",
        deepskyblue: "#18ade4",
        orchid: "#aa58aa",
        crimson: "#ee3465",
      },
      spacing: {},
      fontFamily: {
        "body-16-regular": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "7xs-8": "5.8px",
        "10xs-9": "2.9px",
      },
    },
    fontSize: {
      base: "16px",
      "46xl": "65px",
      "13xl": "32px",
      "xs-7": "11.7px",
      "sm-1": "13.1px",
      "3xl": "22px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
