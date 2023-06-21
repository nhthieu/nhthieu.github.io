/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["Segoe UI", ...defaultTheme.fontFamily.sans],
      },
			colors: {
				dark: '#2a2a2a',
				// dark: "#121212",
				// headerColor: "#fc7a1e",
				light: '#e1e1db',
				primary: '#003b7a',
				primaryDark: '#d2991d',
				blockcode: '#414141',
			},
		},
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1280px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			xs: { max: '479px' },
		},
	},
	plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
