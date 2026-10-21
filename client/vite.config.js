import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_DEV_BACKEND_URL || `http://localhost:${process.env.PORT || 5000}`,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
});
