/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'inter': '"Inter", sans-serif',
      },
    },
    colors: {
      transparent: 'transparent',
      textColorPrimary: '#020043',
      yellow: '#FFC637',
      black: '#000000',
      white: '#FBFBFB',
    },
  },
  plugins: [],
}

