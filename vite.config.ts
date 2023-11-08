import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sassMigratorQuasar } from "rollup-plugin-sass-migrator";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sassMigratorQuasar(),
    vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
