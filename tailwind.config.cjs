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
				dark: '#282828',
				light: '#e1e1db',
				primary: '#003b7a',
				primaryDark: '#d2991d',
				codeblock: '#191f26',
				codeblockDark: '#414141',
				codeText: '#e1e1db',
				codeTextDark: '#f1aa50',

			},
			typography: ({theme}) => ({
				DEFAULT: {
					css: {
						code: {
							padding: '0.25rem 0.5rem',
							borderRadius: '0.25rem',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none'
						},
						hr: {
							border: 'dashed 1px',
						},
						// '.dark blockquote': {
						// 	borderLeftColor: theme('colors.light'),
						// },
						// ':root:not(.dark) blockquote': {
						// 	borderLeftColor: theme('colors.dark'),
						// },
						':root:not(.dark) li::marker': {
							color: theme('colors.dark'),
						},
						'.dark li::marker': {
							color: theme('colors.light'),
						},
						// 'thead tr': {
						// 	'border-collapse': 'collapse',
						// 	border: '1px solid black',
						// }
					}
				},
				dark: {
					css: {
						pre: {
							backgroundColor: theme('colors.dark'),
						}
					}
				}
			})
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
