/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a', // Forest green
          700: '#15803d',
          800: '#166534',
          900: '#14532d', // Deep ink forest
          950: '#052e16',
        },
        sunflower: {
          light: '#fde047',
          DEFAULT: '#eab308', // Sunflower gold
          dark: '#ca8a04',
          pale: '#fefce8',
        },
        cream: {
          DEFAULT: '#faf7f2',
          deep: '#f2ede4',
        },
        ink: {
          DEFAULT: '#022c22', // Very dark forest/ink
          60: 'rgba(2, 44, 34, 0.6)',
          20: 'rgba(2, 44, 34, 0.12)',
        },
        dark: {
          900: '#0a1a12',
          800: '#112b1d',
          700: '#183d28',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 24s linear infinite',
        'scanLine': 'scanLine 2s ease-in-out infinite',
        'slideInLeft': 'slideInLeft 0.8s 0.6s both ease',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanLine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
