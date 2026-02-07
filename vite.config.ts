import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/2026horse/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // API key removed - never expose secrets in frontend code
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
