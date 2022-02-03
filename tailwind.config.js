module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'navPaddingLeft': '137px',
        'navPaddingRight': '91px',
        'navPaddingTop': '17px',
        'navPaddingBottom': '18px',

      },
      margin: {
        'navItem': '40px',
      },
      height: {
        'navHeight': '96px',
        'eventImageHeight': '531px',
        'smallImageHeight': '205px',
        'bigImageHeight' : '434px',
      },
      textColor: {
        'secondary': '#E1E3E5'
      },
      colors: {
        'footerColor': '#3592A8',
        'ccColor': '#153A43',
        'headerButton': '#40AFC9'
      },
      width: {
        'smallImageWidth': '135px'
      }
    },
  },
  variants: {
    extend: {
      padding: ['first'],
    },
  },
  plugins: [],
}
