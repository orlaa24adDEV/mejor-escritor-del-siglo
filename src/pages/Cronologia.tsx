import { Astroid } from "lucide-react"
import TimelineSection from "@/sections/TimelineSection"

function Cronologia() {
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-80 pt-50 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex w-full gap-16 text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-3xl text-dorado">FRANCO REINALDO POU</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                CRONOLOGIA <br />DEL FENOMENO
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-3xl leading-relaxed">
                Desde 1996 hasta<br /> <span className="text-dorado italic">LA ETERNIDAD</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-2xl text-dorado">INTRODUCCION</p>
            <p className="font-serif text-marfil text-2xl leading-relaxed">
              Durante siglos, las grandes civilizaciones conservaron registros de guerras, imperios, descubrimientos científicos y revoluciones. Este archivo reúne los acontecimientos más relevantes en la formación, desarrollo y consolidación del denominado Fenómeno Franco Reinaldo Pou.
              Aunque diversos historiadores insisten en interpretar estos hechos como la biografía de un escritor argentino, investigaciones recientes sostienen que constituyen, en realidad, el registro del lento e inevitable advenimiento del mayor autor del siglo XXI.
            </p>
          </div>
        </div>
      </section>
      <TimelineSection />
    </>
  )
}

export default Cronologia
