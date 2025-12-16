import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/PROOF/',
  plugins: [vue()],
  server: {
    proxy: {
      '/api/contact': {
        target: 'https://proof.xo.je',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/contact/, '/contact.php'),
      },
    },
  },
})
