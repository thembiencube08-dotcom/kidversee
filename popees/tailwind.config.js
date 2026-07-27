module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff5870',
          DEFAULT: '#e21a5a',
          dark: '#c4134b',
        },
        secondary: {
          light: '#fff3f3',
          DEFAULT: '#f5f5f5',
          dark: '#e2e2e2',
        },
        popees: {
          pink: '#e21a5a',
          'pink-light': '#ff5870',
          'pink-hover': '#c4134b',
          'pink-bg': '#fff3f3',
          'pink-soft': '#f4c3c6',
          cream: '#fef5ee',
          'text-dark': '#000000',
          'text-muted': 'rgba(0,0,0,0.7)',
          'heading': '#ff5870',
        },
      },
      fontFamily: {
        heading: ['Comfortaa', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
