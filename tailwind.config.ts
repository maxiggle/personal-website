import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        muted: 'rgba(250, 250, 250, 0.6)',
        card: 'rgba(250, 250, 250, 0.05)',
        'card-border': 'rgba(250, 250, 250, 0.08)',
        // Role-pill accents
        'accent-blue': '#60a5fa',
        'accent-purple': '#c084fc',
        'accent-green': '#34d399',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
