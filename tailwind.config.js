/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your project paths
    "./node_modules/flowbite/**/*.js" // Correct path for Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Ensure you have Flowbite plugin included
  ],
}
