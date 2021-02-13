/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'display': ['Alfa Slab One', 'Georgia', 'Cambria'],
      'body': ['Montserrat', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          '100': '#eaeaea',
          '200': '#d6d6d6',
          '300': '#c1c1c1',
          '400': '#a5a5a5',
          '500': '#777777',
          '600': '#4f4f4f',
          '700': '#353535',
          '800': '#262626',
          '900': '#0c0c0c',
        }
      }
    }
  },
  variants: {},
  plugins: []
}
