const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './modules/**/*.js',
    './layouts/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'green',
        secondary: 'indigo',
        highlight: 'purple',
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        blue: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        indigo: {
          50: '#f6f9fb',
          100: '#e4effd',
          200: '#c9d5fb',
          300: '#a4b1f4',
          400: '#8889ed',
          500: '#7165e8',
          600: '#5e48dd',
          700: '#4836c0',
          800: '#322693',
          900: '#1c195e',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        emphasis: ['Sriracha', ...fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.purple.500'),
              textDecoration: 'none',
              borderRadius: theme('borderRadius.xl'),
              transition: 'color 0.25s ease-out',
              '&::selection': {
                color: theme('colors.indigo.700'),
              },
              '&:hover': {
                color: theme('colors.blue.500'),
                textDecoration: 'underline',
              },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: {
              color: theme('colors.green.700'),
              fontWeight: 'normal',
            },
            'code::before, code::after': {
              content: 'none',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            em: {
              color: theme('colors.blue.500'),
              fontFamily: [theme('fontFamily.emphasis')],
              fontStyle: 'normal',
              letterSpacing: '-0.25px',
            },
            strong:{
              color: 'unset'
            },
            table: {
              display: 'block',
              overflowY: 'auto',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.purple.400'),
              '&:hover': {
                color: theme('colors.purple.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
