# Trabajo de grado (Astro + Tailwind + MDX)

## Ejecutar en local
1. Instala Node 20 o superior.
2. `npm install`
3. `npm run dev` y abre http://localhost:4321

## Poner tus imágenes
1. Copia tus dos imágenes en `public/imagenes/`.
2. En `src/data/trabajo.ts`, escribe su ruta en `imagenes` (por ejemplo `/imagenes/pieza-1.jpg`), con su texto alternativo, pie y crédito.
3. Las flechas y las teclas izquierda/derecha cambian de imagen.

## Editar el contenido
Todo el Inicio sale de `src/data/trabajo.ts`: título, frase, autores, tarjetas de 60 segundos y contenido por perfil.

## Desplegar en Render
1. Sube la carpeta a un repositorio de GitHub.
2. En Render: New > Blueprint (usa `render.yaml`) o New > Static Site con build `npm install && npm run build` y publish directory `dist`.
3. Copia la URL que te dé Render en `site` dentro de `astro.config.mjs`.

## Pendiente (siguientes entregas)
Capítulos en MDX, Interacciones con Supabase (SQL y RLS), gráficos Chart.js, Pagefind, KaTeX, Anexos, Equipo, Contacto, política de datos y SEO/Scholar.

## Configurar Supabase (Interacciones)
1. Crea un proyecto en https://supabase.com.
2. En SQL Editor, pega y ejecuta `supabase/schema.sql` completo.
3. Copia `.env.example` como `.env` y pon la URL y la clave `anon` (Project Settings > API). Nunca uses la clave `service_role` en este proyecto.
4. Reinicia `npm run dev`. En Render, agrega las mismas dos variables en Environment.
5. Para atender una solicitud de eliminación: abre Table Editor > `solicitudes_eliminacion`, busca el alias en `visitas` y borra la fila a mano.
6. Importante: "Visitantes" cuenta sesiones del navegador, no personas únicas.

## Funciones adicionales
- **Datos clave:** edita `src/data/datos.ts` (cifras, etiquetas y series por grupo o año).
- **Fórmulas:** escribe LaTeX entre `$$ ... $$` en cualquier capítulo MDX.
- **Anexos y Equipo:** edita la lista en `src/pages/anexos.astro` (archivos en `public/anexos/`) y `src/data/equipo.ts`.
- **Contacto:** ejecuta `supabase/contacto.sql` una vez en el SQL Editor. Los mensajes se leen en Table Editor > `mensajes_contacto`.
- **Búsqueda (Pagefind):** se genera con `npm run build`. Si tu Windows bloquea el ejecutable de Pagefind, usa `npm run build:local` para probar y deja que Render genere el buscador.
- **SEO:** cambia la URL en `astro.config.mjs` y en `public/robots.txt`. Las etiquetas de Google Scholar salen en el Inicio y usan `src/data/trabajo.ts` (separa varios autores con punto y coma).

## Contenido real cargado
Los capítulos salieron de tu documento de Word (`src/content/capitulos/`). Las figuras y tablas del Word no se copian solas: agrégalas dentro de cada MDX. Revisa los textos, porque la conversión automática puede dejar saltos de línea o títulos por ajustar.
