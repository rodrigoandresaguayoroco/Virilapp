import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'viril-400': '#70E0E0',
        'viril-700': '#303060',
        'viril-950': '#101040',
        'viril-50': '#FFFFFF',
        'viril-black': '#101010',
      },
    },
  },
  plugins: [],
}
export default config