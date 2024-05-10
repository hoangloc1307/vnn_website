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
        footer: '#062754',
      },
      spacing: {
        '8xl': '90rem',
      },
      height: {
        'screen-without-header-m': 'calc(100dvh - 48px)',
        'screen-without-header': 'calc(100dvh - 58px)',
      },
      backgroundImage: {
        'footer-image': "url('/images/img_footer.svg')",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
