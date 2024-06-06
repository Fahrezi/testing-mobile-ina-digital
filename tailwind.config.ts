import type { Config } from "tailwindcss";
// import inaConfig from "ina-ui/config";
const inaConfig = require('ina-ui/config');

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
        'md-light-surface': '#fff',
        'ios-light-surface': '#fff',
      },
    },
  },
  plugins: [],
});
export default config;
