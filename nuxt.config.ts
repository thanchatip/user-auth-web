import { definePreset, palette } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: palette("{violet}"),
  },
});

export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module"],
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
