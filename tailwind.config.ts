import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009de7',
        dark: '#2c3e50',
      },
      spacing: {
        '8xl': '90rem',
      },
      height: {
        'screen-without-header-m': 'calc(100vh - 48px)',
        'screen-without-header': 'calc(100vh - 58px)',
      },
    },
  },
  plugins: [],
};
export default config;
