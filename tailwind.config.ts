import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        paper: '#f8fafc',
        line: '#d8dee9',
        accent: '#0f766e',
        signal: '#b45309',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 18px 50px rgba(17, 24, 39, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
