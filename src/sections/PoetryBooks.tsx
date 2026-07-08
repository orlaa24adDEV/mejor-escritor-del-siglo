import { Play, Pause, Volume2, Volume1, Astroid } from "lucide-react"
import { useRef, useState } from "react"
import VerdeSangre from "@/assets/verdeSangre.png"
import PoemasHoguera from "@/assets/PoemasHoguera.png"
import PaisCuerpo from "@/assets/paisCuerpo.png"
import MejorPoesia from "@/assets/mejorPoesiaDecada.png"
import VideoPrueba from "@/assets/videoPrueba.mp4"
import Button from "@/components/Button"

const booksData = [
  {
    img: VerdeSangre,
    videoSrc: VideoPrueba,
    title: "Verde Sangre (2013)",
    text: "Redactado durante la adolescencia y confeccionado artesanalmente, ejemplar por ejemplar, mediante el paciente doblado manual de 500 volúmenes, de los cuales se encuadernaron la mitad, y solo doce encontraron lectores. Los restantes fueron posteriormente condenados por el propio autor a un exilio editorial del que jamás lograron regresar. Hoy constituye una pieza de valor estrictamente arqueológico. Su búsqueda y lectura continúa siendo desaconsejada por el Instituto Internacional para el Estudio del Legado de Franco Reinaldo Pou.",
  },
  {
    img: PoemasHoguera,
    videoSrc: "",
    title: "Poemas en la hoguera",
    text: "Publicado en 2021 (escrito en 2016). En este libro, el todavía adolescente Franco Reinaldo Pou, influenciado por la tradición de Pedro Bonifacio Palacios (Almafuerte), se adentra en una poesía de evidente intensidad ética y filosófica. Estas composiciones dialogan con la fe, la dignidad, la pobreza, la memoria, el sufrimiento y la esperanza mediante un lenguaje deliberadamente exigente, cargado de imágenes y resonancias clásicas. Es una obra escrita para lectores que disfrutan demorarse en el verso, regresar sobre una estrofa y descubrir nuevos sentidos en cada lectura. ",
  },
  {
    img: PaisCuerpo,
    videoSrc: "",
    title: "El pais de tu cuerpo",
    text: "Publicado en 2019. ¿Qué ocurre cuando el amor deja de ser un sentimiento para convertirse en un lugar?. El país de tu cuerpo reúne treinta poemas que recorren el amor romántico desde la entrega, la ausencia, la esperanza y la contemplación. No solo busca romance, es la búsqueda del otro como quien intenta alcanzar también una forma más alta de sí mismo. Cada poema es una estación de ese territorio íntimo donde el cuerpo es patria, el otro es hogar y la palabra intenta alcanzar aquello que el silencio apenas consigue nombrar.",
  },
  {
    img: MejorPoesia,
    videoSrc: "",
    title: "El mejor libro de poesia de la decada.",
    text: "Proximamente. Estado del proyecto: Escrito, corregido y la critic esta siendo emocionalmente preparada para el acontecimiento.",
  },
]

interface VideoPlayerProps {
  src?: string
}

function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  const volumeUp = () => {
    const video = videoRef.current
    if (!video) return
    const newVol = Math.min(1, video.volume + 0.1)
    video.volume = newVol
    setVolume(newVol)
  }

  const volumeDown = () => {
    const video = videoRef.current
    if (!video) return
    const newVol = Math.max(0, video.volume - 0.1)
    video.volume = newVol
    setVolume(newVol)
  }

  const hasVideo = Boolean(src)

  return (
    <div className="flex flex-col">
      <div className="bg-gray-900 rounded-lg aspect-[9/16] flex items-center justify-center overflow-hidden">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover rounded-lg"
            controls={false}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <p className="font-serif text-piedra text-lg">Video pendiente</p>
        )}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={togglePlay}
          className="border border-dorado text-dorado p-2 rounded hover:bg-dorado hover:text-negro transition-colors"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={volumeDown}
          className="border border-dorado text-dorado p-2 rounded hover:bg-dorado hover:text-negro transition-colors"
        >
          <Volume1 className="h-5 w-5" />
        </button>
        <div className="w-20 h-1.5 bg-piedra rounded-full overflow-hidden">
          <div className="h-full bg-dorado transition-all" style={{ width: `${volume * 100}%` }} />
        </div>
        <button
          onClick={volumeUp}
          className="border border-dorado text-dorado p-2 rounded hover:bg-dorado hover:text-negro transition-colors"
        >
          <Volume2 className="h-5 w-5" />
        </button>
        <span className="font-serif text-xl text-dorado w-10 text-right">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  )
}

function PoetryBooks() {
  return (
    <section className="bg-negro px-24 py-10 pb-50">
      <div className="mx-auto flex flex-col gap-24" style={{ width: "1400px" }}>
        {booksData.map((book, i) => (
          <div key={i} className="pt-8">
            <div className="relative mb-16">
              <div className="border-t-1 border-dorado" />
              <Astroid className="absolute left-1/2 -translate-x-1/2 -top-3 text-dorado h-6 w-6" />
            </div>
            <div className="flex gap-40 justify-center">
              <div className="w-[600px] aspect-square">
                {book.img ? (
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover shadow-[0_0_80px_rgba(176,141,87,0.25)] rounded-lg" />
                ) : (
                  <div className="bg-gray-900 rounded-lg flex items-center justify-center w-full h-full">
                    <p className="font-serif text-piedra text-lg">Imagen pendiente</p>
                  </div>
                )}
              </div>
              <div className="w-[360px] shrink-0">
                <VideoPlayer src={book.videoSrc || undefined} />
              </div>
            </div>
            <div className="mt-12 text-center">
              <h2 className="font-serif text-3xl text-dorado mb-4">{book.title}</h2>
              <p className="font-serif text-2xl text-marfil leading-relaxed">{book.text}</p>
            </div>
            {(i === 1 || i === 2) && (
              <div className="flex justify-center p-30 pb-5">
              <Button to="https://www.amazon.de/amz-books/store?node=530886031&storeType=browse&filters=v1%3AFORMAT%5Bkindle_edition%5D&ie=UTF8&ccs_id=94661c71-5cf1-46c5-b589-738f2162b111">Adquirir un ejemplar</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default PoetryBooks
