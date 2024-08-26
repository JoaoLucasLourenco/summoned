import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        paper: 'var(--color-bg-paper)',
        primary: 'var(--color-primary)',
        secondary:'var(--color-secondary)',
        warning:'var(--color-warning)',
        success:'var(--color-success)',
        default:'var(--color-default)',
        'primary-contrast': 'var(--color-primary-contrast)',
        'secondary-light': 'var(--color-secondary-light)',
      }
    },
  },
  plugins: [],
};
export default config;
