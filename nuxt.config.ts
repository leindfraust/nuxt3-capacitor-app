// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
    tailwindcss: {
        cssPath: "@/assets/globals.css",
    },
    build: {
        transpile: ["konsta"],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});