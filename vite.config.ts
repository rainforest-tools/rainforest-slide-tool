import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    voie()
  ]
})
