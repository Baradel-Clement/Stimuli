/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        blue: '#0000FF',
        green: '#00FFCC',
        salmon: '#F0827E',
        darkGrey: '#B9B3B3',
        grey: '#00000029',
        lightGrey: '#F2EBEB',
        darkBlue: '#000099',
        blueRose: '#283378',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        amsterdam: ['Amsterdam', 'sans-serif'],
        gagalin: ['Gagalin', 'sans-serif'],
      },
      fontSize: {
        shM: '14px',
        nav: '16px',
        body: '18px',
        hS: '28px',
        hM: '32px',
        hL: '56px',
        hXL: '100px',
        hXXL: '150px',
      },
      lineHeight: {
        S: '25px',
        S: '28px',
        M: '32px',
      },
      letterSpacing: {
        XS: '1.25px',
        S: '2.35px',
        M: '2.7px',
        L: '3.38px',
        XL: '4.75px',
      },
      backgroundImage: {
        /* 'background-home-desktop': "url('../public/assets/home/background-home-desktop.jpg')", */
      }
    },
  },
  darkMode: 'class',
}
