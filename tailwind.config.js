/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 10px 6px rgba(0, 0, 0, 0.25)', // custom all-around shadow
      },
      keyframes: {
        slowbounce: {
          '0%, 100%': { transform: 'translateY(-8%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        slowbounce: 'slowbounce 4s infinite', // 3s = slower, adjust as needed
      },
    },
  },
  plugins: [],
}

