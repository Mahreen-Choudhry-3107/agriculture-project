/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'agri-green': '#1a6b3c',
        'agri-green-dark': '#0f4d2a',
        'agri-green-light': '#2d9b5a',
        'agri-yellow': '#f4c430',
        'agri-gold': '#d4a017',
        'agri-brown': '#8B4513',
      },
    },
  },
  plugins: [],
};
