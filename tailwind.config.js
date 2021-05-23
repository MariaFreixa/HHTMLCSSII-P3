const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      header: ['Galatia SIL', 'Georgia', 'serif'],
      body: ['Avenir Book', 'Franklin Gothic Medium', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      colors: {
        primary: '#B666D2',
        fondo: '#f3f3f3',
        hovertext: '#E0B0FF',
      },
      outline: {
        purple: '2px solid #B666D2',
      },
      spacing: {
        '75': '75%',
      }
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '5': '5px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};