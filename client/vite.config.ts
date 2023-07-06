import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/posts': {
        target: 'https://blog-exercise-dn8z8q1un-danield770.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
      '/hebrewposts': {
        target: 'https://blog-exercise-dn8z8q1un-danield770.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
