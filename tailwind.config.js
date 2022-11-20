// tailwind.config.js
const indielayer = require("@indielayer/ui/tailwind.preset");

module.exports = {
	darkMode: "class",
	// load indielayer ui presets
	presets: [indielayer()],
	// allow PurgeCSS to analyze components
	content: ["./index.html", "./**/*.vue", "./src/**/*.{vue,js,ts,jsx,tsx}", "node_modules/@indielayer/ui/**/*"],
};
