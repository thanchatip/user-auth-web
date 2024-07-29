import { definePreset, palette } from "@primevue/themes";

import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: palette("{violet}"),
  },
});

export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ".dark",
          cssLayer: false,
        },
      },
    },
  },
  css: ["primeicons/primeicons.css"],
});
