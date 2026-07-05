# AGENTS.md — mejor-escritor-del-siglo

Landing page del mejor escritor del siglo. Español.

## Stack

- **React 19** + **TypeScript 6** (strict mode ON via `tsconfig.app.json`)
- **Vite 8** (build tool)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/index.css`)

## Commands

| Acción | Comando |
|--------|---------|
| Dev server | `npm run dev` |
| Build (tsc + vite) | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` (oxlint) |

## Conventions

- **Imports:** usar ruta absoluta `@/` (alias configurado en `vite.config.ts` apuntando a `src/`). TypeScript lo resuelve via `paths` en `tsconfig.app.json`.
- **Estilos:** Tailwind CSS v4 — sin `tailwind.config.*`. La configuración va en CSS con `@theme` o directamente con clases utilitarias.
- **TypeScript:** `verbatimModuleSyntax` activo — usar `import type` para imports que solo sean tipos.
- **Naming:** PascalCase para componentes, camelCase para funciones/variables.
- **Sin `any`:** definir interfaces/types para props y estados.
- **No hay `tailwind.config.*`** — Tailwind v4 no lo necesita. Personalizar con `@theme` en `index.css`.

## Paleta de colores

Definida en `src/index.css` vía `@theme`. Usar con clases utilitarias de Tailwind.

| Variable | Hex | Uso |
|----------|-----|-----|
| `negro` | `#0D0D0D` | Textos principales |
| `marfil` | `#F4F1EA` | Fondos |
| `dorado` | `#B08D57` | Líneas, detalles, títulos |
| `piedra` | `#6F6F6F` | Textos secundarios |
| `borgona` | `#4A1F24` | Sellos, botones importantes |

Ej: `text-negro`, `bg-marfil`, `border-dorado`.

## Tipografía

- **Serif (títulos, decorativos):** Cormorant Garamond — clase `font-serif`.
- **Sans (cuerpo):** Inter — clase `font-sans` (aplicada por defecto al `<body>`).
- Cargadas desde Google Fonts en `index.html`. Usar `font-serif` o `font-sans` como clases Tailwind.
- **Componentes** en `src/components/`, hooks en `src/hooks/`.

## Notas

- El lint corre con **oxlint** (no ESLint) — no instalar ESLint ni plugins.
- `tsc -b` es parte del build — asegurar que pase antes de `vite build`.
