import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]_[local]__[hash:base64:5]",
    },
  },
  server: {
    port: 5200,
  },
});
