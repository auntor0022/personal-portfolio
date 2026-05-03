import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        secondaryBg: "rgb(var(--secondaryBg) / <alpha-value>)",
        primaryAccent: "rgb(var(--primaryAccent) / <alpha-value>)",
        secondaryAccent: "rgb(var(--secondaryAccent) / <alpha-value>)",
        textSecondary: "rgb(var(--textSecondary) / <alpha-value>)",
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
