import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  mode: 'development',
  publicDir: 'public',
  envDir: '', // relative to root
  envPrefix: 'DODO_',
  logLevel: 'info',
  clearScreen: true,
  appType: 'spa',
  server: {
    host: '127.0.0.1',
    port: 3456,
    strictPort: true,
    https: false,
    cors: false,
    open: false,
    hmr: true
  },
  build: {
    outDir: '../dist',
    assetsDir: 'dodo',
    emptyOutDir: true
  },
});
