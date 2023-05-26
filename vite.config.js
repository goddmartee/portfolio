import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    minify: true,
    emptyOutDir: true
  },
  server: {
    port: 8080,
    hot: true
  }
})