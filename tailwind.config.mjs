/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#00AD00',
				'secondary': '#00CB00',
				'accent': '#4696DF',
			}
		},
		fontFamily: {
			'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
			'display': ['Reddit Sans'],
			'body': ['"Open Sans"'],
			'code': ['Hack']
		}
	},
	plugins: [],
}
