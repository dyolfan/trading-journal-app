/** @type {import("tailwindcss").Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

// eslint-disable-next-line no-undef
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			"main-dark": "#212121",
			"main-darker": "#424242",
			main: "#616161",
			"main-lighter": "#757575",
			"main-light": "#9E9E9E",
		},
	},
	plugins: [],
};
