// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image-edge",
		"@nuxtjs/color-mode",
		"@nuxtjs/fontaine",
		[
			"@indielayer/ui/nuxt",
			{
				prefix: "il",
			},
		],
	],
	css: [
		"@/assets/style/main.scss",
		"@/assets/style/html.scss",
		"@/assets/style/indielayer.scss",
		"animate.css/animate.min.css",
	],
});
