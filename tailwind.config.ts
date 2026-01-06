import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9e6',
          100: '#fff2cc',
          300: '#ffd659',
          500: '#ffcc00'
        },
        muted: '#777777'
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;