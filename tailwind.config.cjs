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
				// rust
				// baseLight: '#e1e1db',
				// textLight: '#262625',
				// primaryLight: '#003b7a',
				// codeblockLight: '#21262d',
				// codeTextLight: '#e1e1db',
				// baseDark: '#282828',
				// textDark: '#dddddd',
				// primaryDark: '#d2991d',
				// codeblockDark: '#414141',
				// codeTextDark: '#f1aa50',

				// ayu
				baseLight: '#ffffff',
				textLight: '#0f1419',
				primaryLight: '#3873ad',
				codeblockLight: '#17191e',
				codeTextLight: '#fafafa',
				baseDark: '#0d0f14',
				textDark: '#c5c5c5',
				primaryDark: '#39afd7',
				codeblockDark: '#17191e',
				codeTextDark: '#fafafa',
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
						':root:not(.dark) li::marker': {
							color: theme('colors.textLight'),
						},
						'.dark li::marker': {
							color: theme('colors.textDark'),
						},
						// 'root:not(.dark) blockquote': {
						// 	color: theme('colors.dark'),
						// },
						// '.dark blockquote': {
						// 	color: theme('colors.light'),
						// },
						'root:not(.dark) code:not(pre code)': {

						},
						'.dark code:not(pre code)': {
							backgroundColor: '#343841'
						},
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
