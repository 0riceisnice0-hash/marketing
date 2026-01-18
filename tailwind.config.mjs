/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Premium Dark Palette
        bg: {
          base: '#0a0a0a',
          elevated: '#141414',
          surface: '#1a1a1a',
          overlay: '#1f1f1f',
        },
        accent: {
          primary: {
            DEFAULT: '#6366f1',
            hover: '#4f46e5',
          },
          secondary: {
            DEFAULT: '#8b5cf6',
            hover: '#7c3aed',
          },
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
          tertiary: '#71717a',
          inverse: '#0a0a0a',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          emphasis: 'rgba(255, 255, 255, 0.2)',
        },
        // Keep old primary for backward compatibility during transition
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        heading: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 24px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 24px rgba(139, 92, 246, 0.3)',
        'glow-soft': '0 0 40px rgba(99, 102, 241, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
