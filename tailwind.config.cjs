/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif'],
			serif: ['kepler-std', 'serif'],
			mono: ['monospace']
		},
		extend: {
			// colors:{
			// }
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
