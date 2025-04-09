import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-contrast": "var(--background-contrast)",
        foreground: "var(--foreground)",
        "foreground-contrast": "var(--foreground-contrast)",
        "text-contrast": "var(--text-contrast)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        }
      },
      borderRadius: {
        DEFAULT: "var(--shape)",
      }
    },
  },
  plugins: [],
} satisfies Config;
