module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['IRANSansFaNum'],
      iransans: ['IRANSansFaNum'],
    
    },
    extend: {},
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
};
