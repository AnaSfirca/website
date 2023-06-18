/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '1440px'
      }
      ,colors: {
        'ana-purple': '#A280B5',
        'ana-light-purple': '#bca3cb',
        'ana-blue':'#2596be',
        'ana-light-blue':'#beeaea',
        'psihozone-blue':'#69bdd2',
        'ana-purple-blog':'#B4A0A2',
        'ana-purple-servicii':'#a082b4'
      },
      fontFamily: {
        DancingScriptRegular:["DancingScript_Regular"],
        QuicksandRegular:["Quicksand-Regular"],
        QuicksandLight:["Quicksand-Light"],
        KaushanScript_Regular:["KaushanScript_Regular"],
        sourceserifprolight:["source-serif-pro-light"],
        sourceserifvariableroman:["source-serif-variable-roman"],
        EBGaramond:["EBGaramond"]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}