/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: false,

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      // fontFamily: {
      //   sans: 'var(--font-roboto)',
      // },
      // colors: {
      //   gray: {
      //     50: '#eaeaea',
      //     100: '#bebebf',
      //     200: '#9e9ea0',
      //     300: '#727275',
      //     400: '#56565a',
      //     500: '#2c2c31',
      //     600: '#28282d',
      //     700: '#1f1f23',
      //     800: '#18181b',
      //     900: '#121215',
      //   },
      // },
    },
  },
  variants: {},
  plugins: [],
}
