import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/challenge-frontend/',
  server: {
    host: true,
    port: 5173

  }
});
