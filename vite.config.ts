import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// ----------------------------------------------------------------------

const apiUrl = process.env.API_URL;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
