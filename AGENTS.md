# AGENTS.md — mejor-escritor-del-siglo

Landing page del mejor escritor del siglo. Español.

## Stack

- **React 19** + **TypeScript 6** (strict mode ON via `tsconfig.app.json`)
- **Vite 8** (build tool)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/index.css`)
- **React Router** (`react-router-dom`) para 7 rutas
- **lucide-react** — iconos ligeros
- **react-icons** — iconos de redes sociales (FaFacebook, FaInstagram, FaGithub)

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
├── sections/         # HeroSection, InformationSection
├── App.tsx           # routing
├── main.tsx          # entry point (BrowserRouter)
└── index.css         # Tailwind + @theme
```

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/cronologia` | Cronología |
| `/obra-maestra` | Obra Maestra |
| `/reconocimiento` | Reconocimiento |
| `/manifiesto` | Manifiesto |
| `/registro-historico` | Registro Histórico |
| `/correspondencia` | Correspondencia |

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
- **Button:** acepta prop `to` para renderizar como `Link` de react-router. Estilo: `bg-transparent border border-dorado text-dorado font-serif`.
- **Footer:** 4 columnas flex con iconos `Astroid` como separadores. Contenido variable por columna (estadísticas, versión, compatibilidad, redes sociales).

## Notas

- El lint corre con **oxlint** (no ESLint) — no instalar ESLint ni plugins.
- `tsc -b` es parte del build — asegurar que pase antes de `vite build`.
- Las imágenes grandes (PNG) se importan directamente con Vite; el hash cambia en cada build.
- El botón usa `inline-block` para funcionar como Link — si se necesita como `<button>` nativo simplemente omitir `to`.
