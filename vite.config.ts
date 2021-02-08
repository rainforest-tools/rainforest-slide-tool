const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'

// https://vitejs.dev/config/
export default defineConfig({
  alias: [
    { find: "@", replacement: path.resolve(__dirname, 'src') }
  ],
  plugins: [
    vue(),
    voie()
  ]
})
