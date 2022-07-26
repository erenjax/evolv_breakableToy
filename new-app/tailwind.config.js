/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple": "#4b296b",
        "charcoal": "#161925",
        "hacky-green": "#5aff15",
        "output-wrong-red": "#c1292e",
        "vscode-teal-dark": "#06373a",
        "vscode-teal-light": "#1f5f58",
        "terminal-orange": "#ff7711"
      }
    },
  },
  plugins: [],
};
