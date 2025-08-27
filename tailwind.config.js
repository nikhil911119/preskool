/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom2: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15);",
        custom: "0px 4.4px 12px -1px rgba(222, 222, 222, 0.3607843137)",
      },
    },
  },
  plugins: [],
};
