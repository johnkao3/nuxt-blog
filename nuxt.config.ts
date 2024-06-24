// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "dayjs-nuxt", "nuxt-gtag", "@nuxtjs/apollo"],
  gtag: {
    id: process.env.GTAG_ID,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:4000/graphql",
        browserHttpEndpoint: "/graphql",
      },
    },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  },
  vite: {
    server: {
      proxy: {
        "/graphql": {
          target: "http://localhost:4000",
          changeOrigin: true,
        },
      },
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});
