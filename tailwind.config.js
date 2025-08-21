/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#F8F7F4',
        muted: '#6B7280'
      },
    },
    fontFamily: {
      serif: ['var(--font-serif)'],
      sans: ['ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
}
