import { Astroid } from "lucide-react"
import diploma from "@/assets/diploma.png"
import diploma2 from "@/assets/diploma2.png"
import diploma3 from "@/assets/diploma3.png"
import diploma4 from "@/assets/diploma4.png"
import diploma5 from "@/assets/diploma5.png"
import diploma6 from "@/assets/diploma6.png"
import diploma7 from "@/assets/diploma7.png"
import diploma8 from "@/assets/diploma8.png"
import premioNobel from "@/assets/premioNobel.png"
import rechazar from "@/assets/rechazar.png"

const largeCards = [
  {
    img: diploma,
    title: "\"Promesa Retroactiva de las Letras Argentinas\", Instituto Polar de Literatura, Antártida.",
    text: "Distinción concedida con efecto retroactivo desde 2012.",
  },
  {
    img: diploma2,
    title: "\"Faja de honor a la Grandeza Preventiva\", North American Institute for Future Classics, Princeton.",
    text: "Otorgado a personalidades cuyo legado resulta estadísticamente inevitable.",
  },
  {
    img: diploma3,
    title: "Paloma de platino al Autor Patrimonial en Potencia, Observatorio Continental del Legado Literario, Gaborone.",
    text: "El jurado destacó \"la extraordinaria capacidad del candidato para ser considerado un clásico mientras todavía corrige manuscritos\".",
  },
  {
    img: diploma4,
    title: "Instituto Internacional para el Estudio Fenomenológico.",
    text: "Declara al autor como \"Objeto de estudio de sí mismo\".",
  },
  {
    img: diploma5,
    title: "Comisión Permanente para la Conservación del Asombro.",
    text: "Declara al autor como “Asombroso”.",
  },
]

const smallCards = [
  {
    img: diploma6,
    title: "Distincion menor 1",
    text: "“Caballero Honorario” de la Orden del Punto y Coma, Buenos Aires. “Custodio Vitalicio de la Metáfora Bien Construida”, Academia Literaria de Ushguli.",
  },
  {
    img: diploma7,
    title: "Distincion menor 2",
    text: "“Embajador Plenipotenciario del Verso Preciso”, Instituto para la Medición del Lirismo, Kioto.",
  },
  {
    img: diploma8,
    title: "Distincion menor 3",
    text: "Mayor concentración de solemnidad en una fotografía promocional. (Renovación automática mientras continúe utilizando chaleco).",
  },
]

const InevitablesOtherCards = [
  {
    img: premioNobel,
    title: "Reconocimiento Inevitable",
    text: "Premio Nobel de Literatura, otorgado por la Academia Sueca.",
  },
  {
    img: rechazar,
    title: "Reconocimiento Rechazados",
    text: "Pendientes de ser ofrecidos.",
  },
]

function RecognitionCards() {
  return (
    <section className="bg-negro px-6 md:px-24 pb-20 mt-20 md:mt-32">
      <div className="mx-auto flex flex-col items-center gap-8 w-full max-w-7xl xl:max-w-[1600px]">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado">
            OFICIALES
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {largeCards.map((card, i) => (
            <div
              key={i}
              className="border-b-2 border-dorado bg-negro p-6 md:p-10 min-h-[350px] flex flex-col justify-start relative shadow-[0_0_10px_rgba(176,141,87,0.25)] hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(176,141,87,0.35)] transition-all duration-300 rounded-lg"
            >
              <img src={card.img} alt="" className="h-30 md:h-40 w-auto mb-4 self-center shadow-[0_0_100px_rgba(176,141,87,0.25)] rounded-lg" />
              <p className="font-serif text-base md:text-lg text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-base md:text-lg text-marfil leading-relaxed">
                {card.text}
              </p>
              <Astroid className="text-dorado w-5 absolute bottom-4 left-1/2 -translate-x-1/2" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado">
            EXTRAOFICIALES
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {smallCards.map((card, i) => (
            <div
              key={i}
              className="border-b-2 border-dorado bg-negro p-6 md:p-8 min-h-[280px] flex flex-col justify-start relative shadow-[0_0_10px_rgba(176,141,87,0.25)] hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(176,141,87,0.35)] transition-all duration-300 rounded-lg"
              style={{ width: "min(100%, 420px)" }}
            >
              <img src={card.img} alt="" className="h-24 md:h-30 w-auto mb-4 self-center shadow-[0_0_100px_rgba(176,141,87,0.25)] rounded-lg" />
              <p className="font-serif text-base md:text-lg text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-base md:text-lg text-marfil leading-relaxed">
                {card.text}
              </p>
              <Astroid className="text-dorado w-5 absolute bottom-4 left-1/2 -translate-x-1/2" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado">
            INEVITABLES U OTROS
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {InevitablesOtherCards.map((card, i) => (
            <div
              key={i}
              className="border-b-2 border-dorado bg-negro p-6 md:p-8 min-h-[280px] flex flex-col justify-start relative shadow-[0_0_10px_rgba(176,141,87,0.25)] hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(176,141,87,0.35)] transition-all duration-300 rounded-lg"
              style={{ width: "min(100%, 420px)" }}
            >
              <img src={card.img} alt="" className="h-40 md:h-50 w-auto mb-4 self-center" />
              <p className="font-serif text-base md:text-lg text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-base md:text-lg text-marfil leading-relaxed">
                {card.text}
              </p>
              <Astroid className="text-dorado w-5 absolute bottom-4 left-1/2 -translate-x-1/2" />
            </div>
          ))}
        </div>
        <div className="text-center p-6 md:p-20">
            <p className="font-serif text-base md:text-lg lg:text-xl text-piedra">
              Algunos reconocimientos corresponden a instituciones que aún no existen. Esta circunstancia no afecta su validez histórica.
            </p>
          </div>
      </div>
    </section>
  )
}

export default RecognitionCards
