import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  output: 'static', 
  adapter: vercel({
    isr: false,
    edge: false,
    errorPages: false
  }),
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src/', import.meta.url).pathname,
        '@': '/src',
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
  devToolbar: {
    enabled: false,
  },
});