import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        navy: '#0B1020',
        paper: '#EFF6FF',
        line: '#CFE0F5',
        accent: '#2563EB',
        cyan: '#22D3EE',
        signal: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 70px rgba(11, 16, 32, 0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config;
