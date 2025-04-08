import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src/', import.meta.url).pathname
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
  output: 'server',
  adapter: vercel({
    isr: false,
    edgeMiddleware: true,
    edge: false,
    functionPerRoute: true,
  }),
  redirects: {
    '/404': '/es/404',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});