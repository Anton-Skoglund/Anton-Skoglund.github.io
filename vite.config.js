import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { sveltePreprocess } from 'svelte-preprocess';
import path from 'node:path';
import { preprocess } from 'svelte/compiler';

export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.',
          rename: '404.html'
        }
      ]
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },

  base: '/',
});
