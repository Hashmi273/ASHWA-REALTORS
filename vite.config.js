import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path - adjust if repository name is different
  base: process.env.NODE_ENV === 'production' ? '/ASHWA-REALTORS/' : '/',
});
