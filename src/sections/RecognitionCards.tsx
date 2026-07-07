const largeCards = [
  {
    title: "Declarado \"Promesa Retroactiva de las Letras Argentinas 2026\", Instituto Polar de Literatura, Base San Martín, Antártida.",
    text: "Distinción concedida con efecto retroactivo desde 2012.",
  },
  {
    title: "\"Faja de honor a la Grandeza Preventiva\", North American Institute for Future Classics, Princeton, New Jersey, Estados Unidos.",
    text: "Otorgado a personalidades cuyo legado resulta estadísticamente inevitable.",
  },
  {
    title: "Paloma de platino al Autor Patrimonial en Potencia, Observatorio Continental del Legado Literario, Gaborone, Botsuana",
    text: "El jurado destacó \"la extraordinaria capacidad del candidato para ser considerado un clásico mientras todavía corrige manuscritos\".",
  },
  {
    title: "Instituto Internacional para el Estudio Fenomenológico (IIEF), Hobart, Tasmania, Australia.",
    text: "Declara al autor como \"Objeto de estudio de sí mismo\".",
  },
  {
    title: "Comisión Permanente para la Conservación del Asombro (CPCA) Lhasa, Tíbet.",
    text: "Declara al autor como “Asombroso”. Mantiene abierta la investigación.",
  },
]

const smallCards = [
  {
    title: "Distincion menor 1",
    text: "“Caballero Honorario” de la Orden del Punto y Coma, Buenos Aires. “Custodio Vitalicio de la Metáfora Bien Construida”, Academia Literaria de Ushguli, en el Cáucaso georgiano.",
  },
  {
    title: "Distincion menor 2",
    text: "“Embajador Plenipotenciario del Verso Preciso”, Instituto para la Medición del Lirismo, Kioto, Japón. Autorizado por la Casa Real Argentina para utilizar el plural mayestático en entrevistas.",
  },
  {
    title: "Distincion menor 3",
    text: "Mayor concentración de solemnidad registrada en una fotografía promocional. (Renovación automática mientras continúe utilizando chaleco).",
  },
]

const InevitablesOtherCards = [
  {
    title: "Reconocimiento Inevitable",
    text: "Premio Nobel de Literatura, otorgado por la Academia Sueca.",
  },
  {
    title: "Reconocimiento Rechazados",
    text: "Pendientes de ser ofrecidos.",
  },
]

function RecognitionCards() {
  return (
    <section className="bg-negro px-24 pb-20">
      <div className="mx-auto flex flex-col items-center gap-8" style={{ width: "1600px" }}>
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-4xl text-dorado">
            OFICIALES
          </h1>
        </div>
        <div className="flex gap-8">
          {largeCards.map((card, i) => (
            <div
              key={i}
              className="flex-1 border border-dorado bg-negro p-10 min-h-[350px] flex flex-col justify-left"
            >
              <p className="font-serif text-2xl text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-xl text-marfil leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-4xl text-dorado">
            EXTRAOFICIALES
          </h1>
        </div>
        <div className="flex gap-8 justify-center">
          {smallCards.map((card, i) => (
            <div
              key={i}
              className="border border-dorado bg-negro p-8 min-h-[280px] flex flex-col justify-left "
              style={{ width: "420px" }}
            >
              <p className="font-serif text-2xl text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-xl text-marfil leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-4xl text-dorado">
            INEVITABLES U OTROS
          </h1>
        </div>
        <div className="flex gap-8 justify-center">
          {InevitablesOtherCards.map((card, i) => (
            <div
              key={i}
              className="border border-dorado bg-negro p-8 min-h-[280px] flex flex-col justify-left"
              style={{ width: "420px" }}
            >
              <p className="font-serif text-2xl text-dorado mb-2">{card.title}</p>
              <p className="font-serif text-xl text-marfil leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center p-20">
            <p className="font-serif text-xl text-piedra">
              Algunos reconocimientos corresponden a instituciones que aún no existen. Esta circunstancia no afecta su validez histórica.
            </p>
          </div>
      </div>
    </section>
  )
}

export default RecognitionCards
