import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), basicSsl()],
  define: {
    global: {}
  },
  server: {
    host: '192.168.0.114', 
    port: 8443,
    proxy: {
      "/api": {
        target: "https://api.mec1.pure.cloud",
        changeOrigin: true,
        secure: false,
      },
    },
    cors: false,
  }
})
