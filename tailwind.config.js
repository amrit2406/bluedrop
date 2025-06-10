// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',     // Richer blue (used for main branding)
        secondary: '#00A4BD',   // Vibrant teal (for accents)
        accent: '#FFD700',      // Premium gold (for highlights)
        dark: '#1E2B4D',        // Deep navy (for backgrounds/text)
        light: '#E8F4FF',       // Soft blue (for backgrounds)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
    'float': 'float 6s ease-in-out infinite',
    'fade-in-up': 'fade-in-up 0.8s ease-out both'
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    'fade-in-up': {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    }
  }
    },
  },
  plugins: [],
}
