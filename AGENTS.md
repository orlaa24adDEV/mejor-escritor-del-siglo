# AGENTS.md — mejor-escritor-del-siglo

Landing page del mejor escritor del siglo. Multilingüe (es, en, pt, fr).

## Stack

- **React 19** + **TypeScript 6** (strict mode ON via `tsconfig.app.json`)
- **Vite 8** (build tool)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in `src/index.css`)
- **React Router** (`react-router-dom`) para 7 rutas
- **lucide-react** — iconos ligeros (Astroid, Sparkle, etc.)
- **react-icons** — iconos de redes sociales (FaFacebook, FaInstagram, FaGithub)
- **tailwind-animations** (midudev) — animaciones CSS (instalado, sin usar activamente)
- **i18next** + **react-i18next** — internacionalización
- **i18next-browser-languagedetector** — auto-detección de idioma del navegador
- **i18next-http-backend** — carga de archivos de traducción desde `public/locales/`

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
├── components/       # Header, Footer, Button, Logo, LanguageSwitcher
├── pages/            # 7 páginas (una por ruta)
├── sections/         # HeroSection, InformationSection, TimelineSection, RecognitionCards, PoetryBooks, NarrativeBooks
├── App.tsx           # routing
├── main.tsx          # entry point (BrowserRouter)
├── i18n.ts           # configuración i18next
└── index.css         # Tailwind + @theme
```

## Idiomas (i18n)

| Código | Idioma |
|--------|--------|
| `es` | Español (idioma por defecto, fallback) |
| `en` | English |
| `pt` | Português |
| `fr` | Français |

Archivos de traducción en `public/locales/{lng}/translation.json`. Cada archivo contiene todos los strings del sitio.

### Uso en componentes

```tsx
import { useTranslation } from 'react-i18next'

function MiComponente() {
  const { t } = useTranslation()
  return <h1>{t('hero.inicio.titulo1')}</h1>
}
```

### Convenciones i18n

- **Nombres propios NO se traducen:** Franco Reinaldo Pou, Verde Sangre, Poemas en la hoguera, El país de tu cuerpo, Victimario, etc.
- **Data arrays** (Timeline, RecognitionCards, PoetryBooks, NarrativeBooks): definir DENTRO del componente para que `t()` esté en scope.
- **Selector de idioma:** componente `LanguageSwitcher` en `src/components/`, renderizado en el Header (desktop y mobile overlay).
- **Fallback:** si falta una key, muestra el texto en español.
- **Auto-detección:** `i18next-browser-languagedetector` detecta el idioma del navegador y guarda la elección del usuario en `localStorage`.
- Para agregar un nuevo idioma: crear `public/locales/{codigo}/translation.json` y agregar el código a `supportedLngs` en `src/i18n.ts`.

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

- **Header:** fixed, fondo negro, borde dorado inferior. Logo absolut posicionado (`top-0`) independiente del tamaño del header. NavLinks con active state en `text-dorado`. Menú hamburguesa overlay fullscreen en mobile (<lg) con cierre al hacer click en link.
- **Logo:** componente independiente, renderiza imagen dentro de un `Link` a `/`.
- **Button:** acepta prop `to` para renderizar como `Link` de react-router. Si `to` empieza con `http`, renderiza `<a>` externo. Estilo: `bg-transparent border border-dorado text-dorado font-serif`.
- **Footer:** 4 columnas flex con iconos `Astroid` como separadores. Contenido variable por columna (estadísticas, versión, compatibilidad, redes sociales). Responsive con `flex-wrap` y Astroids ocultos en mobile.
- **TimelineSection:** línea temporal vertical dorada centrada, contenido alterna izquierda/derecha en desktop, todo a izquierda en mobile. Datos en array editable.
- **RecognitionCards:** 3 secciones (Oficiales, Extraoficiales, Inevitables) con cards de borde dorado, glow hover, imagen por card en la parte superior, Astroid centrado en la base. Grid responsive (`grid-cols-1 sm:2 md:3 lg:4 xl:5` para OFICIALES). Contenido en arrays editables al inicio del archivo.
- **PoetryBooks:** 4 libros con imagen cuadrada (600px) a la izquierda, reproductor de video vertical (360px, 9:16) con controles custom (play/pause, volumen), texto explicativo, separadores Astroid y botón de compra externo. Layout apilado en mobile.
- **NarrativeBooks:** libro único con imagen (600px) + video vertical (360px, 9:16) con controles custom, texto explicativo y botón de compra externo. Layout apilado en mobile.

## Responsive

- **Breakpoints:** Tailwind default (sm 640, md 768, lg 1024, xl 1280)
- **Header toggles:** `<lg` menú hamburguesa; `lg+` navegación horizontal desktop
- **Secciones hero:** `pt-52 md:pt-64 lg:pt-72`, paddings laterales `px-6 md:px-20 lg:px-80`, layout `flex-col lg:flex-row`
- **Contenedores internos:** `max-w-6xl xl:max-w-[1600px]` (Timeline, PoetryBooks, NarrativeBooks, RecognitionCards)
- **Timeline:** linea en `left-4 md:left-1/2`, astroids en `left-4 md:left-1/2 -translate-x-1/2`, texto con `pl-12 md:pl-0`
- **Cards (OFICIALES):** `grid-cols-1 sm:2 md:3 lg:4 xl:5 gap-8`
- **Textos:** escalados con `text-base md:text-lg lg:text-2xl`, títulos `text-4xl md:text-6xl lg:text-7xl`
- **ArrowDown:** `bottom-10 md:bottom-16` con separador `h-20 md:h-32` entre secciones
- **HeroSection bg:** `bg-center lg:bg-[left_300px_center]` (centrado en mobile, offset en desktop)
- **InformationSection:** `grid-cols-2 sm:3 lg:5`
- **Footer:** `flex-wrap md:flex-nowrap`, Astroids `hidden md:flex`
- **Vite server:** `host: '0.0.0.0'` + `allowedHosts: true` en `vite.config.ts` para red local

## Notas

- El lint corre con **oxlint** (no ESLint) — no instalar ESLint ni plugins.
- `tsc -b` es parte del build — asegurar que pase antes de `vite build`.
- Las imágenes grandes (PNG) se importan directamente con Vite; el hash cambia en cada build.
- El botón usa `inline-block` para funcionar como Link — si se necesita como `<button>` nativo simplemente omitir `to`.
- `tailwind-animations` se importa vía `@import "tailwind-animations"` en `index.css`. Compatible con Tailwind v4.
- La paleta usa `text-marfil` en vez de `text-white` en todo el sitio para mantener coherencia cromática.
