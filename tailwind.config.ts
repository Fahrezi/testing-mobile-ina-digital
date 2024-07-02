import type { Config } from "tailwindcss";
// import inaConfig from "ina-ui/config";
const inaConfig = require("ina-ui/config");

const config: Config = inaConfig({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "md-light-surface": "#fff",
        "ios-light-surface": "#fff",
        "1f2026": "#1F2026",
        "333333": "#333333",
        "base-black": "#212121",
        "212121": "#212121",
        title: "#282828",
        subtitle: "#6F6F6F",
        "6f6f6f": "#6F6F6F",
        success: "#19B26B",
        "19b26b": "#19B26B",
        critical: "#AF2A2D",
        af2a2d: "#AF2A2D",
        f7f6f6: "#F7F6F6",
        "1f1f1f": "#1F1F1F",
        "stroke-primary": "#EAECF0",
        f9fafb: "#F9FAFB",
        primary: "#1F1F1F",
        secondary: "#667085",
        "tertiary-100": "#F2F4F7",
        "tertiary-300": "#D0D5DD",
        "tertiary-500": "#667085",
        ededed: "#EDEDED",
        fafafa: "#FAFAFA",
        "green-200": "#06AA6F",
        "green-soft": "#EBFAF5",
        "181717": "#181717",
        "98A2B3": "#98A2B3",
        "tertiary-800": "#1D2939",
        f1f1f1: "#f1f1f1",
        "information-50": "#F0F9FF",
        "information-500": "#0BA5EC",
        "warning-50": "#FFFAEB",
        "warning-500": "#F79009",
        "grey-1": "#616D7E",
      },
      fontSize: {
        xxs: ["10px", "18px"],
      },
    },
  },
  plugins: [],
});
export default config;
