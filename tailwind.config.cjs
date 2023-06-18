/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
			colors: {
				dark: '#2a2a2a',
				// dark: "#121212",
				// headerColor: "#fc7a1e",
				light: '#dddddd',
				primary: '#139469',
				primaryDark: '#d2991d'
			},
		},
	},
	plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
	
}
