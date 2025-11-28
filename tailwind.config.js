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
        primary: '#FD7603'
      },
      height: {
        '94': '22rem', 
      }
    }
  }
}