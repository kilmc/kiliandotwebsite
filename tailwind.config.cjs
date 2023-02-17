/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Helvetica', 'Arial', 'sans-serif'],
			serif: ['kepler-std', 'serif'],
			mono: ['anonymous-pro', 'monospace']
		},
		extend: {
			colors: {
				blue: {
					900: 'hsl(235,100%,18%)',
					800: 'hsl(235,100%,28%)',
					700: 'hsl(235,100%,38%)',
					600: 'hsl(235,100%,48%)',
					500: 'hsl(235,100%,58%)',
					400: 'hsl(235,100%,68%)',
					300: 'hsl(235,100%,78%)',
					200: 'hsl(235,100%,88%)',
					100: 'hsl(235,100%,98%)'
				},
				pink: {
					900: 'hsl(330,100%,10.6%)',
					800: 'hsl(330,100%,20.6%)',
					700: 'hsl(330,100%,30.6%)',
					600: 'hsl(330,100%,40.6%)',
					500: 'hsl(330,100%,50.6%)',
					400: 'hsl(330,100%,60.6%)',
					300: 'hsl(330,100%,70.6%)',
					200: 'hsl(330,100%,80.6%)',
					100: 'hsl(330,100%,90.6%)'
				},
				cream: {
					100: '#FEF6EE'
				}
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/4': '3 / 4',
				'7/5': '7 / 5',
				'7/10': '7 / 10'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
