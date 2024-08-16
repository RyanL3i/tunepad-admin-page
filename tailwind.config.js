/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        bold: 700,
      },
      colors: {
        'custom-navy': '#465572',
        'custom-cream': '#F4F1DE',
        'custom-gray': "F9FBFE",
      },
      width: {
        '120': '30rem',
      },
      height: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}