module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm-mx': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        'popins': ['Poppins','sans-serif'],
      },
      fontWeight: {
        'semisemibold': 550,
      },
    },
  },
  plugins: [],
}
