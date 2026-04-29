import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        secondaryBg: "#0F0F0F",
        primaryAccent: "#E100FF",
        secondaryAccent: "#4D55FF",
        textSecondary: "#A1A1AA",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(225, 0, 255, 0.4)',
      },
      borderColor: {
        'white-10': 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
