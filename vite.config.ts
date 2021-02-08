const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  alias: [
    { find: "@", replacement: path.resolve(__dirname, 'src') }
  ],
  plugins: [
    vue(),
    voie(),
    svgLoader()
  ]
})
