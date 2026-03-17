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
        lobster: {
          accent: '#FF5A2D',
          'accent-bright': '#FF7A3D',
          'accent-dim': '#D14A22',
          info: '#FF8A5B',
          success: '#2FBF71',
          warn: '#FFB020',
          error: '#E23D2D',
          muted: '#8B7F77',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
