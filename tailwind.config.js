module.exports ={
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json'
  ],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#FD7603', 
        primaryHover:'#fd7803c5'
      },
      height: {
        '94': '22rem', 
      }
    }
  }
}