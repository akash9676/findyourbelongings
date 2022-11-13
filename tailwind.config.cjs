/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"button-colour": '#1a6c7a',
				"button-hovercolour": "#153243",
			},
		},
	},
	plugins: [],
};
