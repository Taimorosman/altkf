/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00E5FF',
        'brand-navy': '#1E1E1E',
        'brand-red': '#D42B2B',
        'brand-ice': '#E0F2FE',
        'brand-silver': '#B8C4CE',
        'brand-dark': '#0D1627',
        'brand-dark-blue': '#132038',
        'brand-card': '#172642',
        'brand-card-hover': '#1D3154',
      },
      fontFamily: {
        arabic: ['var(--font-cairo)', 'sans-serif'],
        english: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
