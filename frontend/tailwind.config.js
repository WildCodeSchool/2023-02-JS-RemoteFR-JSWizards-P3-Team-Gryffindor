/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_red: "#7F253E",
        primary_blue: "#257593",
        primary_black: "#3E3E3F",
        connexion_login: "#D9D9D9",
        regiser_b: "#1677FF",
      },
      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "700",
          },
        ],
        xl: [
          "1.414rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [],
  },
};
