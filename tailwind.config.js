/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          emerald: '#10B981',
          rose: '#F43F5E',
          orange: '#F97316',
          navy: '#1E3A5F',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 50%, #06B6D4 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F43F5E 0%, #F97316 100%)',
        'gradient-cool': 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
      }
    },
  },
  plugins: [],
}

