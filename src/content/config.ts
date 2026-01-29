import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const plans = defineCollection({
    // El patrón '**/*.json' le dice a Astro: 
    // "Busca cualquier archivo .json dentro de esta carpeta y sus subcarpetas, forzosamente se tiene que ocupara la ruta raiz ./src"
    loader:     glob({ pattern: '**/[^_]*.json', base: "./src/content/plans" }),
    schema: z.object({
        title:      z.string(),
        order:      z.number(),
        nickName:   z.string(),
        icon:       z.string(),
        features:   z.array( z.string() ).default([]),
        paths:      z.object({
            slug:       z.string(),
            sections:   z.array(z.object({
                name:   z.string(),
                param:  z.string(),
                image:  z.string()
            }))
        })
    })
});

export const collections = {plans}