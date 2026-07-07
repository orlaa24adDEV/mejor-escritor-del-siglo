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
| `lucide-react` | Iconos (Astroid, Sparkle, etc.) |
| `react-icons` | Iconos de redes sociales |
| `tailwind-animations` | ^1.0 (midudev) |
| `tailwindcss` / `@tailwindcss/vite` | ^4 |
| `typescript` | ~6.0 |
| `vite` | ^8.1 |
| `oxlint` | ^1.71 |

## Estructura

```
src/
├── assets/            # imágenes
├── components/        # Header, Footer, Button, Logo
├── hooks/             # custom hooks
├── lib/               # utilidades
├── pages/             # 7 páginas (una por ruta)
├── sections/          # HeroSection, InformationSection, TimelineSection, RecognitionCards
├── App.tsx            # routing
├── main.tsx           # entry point (BrowserRouter)
└── index.css          # Tailwind + theme personalizado
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
- **Reconocimiento** con 3 secciones de cards (Oficiales, Extraoficiales, Inevitables) con borde dorado, glow hover, imágenes superiores y Astroid en la base
