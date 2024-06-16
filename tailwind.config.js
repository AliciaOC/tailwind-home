/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./fuente/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  variants: {},
  theme: {
    extend: {
      screens: {
        'p': '500px',
        'm': '768px',
        'm-g': '1000px',
        'g': '1279px',
        'xg': '1400px'
      },
      colors: {
        'blanco': '#fafafa',
        'verde': '#31c5b7',
        'azul-claro': '#afe4f3',
        'azul-oscuro': '#065f88',
        'negro': '#031a03'
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        'ansiedad-movil':'url(../imagenes/ansiedad-movil.webp")',
        'depresion-movil':'url("../imagenes/depresion-movil.webp")',
        'sexual-movil':'url("../imagenes/sexual-movil.webp")',
        'pareja-movil':'url("../imagenes/pareja-movil.webp")',
        'ansiedad-tablet':'url("../imagenes/ansiedad-tablet.webp")',
        'depresion-tablet':'url("../imagenes/depresion-tablet.webp")',
        'sexual-tablet':'url("../imagenes/sexual-tablet.webp")',
        'pareja-tablet':'url("../imagenes/pareja-tablet.webp")',
        'ansiedad-escritorio':'url("../imagenes/ansiedad-escritorio.webp")',
        'depresion-escritorio':'url("../imagenes/depresion-escritorio.webp")',
        'sexual-escritorio':'url("../imagenes/sexual-escritorio.webp")',
        'pareja-escritorio':'url("../imagenes/pareja-escritorio.webp")'
      },
    }
  },
  plugins: [],
}
