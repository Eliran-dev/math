import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: '15px'
      },

      colors: {
        'shadowBox': '#CBDBFC',
        'boxColor': '#2155CD',
        'textTitle': '#0AA1DD',
        'bgColor': '#141529'
      },

      fontFamily: {
        'firaCode': "'Fira Code', monospace",
        'rubikFont': "'Rubik Mono One', sans-serif",
      },

      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
export default config
