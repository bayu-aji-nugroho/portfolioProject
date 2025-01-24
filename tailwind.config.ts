import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein:{
         '0%':{opacity:"0%"},
         "100%":{opacity:"100%"}
        }
      },

      animation: {
        "fadein": "fadein 1s"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "darkMode":"rgb(3 7 18)"
      },
    },
  },
  plugins: [],
} satisfies Config;
