/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        '100': '#e4edeb',
        '300': '#008267',
        '400': '#014839',
      },
      black: '#121212',
      white: '#fafafa',
      gray: {
        '400': '#d4d4d4',
      },
      brown: {
        '400': '#212121',
      }
    },
    fontFamily: {
      ysabeau: ['Ysabeau Office', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

