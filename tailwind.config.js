/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include jsx and tsx if using React with TypeScript
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
    },
  },
  plugins: [],
}
