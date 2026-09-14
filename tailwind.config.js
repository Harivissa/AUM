/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#04030a',
        indigo: {
          950: '#0a0518',
        },
        gold: {
          100: '#fdf4d3',
          200: '#f3e3b3',
          300: '#ead49c',
          400: '#e8c56b',
          500: '#d8a94a',
          600: '#b8862f',
          700: '#8a631f',
          800: '#5e4213',
          900: '#3a2808',
          950: '#1e1504',
        },
        saffron: '#f0833e',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        deva: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 197, 107, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 197, 107, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
