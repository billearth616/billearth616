/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        },
        secondary: {
          DEFAULT: '#64ffda',
        },
        light: 'var(--text-light)',
        'text-secondary': 'var(--text-secondary)',
        'border-light': 'var(--border-light)',
        'hover-light': 'var(--hover-light)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

