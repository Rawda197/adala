/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B3FE4",         // بنفسجي غامق
        "primary-light": "#B494F1", // بنفسجي فاتح للهوفر
        secondary: "#FFFFFF",       // أبيض
      },
    },
  },
  plugins: [],
};
