import * as path from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { loadEnv, defineConfig } from 'vite';

// ----------------------------------------------------------------------

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      VitePWA({
        manifest: {
          name: 'App',
          description: 'App description',
          theme_color: '#000000',
          background_color: '#ffffff',
          display: 'standalone',
          lang: 'en-US',
          start_url: '/',
          icons: [
            {
              src: 'favicon/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'favicon/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'favicon/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      proxy: {
        '/api': {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
