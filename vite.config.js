import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/portfolio/",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    hot: true
  }
})