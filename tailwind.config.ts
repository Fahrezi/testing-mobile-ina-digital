import type { Config } from 'tailwindcss';
// import inaConfig from "ina-ui/config";
const inaConfig = require('ina-ui/config');

const config: Config = inaConfig({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'md-light-surface': '#fff',
        'ios-light-surface': '#fff',
        '1f2026': '#1F2026',
        '333333': '#333333',
        'base-black': '#212121',
        '212121': '#212121',
        subtitle: '#6F6F6F',
        '6f6f6f': '#6F6F6F',
        success: '#19B26B',
        '19b26b': '#19B26B',
        critical: '#AF2A2D',
        af2a2d: '#AF2A2D',
        f7f6f6: '#F7F6F6',
        '1f1f1f': '#1F1F1F',
      },
      fontSize: {
        xxs: ['10px', '18px'],
      },
    },
  },
  plugins: [],
});
export default config;
