/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "box": "inset 2px 15px 40px 15px rgba(0, 0, 0, 0.5)",
        "input-box": "inset 2px 4px 8px 2px rgba(0, 0, 0, 0.5)",
        "indicator-red": "0px 0px 10px 0.2px rgba(193, 41, 46, 0.6)",
        "indicator-green": "0px 0px 12px 0.1px rgba(90, 255, 21, 0.4)",
        "indicator-yellow": "0px 0px 3px 0.02px rgba(239, 193, 0, 0.4)",
      },
      colors: {
        "ubuntu-purple": "#5e2750",
        "charcoal": "#161925",
        "light-charcoal": "#2e3554",
        "lighter-charcoal": "#616ea6",
        "hacky-green": "#5aff15",
        "indicator-yellow": "#ffed15",
        "output-wrong-red": "#c1292e",
        "vscode-teal-dark": "#06373a",
        "vscode-teal-light": "#1f5f58",
        "terminal-orange": "#ff7800"
      }
    },
  },
  plugins: [],
};
