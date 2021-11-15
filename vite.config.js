import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: 'development',
      registerType: 'autoUpdate',
      base: '/',
      manifest: {
        name: 'Chaptered',
        short_name: 'Chaptered',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/chaptered-logo.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  server: {
    open: true,
  },
})
