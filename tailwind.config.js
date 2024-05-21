/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1025px',
      xl:'1367px'
    },
    borderRadius: {
      'md':'5px',
    },
    padding:{
      '0':'0px',
      '2':'10px',
      '4':'16px',
      '5':'20px',
      '6':'30px',
      '9':'35px',
      '11':'50px',
      '24':'100px'
    },
    lineHeight:{
      '4':'18px',
      '6':'24px',
      '7':'28px'
    },
  },
  plugins: [],
}