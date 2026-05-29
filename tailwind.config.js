/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        terminal: {
          bg: "#0D1117",
          surface: "#161B22",
          border: "#30363D",
          blue: "#58A6FF",
          green: "#7EE787",
          orange: "#F0883E",
          purple: "#BC8CFF",
          muted: "#484F58",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Noto Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
