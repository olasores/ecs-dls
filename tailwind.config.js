// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin'
// export default {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#FF914C',
          800: '#FF914C',
          900: '#FF914C'
        }
      },
      fontFamily: {
        judson: ['Judson', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [flowbitePlugin]
} 