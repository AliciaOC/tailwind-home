/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./fuente/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'p':'500px',
        'm':'768px',
        'm-g':'1000px',
        'g':'1279px',
        'xg':'1400px'
      },
      colors:{
        '$blanco': '#fafafa',
        'verde': '#31c5b7',
        'azul-claro': '#afe4f3',
        'azul-oscuro': '#065f88',
        'negro':'#031a03;'
      },
      plugins: [],
    }
  }
}