# AGENTS.md — mejor-escritor-del-siglo

Landing page del mejor escritor del siglo. Español.

## Stack

- **React 19** + **TypeScript 6** (strict mode ON via `tsconfig.app.json`)
- **Vite 8** (build tool)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/index.css`)
- **React Router** (`react-router-dom`) para 7 rutas
- **lucide-react** — iconos ligeros (Astroid, Sparkle, etc.)
- **react-icons** — iconos de redes sociales (FaFacebook, FaInstagram, FaGithub)
- **tailwind-animations** (midudev) — animaciones CSS (instalado, sin usar activamente)

## Commands

| Acción | Comando |
|--------|---------|
| Dev server | `npm run dev` |
| Build (tsc + vite) | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` (oxlint) |

## Estructura

```
src/
├── assets/           # imágenes (logo, pose)
├── components/       # Header, Footer, Button, Logo
├── pages/            # 7 páginas (una por ruta)
├── sections/         # HeroSection, InformationSection, TimelineSection, RecognitionCards, PoetryBooks, NarrativeBooks
├── App.tsx           # routing
├── main.tsx          # entry point (BrowserRouter)
└── index.css         # Tailwind + @theme
```

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/cronologia` | Cronología |
| `/poesia` | Poesía |
| `/narrativa` | Narrativa |
| `/reconocimiento` | Reconocimiento |
| `/registro-historico` | Registro Histórico |
| `/contacto` | Contacto |

## Conventions

- **Imports:** usar ruta absoluta `@/` (alias configurado en `vite.config.ts` apuntando a `src/`). TypeScript lo resuelve via `paths` en `tsconfig.app.json`.
- **Estilos:** Tailwind CSS v4 — sin `tailwind.config.*`. La configuración va en CSS con `@theme` o directamente con clases utilitarias.
- **TypeScript:** `verbatimModuleSyntax` activo — usar `import type` para imports que solo sean tipos.
- **Naming:** PascalCase para componentes, camelCase para funciones/variables.
- **Sin `any`:** definir interfaces/types para props y estados.
- **Componentes** en `src/components/`, secciones de landing en `src/sections/`, páginas en `src/pages/`.

## Paleta de colores

Definida en `src/index.css` vía `@theme`. Usar con clases utilitarias de Tailwind.

| Variable | Hex | Uso |
|----------|-----|-----|
| `negro` | `#0D0D0D` | Textos principales, fondos oscuros |
| `marfil` | `#F4F1EA` | Fondos claros |
| `dorado` | `#B08D57` | Líneas, detalles, títulos, acentos |
| `piedra` | `#6F6F6F` | Textos secundarios |
| `borgona` | `#4A1F24` | Sellos, botones importantes |

Ej: `text-negro`, `bg-marfil`, `border-dorado`.

## Tipografía

- **Serif (títulos, decorativos):** Cormorant Garamond — clase `font-serif`.
- **Sans (cuerpo):** Inter — clase `font-sans` (aplicada por defecto al `<body>`).
- Cargadas desde Google Fonts en `index.html`. Usar `font-serif` o `font-sans` como clases Tailwind.
- Todo el texto del HeroSection usa `font-serif`.

## Componentes clave

- **Header:** fixed, fondo negro, borde dorado inferior. Logo absolut posicionado (`top-0`) independiente del tamaño del header. NavLinks con active state en `text-dorado`.
- **Logo:** componente independiente, renderiza imagen dentro de un `Link` a `/`.
- **Button:** acepta prop `to` para renderizar como `Link` de react-router. Si `to` empieza con `http`, renderiza `<a>` externo. Estilo: `bg-transparent border border-dorado text-dorado font-serif`.
- **Footer:** 4 columnas flex con iconos `Astroid` como separadores. Contenido variable por columna (estadísticas, versión, compatibilidad, redes sociales).
- **TimelineSection:** línea temporal vertical dorada centrada, contenido alterna izquierda/derecha, datos en array editable.
- **RecognitionCards:** 3 secciones (Oficiales, Extraoficiales, Inevitables) con cards de borde dorado, glow hover, imagen por card en la parte superior, Astroid centrado en la base. Contenido en arrays editables al inicio del archivo.
- **PoetryBooks:** 4 libros con imagen cuadrada (600px) a la izquierda, reproductor de video vertical (360px, 9:16) con controles custom (play/pause, volumen), texto explicativo, separadores Astroid y botón de compra externo.
- **NarrativeBooks:** libro único con imagen (600px) + video vertical (360px, 9:16) con controles custom, texto explicativo y botón de compra externo.

## Notas

- El lint corre con **oxlint** (no ESLint) — no instalar ESLint ni plugins.
- `tsc -b` es parte del build — asegurar que pase antes de `vite build`.
- Las imágenes grandes (PNG) se importan directamente con Vite; el hash cambia en cada build.
- El botón usa `inline-block` para funcionar como Link — si se necesita como `<button>` nativo simplemente omitir `to`.
- `tailwind-animations` se importa vía `@import "tailwind-animations"` en `index.css`. Compatible con Tailwind v4.
- La paleta usa `text-marfil` en vez de `text-white` en todo el sitio para mantener coherencia cromática.
