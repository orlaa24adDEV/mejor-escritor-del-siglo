import { Astroid, ArrowDown } from "lucide-react"
import RecognitionCards from "@/sections/RecognitionCards"

function Reconocimiento() {
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-80 pt-52 md:pt-64 lg:pt-72 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 w-full text-center">
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
        <ArrowDown className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-50 text-dorado h-10 w-10 animate-bounce" />
      </section>
      <RecognitionCards />
    </>
  )
}

export default Reconocimiento
