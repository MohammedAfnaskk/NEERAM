import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002
  },
  base: '/', // Base URL for the app, useful if deploying under a subpath
  build: {
    outDir: 'dist' // Ensure this matches 'distDir' in your vercel.json
  }
});
