import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // copy to dist/404.html
          rename: '404.html'
        }
      ]
    })

  ],
  base: '/',
});