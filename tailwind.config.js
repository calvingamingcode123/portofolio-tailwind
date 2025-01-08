//config
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:'true',
      padding:'20px',
    },
    colors: {
      'transparent': 'transparent',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'emerlad': '#10b981',
      'violet': '#9c7ae6',
      'teal': '#45d9e0',
      'teal-light': '#89f2f4',
      'slate': '#0f172a',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens:{
        '2xl': '1320px',
      }
    }
  },
}