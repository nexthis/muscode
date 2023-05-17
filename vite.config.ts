import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import path from "path";


const fonts = {
  google: {
    families: [
      {
        name: 'Roboto',
        styles: 'wght@400;500;700',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unfonts(fonts), svgLoader()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
