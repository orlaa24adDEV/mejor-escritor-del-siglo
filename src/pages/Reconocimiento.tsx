import { Astroid, ArrowDown } from "lucide-react"
import RecognitionCards from "@/sections/RecognitionCards"
import Trofeo from "@/assets/trofeos.png"

function Reconocimiento() {
  return (
    <>
      <section
        className="min-h-svh flex items-start justify-left px-6 md:px-20 lg:px-70 pt-80 md:pt-72 lg:pt-90 bg-cover bg-center lg:bg-[left 50px_center] relative bg-negro"
        style={{ backgroundImage: `url(${Trofeo})` }}>
        <div className="absolute inset-0" />
        <div className="relative z-10 w-full text-center bg-negro/70 p-6 md:p-10 rounded-xl">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">RECONOCIMIENTOS:</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                OFICIALES, EXTRAOFICIALES E <br />INEVITABLES
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                PASADO, PRESENTE Y FUTURO<br /> <span className="text-dorado italic">CUIDADOSAMENTE DOCUMENTADOS</span>
              </p>
          </div>
        </div>
        <ArrowDown className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-10 text-dorado h-10 w-10 animate-bounce" />
      </section>
      <RecognitionCards />
    </>
  )
}

export default Reconocimiento
