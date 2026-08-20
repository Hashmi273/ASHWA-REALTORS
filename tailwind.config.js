/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1B2E',
          primary: '#0F1B2E',
          deep: '#152238',
          dark: '#0A121F',
          light: '#1E2D4A',
        },
        gold: {
          DEFAULT: '#B8935A',
          primary: '#B8935A',
          muted: '#C9A868',
          light: '#DFC38A',
          dark: '#96743E',
        },
        slate: {
          grey: '#8B93A1',
          subtle: '#6B7280',
          light: '#E2E8F0',
        },
        brand: {
          offwhite: '#FAF9F6',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 27, 46, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(184, 147, 90, 0.2)',
        'gold-glow': '0 0 25px rgba(184, 147, 90, 0.3)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0F1B2E 0%, #152238 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8935A 0%, #C9A868 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(15, 27, 46, 0.95), rgba(21, 34, 56, 0.85))',
      }
    },
  },
  plugins: [],
}
