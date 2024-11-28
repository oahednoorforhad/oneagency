/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        foreground: 'var(--primary)',
        background: 'var(--background)',
        'background-dark': 'var(--background-dark)',
        link: 'var(--link)',
        'link-dark': 'var(--link-dark)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  }
}
