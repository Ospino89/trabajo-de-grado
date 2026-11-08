/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts}'],
  theme: {
    extend: {
      colors: { vino: '#6E1F2F', ocre: '#9A6B12', papel: '#F7F5F0', tinta: '#2B1B1F' },
      fontFamily: {
        serif: ['Alegreya', 'Georgia', 'serif'],
        sans: ['"Alegreya Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
