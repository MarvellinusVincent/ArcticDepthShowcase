module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'arctic-primary': '#5E81AC',
        'arctic-dark': '#171A22',
        'arctic-accent': '#40E0D0',
        'arctic-text': '#E0E7EC',
        'arctic-secondary': '#4A6A8C',
        'arctic-highlight': '#7F9BC5',
        'arctic-error': '#EE6C7D',
        'arctic-warning': '#F9C74F',
        'arctic-deep': '#0F172A',
        'arctic-navy': '#1E293B'
      },
      keyframes: {
        snowfall: {
          '0%': {
            transform: 'translateY(-10vh) translateX(0)',
            opacity: '0'
          },
          '10%': {
            opacity: '0.8'
          },
          '90%': {
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(110vh) translateX(20px)',
            opacity: '0'
          }
        }
      },
      animation: {
        snowfall: 'snowfall linear infinite',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  }
}