import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,      // Ascolta su tutti gli IP (0.0.0.0)
    port: 5173,      // Forza la porta 5173
    watch: {
      usePolling: true // Necessario su Windows/alcuni Linux per vedere le modifiche live
    }
  }
})
