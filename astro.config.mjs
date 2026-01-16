// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://alexestudio86.github.io',
    base: '/restaurantes',
    vite: {
        resolve: {
            alias: {
                "@": "/src",
                "@components": "/src/components",
                "@layouts": "/src/layouts",
                "@assets": "/src/assets",
                "@styles": "/src/styles",
            },
        },
    },
});
