import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'seaa-blue':       '#0D2B5B',
        'seaa-blue-light': '#1E3A8A',
        'seaa-yellow':     '#F4B400',
        'seaa-yellow-light':'#FFC107',
        'seaa-red':        '#E53935',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'typing-dot': {
          '0%, 60%, 100%': { transform: 'translateY(0)' },
          '30%':           { transform: 'translateY(-4px)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'fade-in-up':  'fade-in-up 0.4s ease-out',
        'typing-dot':  'typing-dot 1.4s infinite',
        'spin-fast':   'spin 0.7s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config