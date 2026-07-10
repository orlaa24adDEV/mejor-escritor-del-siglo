# Mejor Escritor del Siglo

Landing page del mejor escritor del siglo. Proyecto web en español.

## Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (estilos)
- **React Router** (7 rutas)

## Dependencias principales

| Paquete | Versión / Uso |
|---------|---------------|
| `react` / `react-dom` | ^19.2 |
| `react-router-dom` | ^7 |
| `lucide-react` | Iconos (Astroid, Sparkle, Play, Pause, etc.) |
| `react-icons` | Iconos de redes sociales |
| `tailwind-animations` | ^1.0 (midudev) |
| `tailwindcss` / `@tailwindcss/vite` | ^4 |
| `typescript` | ~6.0 |
| `vite` | ^8.1 |
| `oxlint` | ^1.71 |

## Estructura

```
src/
├── assets/            # imágenes y videos
├── components/        # Header, Footer, Button, Logo
├── pages/             # 7 páginas (una por ruta)
├── sections/          # HeroSection, InformationSection, TimelineSection, RecognitionCards, PoetryBooks, NarrativeBooks
├── App.tsx            # routing
├── main.tsx           # entry point (BrowserRouter)
└── index.css          # Tailwind + theme personalizado
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

## Comandos

| Acción | Comando |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |
| Lint | `npm run lint` |

## Diseño

- **Paleta:** negro (#0D0D0D), marfil (#F4F1EA), dorado (#B08D57), piedra (#6F6F6F), borgoña (#4A1F24)
- **Tipografía:** Cormorant Garamond (serif) + Inter (sans) vía Google Fonts
- **Header fijo** con logo independiente solapando el borde superior
- **HeroSection** con imagen de fondo, degradado y texto centrado
- **InformationSection** con 5 columnas de estadísticas
- **Footer** con 4 columnas, iconos Astroid como separadores y enlaces a redes sociales
- **Cronología** con línea temporal vertical dorada, 17 entradas alternando izquierda/derecha
- **Reconocimiento** con 3 secciones de cards (Oficiales, Extraoficiales, Inevitables) con borde dorado, glow hover, imágenes por card y Astroid en la base
- **Poesía** con 4 libros organizados imagen (600px) + video reproductor vertical (360px, 9:16), texto explicativo, y botón de compra externo
- **Narrativa** con libro (imagen + video) y sección de imagen central con título y texto explicativo
