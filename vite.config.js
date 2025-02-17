import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, '/index.html'),
            dashboard_reception: resolve(__dirname, 'src/pages/dashboard_reception.html'),
            // articles: resolve(__dirname, 'src/pages/articles.html'),
            // displayarticle: resolve(__dirname, 'src/pages/displayarticle.html'),
            // contact: resolve(__dirname, 'src/pages/contact.html'),
        },
    },
},
})