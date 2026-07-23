import { useState, useRef, useEffect, useCallback } from "react"
import { useTranslation } from 'react-i18next'
import { Astroid, ArrowDown, ChevronLeft, ChevronRight, X } from "lucide-react"
import grafica from "@/assets/grafica.png"
import pieza1 from "@/assets/pieza1.png"
import pieza2 from "@/assets/pieza2.png"
import pieza3 from "@/assets/pieza3.png"
import pieza4 from "@/assets/pieza4.png"
import pieza5 from "@/assets/pieza5.png"
import pieza6 from "@/assets/pieza6.png"
import pieza7 from "@/assets/pieza7.png"
import pieza8 from "@/assets/pieza8.png"
import pieza9 from "@/assets/pieza9.png"
import pieza10 from "@/assets/pieza10.png"

const placeholder = "/placeholder.svg"

const piezaKeys = [
  'registroHistorico.piezas.pieza1',
  'registroHistorico.piezas.pieza2',
  'registroHistorico.piezas.pieza3',
  'registroHistorico.piezas.pieza4',
  'registroHistorico.piezas.pieza5',
  'registroHistorico.piezas.pieza6',
  'registroHistorico.piezas.pieza7',
  'registroHistorico.piezas.pieza8',
  'registroHistorico.piezas.pieza9',
  'registroHistorico.piezas.pieza10',
]
const imagenes = [pieza1, pieza2, pieza3, pieza4, pieza5, pieza6, pieza7, pieza8, pieza9, pieza10]

