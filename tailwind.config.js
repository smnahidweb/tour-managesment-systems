// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#22C55E',
        background: '#F9FAFB',
        textMain: '#1F2937',
      },
    },
  },
  plugins: [],
});
