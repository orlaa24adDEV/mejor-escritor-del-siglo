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
| `lucide-react` | Iconos (Astroid, Sparkle, X, ChevronLeft, ChevronRight, CreditCard, CheckCircle, Loader, etc.) |
| `react-icons` | Iconos de redes sociales (FaInstagram, FaTiktok, etc.) |
| `@emailjs/browser` | Envío de formulario de contacto vía EmailJS |
| `tailwind-animations` | ^1.0 (midudev) |
| `tailwindcss` / `@tailwindcss/vite` | ^4 |
| `typescript` | ~6.0 |
| `vite` | ^8.1 |
| `oxlint` | ^1.71 |

## Estructura

```
src/
├── assets/            # imágenes y videos (+10 piezas de museo, trofeos, gráfica)
├── components/        # Header, Footer, Button, Logo
├── pages/             # 7 páginas (una por ruta)
├── sections/          # HeroSection, InformationSection, TimelineSection, RecognitionCards, PoetryBooks, NarrativeBooks
├── App.tsx            # routing
├── main.tsx           # entry point (BrowserRouter)
├── vite-env.d.ts      # tipos para import.meta.env
└── index.css          # Tailwind + theme personalizado (body bg: #0D0D0D, animación levitate)
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

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

| Variable | Descripción |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Service ID de EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID de EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key de EmailJS |

## Diseño

- **Paleta:** negro (#0D0D0D), marfil (#F4F1EA), dorado (#B08D57), piedra (#6F6F6F), borgoña (#4A1F24)
- **Body bg:** negro (#0D0D0D) para evitar espacios blancos entre secciones
- **Tipografía:** Cormorant Garamond (serif) + Inter (sans) vía Google Fonts
- **Animación personalizada:** `levitate` (flotación suave 1s) para hover en cards
- **Header fijo** con menú hamburguesa en mobile (overlay fullscreen), logo independiente solapando el borde superior
- **HeroSection** con imagen de fondo, degradado y texto centrado; background position `center` en mobile, `left 300px center` en desktop
- **InformationSection** con grid responsive (1→2→3→5 columnas)
- **Footer** con 4 columnas, iconos Astroid como separadores y enlaces a redes sociales; responsive con flex-wrap
- **Cronología** con línea temporal vertical dorada, 17 entradas alternando izquierda/derecha en desktop, todas a izquierda en mobile
- **Reconocimiento** con hero con imagen de fondo (Trofeo) + overlay semitransparente (`bg-negro/60`) sobre el texto, y 3 secciones de cards (Oficiales, Extraoficiales, Inevitables) con borde dorado, glow hover, imágenes por card y Astroid en la base; grid responsive con `mt-20 md:mt-32` de separación
- **Poesía** con 4 libros organizados imagen (600px) + video reproductor vertical (360px, 9:16), texto explicativo, y botón de compra externo
- **Narrativa** con libro (imagen + video) y sección de imagen central con título y texto explicativo
- **Registro Histórico** con carrusel de 10 piezas, gráfica de estadísticas y lightbox:
  - Desktop: slider horizontal con flechas ChevronLeft/ChevronRight, shadow dorado en imagen activa
  - Mobile: carrusel tipo deck con arrastre (cards al 76% ancho), imagen previa borrosa a la izquierda, siguiente borrosa a la derecha, transición suave, shadow dorado en activa
  - Título de pieza visible debajo del carrusel en ambos modos
  - **Lightbox modal:** click/tap en imagen activa abre overlay fullscreen con imagen ampliada; cierre con botón X, click fuera o tecla Escape
  - Gráfica de estadísticas también abre lightbox al click
- **Contacto** con dos columnas responsive:
  - **Formulario de contacto:** Nombre, Edad, Correo, Mensaje → envío vía EmailJS con spinner de carga y mensaje de éxito. Iconos Instagram/TikTok al pie.
  - **Donación:** formulario con Nombre, Correo, Cantidad, Mensaje + link a Stripe Payment Link (tarjeta/PayPal/transferencia) con animación levitate al hover
  - Inputs con `focus:shadow` dorado y Astroid decorativo en títulos

## Responsive

- **Breakpoints:** Tailwind default (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Header:** menú hamburguesa visible en `<lg`, navegación horizontal en `lg+`
- **Paddings:** `pt-64 md:pt-72 lg:pt-80` en todas las secciones hero (texto más desplazado hacia abajo en mobile)
- **Contenedores:** `max-w-6xl xl:max-w-[1600px]` en todas las secciones internas
- **Timeline:** sin alternancia en mobile (todo a la izquierda), línea dorada y puntos visibles
- **Cards:** `grid-cols-1 sm:2 md:3 lg:4 xl:5` para OFICIALES
- **Textos:** tamaños escalonados con `text-base md:text-lg lg:text-2xl` etc.
- **Carrusel mobile:** cards al 90% ancho (`left-[5%] right-[5%]`), arrastre con Pointer Events, `touch-action: none` en cada card y listener capture-phase en document para evitar scroll global; `overflow-hidden` en el contenedor para evitar desbordamiento horizontal
- **Formularios:** apilados en mobile (`flex-col`), dos columnas en desktop (`lg:flex-row`)
- **Dev server:** `host: '0.0.0.0'` + `allowedHosts: true` en vite.config.ts para acceso desde la red local

## Git LFS

Los archivos `.mp4` (videos de poesía y narrativa) superan el límite de 100 MB de GitHub. Se configuran con **Git Large File Storage** para que solo se suban punteros ligeros al repositorio.

```bash
# Instalar (ya configurado en este proyecto)
git lfs install

# Trackear archivos .mp4
git lfs track "src/assets/*.mp4"
```

Los .mp4 se almacenan en el LFS de GitHub y se descargan automáticamente al clonar.

## Changelog

### 2026-07-23

**Corrección ortográfica masiva** — 28 errores corregidos en 12 archivos:
- Tildes faltantes: época, Poesía, CRONOLOGÍA, FENÓMENO, POESÍA, OBSESIÓN, INTRODUCCIÓN, ESTADÍSTICAS, HISTÓRICO, VERSIÓN, ACTUALIZACIÓN, Comunicación, Artístico, Finalización, Cultivación, Publicación, Distinción, EVOLUCIÓN, etc.
- Errores de escritura: `piedas` → `pierdas`, `INSITUCIONAL` → `INSTITUCIONAL`, `PROXIMAMMENTE` → `PRÓXIMAMENTE`, `ACTIUALIZACION` → `ACTUALIZACIÓN`, `critic` → `crítica`
- Correcciones gramaticales: `Esta decidio` → `Está decidido a`, `Contactame y se` → `Contáctame y sé`

**Carrusel responsive (RegistroHistórico.tsx)** — ampliado y arreglado:
- Tarjetas del carrusel mobile: de 60% a 90% de ancho para mejor visualización de imágenes
- Corregido scroll horizontal: se agregó `overflow-hidden` al contenedor del carrusel
- Corregido bug de arrastre: se agregó `touch-action: none` y `user-select: none` directamente en cada tarjeta para evitar que el browser arrastre la página al hacer swipe
- Listener `touchmove` cambiado a fase de captura (`capture: true`) para asegurar `preventDefault()` antes que otros handlers

**Git LFS** — configuración y migración:
- Se instaló Git LFS y se configuró `.gitattributes` para trackear `src/assets/*.mp4`
- Se reescribió el historial completo con `git lfs migrate import` para convertir los .mp4 en punteros LFS desde el primer commit
- Push exitoso a GitHub (461 MB de objetos LFS subidos)
