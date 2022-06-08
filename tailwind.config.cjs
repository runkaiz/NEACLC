const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