export default function RegistroHistorico() {
  const { t } = useTranslation()
  const [actual, setActual] = useState(0)
  const [arrastreX, setArrastreX] = useState(0)
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null)
  const arrastrando = useRef(false)
  const inicioX = useRef(0)
  const desplazamientoRef = useRef(0)

  const carrusel = imagenes.map((img, i) => ({ img: img || placeholder, titulo: t(piezaKeys[i]) || t('registroHistorico.placeholder') }))

  const anterior = useCallback(() => setActual(i => (i === 0 ? carrusel.length - 1 : i - 1)), [carrusel.length])
  const siguiente = useCallback(() => setActual(i => (i === carrusel.length - 1 ? 0 : i + 1)), [carrusel.length])

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    arrastrando.current = true
    inicioX.current = e.clientX
    desplazamientoRef.current = 0
    setArrastreX(0)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!arrastrando.current) return
    e.preventDefault()
    const delta = e.clientX - inicioX.current
    desplazamientoRef.current = delta
    setArrastreX(delta)
  }, [])

  const onPointerUp = useCallback(() => {
    if (!arrastrando.current) return
    arrastrando.current = false
    const delta = desplazamientoRef.current
    setArrastreX(0)
    if (Math.abs(delta) < 10) {
      setImagenAmpliada(carrusel[actual].img)
    } else if (delta > 60) {
      anterior()
    } else if (delta < -60) {
      siguiente()
    }
  }, [anterior, siguiente, actual, carrusel])

  useEffect(() => {
    const handler = (e: TouchEvent) => {
      if (arrastrando.current) e.preventDefault()
    }
    document.addEventListener("touchmove", handler, { capture: true, passive: false })
    return () => document.removeEventListener("touchmove", handler, { capture: true })
  }, [])

  useEffect(() => {
    if (!imagenAmpliada) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setImagenAmpliada(null)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [imagenAmpliada])

  const dragging = arrastreX !== 0
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-80 pt-64 md:pt-72 lg:pt-80 bg-cover relative flex-col">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex flex-col lg:flex-row w-full gap-8 lg:gap-16 text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">{t('registroHistorico.nombre')}</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                {t('registroHistorico.titulo')}
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t('registroHistorico.subtitulo1')} <br /> <span className="text-dorado italic">{t('registroHistorico.subtitulo2')}</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-xl md:text-2xl text-dorado">{t('common.intro')}</p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed">
              {t('registroHistorico.intro')}
              <br/>
              <p className="text-piedra">{t('registroHistorico.introCont')}</p>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 md:mt-20">
          <ArrowDown className="text-dorado h-10 w-10 animate-bounce" />
        </div>
      </section>

      <section className="w-full bg-negro px-6 md:px-20 lg:px-80 pb-20 md:pb-32">
        <div className="max-w-6xl xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dorado">
              {t('registroHistorico.estadisticas')}
            </h2>
            <Astroid className="mx-auto mt-4 text-dorado h-6 w-6" />
          </div>
          <img
            src={grafica}
            alt={t('registroHistorico.graficaAlt')}
            className="w-full rounded-lg"
            style={{ cursor: "pointer" }}
            onClick={() => setImagenAmpliada(grafica)}
          />
        </div>
        <div className="flex justify-center mt-12">
          <ArrowDown className="text-dorado h-10 w-10 animate-bounce" />
        </div>
      </section>

      <section className="w-full bg-negro px-6 md:px-20 lg:px-80 pb-20 md:pb-32">
        <div className="max-w-6xl xl:max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dorado">
              {t('registroHistorico.bienvenido')}
            </h2>
            <Astroid className="mx-auto mt-4 text-dorado h-6 w-6" />
          </div>
          {/* Desktop: carrusel con flechas */}
          <div className="hidden lg:flex items-center gap-4 md:gap-8">
            <button
              onClick={anterior}
              className="shrink-0 text-dorado hover:text-marfil transition-colors"
            >
              <ChevronLeft className="h-12 w-12 md:h-14 md:w-14" />
            </button>
            <div className="overflow-hidden rounded-lg flex-1 p-3">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${actual * 100}%)` }}
              >
                {carrusel.map((item, i) => (
                  <div key={i} className="min-w-full">
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-full rounded-xl"
                      style={i === actual ? { boxShadow: "0 0 150px rgba(176,141,87,0.6)", cursor: "pointer" } : undefined}
                      onClick={i === actual ? () => setImagenAmpliada(item.img) : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={siguiente}
              className="shrink-0 text-dorado hover:text-marfil transition-colors"
            >
              <ChevronRight className="h-12 w-12 md:h-14 md:w-14" />
            </button>
          </div>
          <div className="hidden lg:block bg-negro/90 px-6 py-4 mt-6 rounded-lg">
            <p className="font-serif text-marfil text-lg md:text-2xl text-center">
              {carrusel[actual].titulo.split(" - ").map((part, i) => (
                <>{i > 0 && <br />}{part}</>
              ))}
            </p>
          </div>

          {/* Mobile: carrusel tipo deck con arrastre */}
          <div className="lg:hidden overflow-hidden">
            <div
              className="select-none touch-none overscroll-contain"
              style={{ touchAction: "none", overscrollBehavior: "contain" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div className="relative mx-auto max-w-[500px]" style={{ minHeight: "300px" }}>
                {carrusel.map((item, i) => {
                  let dist = i - actual
                  if (dist > carrusel.length / 2) dist -= carrusel.length
                  else if (dist < -(carrusel.length / 2)) dist += carrusel.length
                  if (Math.abs(dist) > 2) return null

                  const S = 0.4
                  let transform: string
                  let filter = "none"
                  let zIndex = 0

                  if (dist === 0) {
                    transform = `translateX(${arrastreX}px)`
                    zIndex = 30
                    filter = "drop-shadow(0 0 12px rgba(176,141,87,0.6))"
                  } else if (dist === -1) {
                    transform = `translateX(-${S * 100}%) scale(0.9)`
                    filter = "blur(4px)"
                    zIndex = 20
                  } else if (dist === 1) {
                    transform = `translateX(${S * 100}%) scale(0.8)`
                    filter = "blur(6px)"
                    zIndex = 10
                  } else {
                    const sign = dist > 0 ? 1 : -1
                    transform = `translateX(${sign * 60}%) scale(0.7)`
                    filter = "blur(8px)"
                    zIndex = 5
                  }

                  return (
                    <div
                      key={i}
                      className="absolute inset-y-0 left-[5%] right-[5%] overflow-hidden"
                      style={{
                        zIndex,
                        transform,
                        filter,
                        borderRadius: "0.5rem",
                        cursor: dist === 0 ? "pointer" : undefined,
                        transition: dragging ? "none" : "transform 0.3s ease, filter 0.3s ease",
                        touchAction: "none",
                        userSelect: "none",
                      }}
                    >
                      <img src={item.img} alt="" className="w-full h-full object-cover" />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-negro/90 px-6 py-4">
              <p className="font-serif text-dorado text-lg md:text-2xl text-center">
                {carrusel[actual].titulo.split(" - ").map((part, i) => (
                  <>{i > 0 && <br />}{part}</>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {imagenAmpliada && (
        <div
          className="fixed inset-0 z-50 bg-negro/95 flex items-center justify-center"
          onClick={() => setImagenAmpliada(null)}
        >
          <button
            onClick={() => setImagenAmpliada(null)}
            className="absolute top-4 right-4 text-marfil hover:text-dorado transition-colors z-10"
          >
            <X className="h-8 w-8 text-dorado" />
          </button>
          <img
            src={imagenAmpliada}
            alt={t('registroHistorico.tituloAlt')}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
