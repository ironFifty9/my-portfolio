import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [ ],
    },
  },
  server: {
    port: 3000,
  }
})
