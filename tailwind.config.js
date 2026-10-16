/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ges: {
          navy: {
            DEFAULT: '#1f265a',
            50: '#f0f3fa',
            100: '#dfe4f4',
            200: '#c3cde9',
            800: '#192049',
            900: '#1f265a',
            950: '#0b1026',
          },
          crimson: {
            DEFAULT: '#e53238',
            hover: '#cf2228',
            subtle: 'rgba(229, 50, 56, 0.08)',
          },
          cobalt: {
            DEFAULT: '#3365b0',
            light: '#4d7fcb',
            subtle: 'rgba(51, 101, 176, 0.08)',
          },
          canvas: {
            DEFAULT: '#ffffff',
            off: '#f6f8fb',
            card: '#f9fafc',
            dark: '#0b1026',
            darker: '#060a18',
          },
          line: {
            light: 'rgba(31, 38, 90, 0.12)',
            medium: 'rgba(31, 38, 90, 0.22)',
            dark: 'rgba(255, 255, 255, 0.12)',
          }
        }
      },
      fontFamily: {
        display: ['var(--font-grotesk)', 'Space Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        architectural: '0.2em',
        editorial: '-0.03em',
      }
    },
  },
  plugins: [],
}
