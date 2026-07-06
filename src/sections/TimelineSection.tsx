import { CircleChevronLeft, CircleChevronRight, Sparkle, Astroid} from "lucide-react"

const timelineData = [
  {
    year: "1996",
    title: "1 de noviembre.",
    text: "Nace Franco Reinaldo Pou en la ciudad de Buenos Aires, Argentina. La historia todavia desconoce las consecuencias de este acontecimiento, pero se sabe que marcará un antes y un después en la historia de la literatura mundial.",
  },
  {
    year: "1997 - 2011",
    title: "Años sin archivo",
    text: "Su padre abandona el hogar. La información correspondiente a estos años presenta importantes inconsistencias. Algunas fuentes sostienen que desde pequeño manifestó una curiosidad excesiva por demasiadas disciplinas y una sensibilidad impropia para su edad. Otras afirman que anticipaba la llegada de las visitas antes de que golpearan la puerta. Existen testimonios según los cuales conversaba con personas cuya existencia jamás pudo corroborarse. Un episodio particularmente controvertido relata que, siendo niño, fue dejado al cuidado de dos curanderos con supuestos dones de clarividencia e imposición de manos, quienes, sin autorización familiar, lo bautizaron y se autoproclamaron sus padrinos mediante un ritual cuya validez continúa siendo discutida por especialistas. También consta un incidente de gravedad moral: rompió deliberadamente el huevo de un pájaro durante un juego, comprendió inmediatamente la naturaleza de su acto y permaneció entristecido durante aproximadamente un mes. Su abuela, figura determinante del período, acostumbraba introducirlo al pasado mediante monedas antiguas, cajas musicales y poemas recitados diariamente.",
  },
  {
    year: "2012",
    title: "Comienza a escribir poesia y narrativa.",
    text: "La literatura acusa recibo de sus primeras obras. ",
  },
  {
    year: "2013",
    title: "Verde Sangre",
    text: "Concluye un libro de poemas titulado Verde Sangre. Luego de evaluarlo con una severidad impropia incluso para su autor, decide editarlo únicamente para proceder a ocultarlo en el rincón más inaccesible de su casa. Durante el mismo año termina un libro de cuentos que logra una hazaña editorial excepcional: desaparecer antes de existir. Conoce a Flora. La crítica coincide en que este acontecimiento modificó profundamente su poesía.",
  },
  {
    year: "2014",
    title: "Fin de secundaria",
    text: "Termina sus estudios secundarios. Comienza su relacion con Flora.",
  },
  {
    year: "2015",
    title: "Inicio de Licenciatura en Filosofía",
    text: "La abandona poco después para enfrentar un fenómeno económico adverso conocido como 'la pobreza'. Durante seis meses ejerce la docencia de idiomas desconocidos. Comienza asimismo sus primeras experiencias con la recitación poética. Los registros de la época describen una voz todavía en estado embrionario, aunque ya capaz de producir inquietantes silencios entre los presentes.",
  },
  {
    year: "2016",
    title: "Inicio de Licenciatura en Comunicacion",
    text: "La abandona para aceptar un puesto ad honorem en una biblioteca de geometría incierta. Diversos testimonios aseguran que sus pasillos conducían simultáneamente a todas partes y a ninguna. Colabora con la revista de la institución. Existen versiones no verificadas según las cuales habría quemado libros para atravesar el invierno. Al encontrar finalmente la salida del edificio, presenta su renuncia. Concluye Poemas en la hoguera.",
  },
  {
    year: "2017",
    title: "Inicio de Profesorado de Literatura",
    text: "Lo abandona al advertir que la infelicidad podía institucionalizarse. Trabaja brevemente en un comercio de cereales y legumbres. Finaliza su primera novela. Decide que todavía no merece existir públicamente. La novela acepta la decisión.",
  },
  {
    year: "2018",
    title: "Inicio en Licenciatura en Cultura y Lenguaje Artistico",
    text: "Abandona la carrera el mismo día. Las investigaciones indican que llegó hasta la parada del autobús antes de comprender que prefería volver a su casa. Termina El país de tu cuerpo.",
  },
  {
    year: "2019",
    title: "Comienzo Pandemia COVID-19",
    text: "El archivo considera que este acontecimiento tuvo escasa incidencia comparado con los procesos creativos del autor.",
  },
  {
    year: "2020",
    title: "Finalizacion de Victimario",
    text: "Viaja junto a su madre al norte argentino para acompañar a un familiar en estado terminal. La cuarentena nacional los obliga a permanecer allí. El familiar fallece.",
  },
  {
    year: "2021",
    title: "21 de Diciembre.",
    text: "Muere su abuela. Catástrofe absoluta. Nivel de tormento registrado: Sin precedentes.",
  },
  {
    year: "2022",
    title: "Muerte de Lobo.",
    text: "Muere su perro, Lobo. Posteriormente escribiría el poema homónimo. Comienzan intensos padecimientos psíquicos cuya duración permanece indeterminada. Trabaja como albañil solo para someter su cuerpo a la alta prueba de los andamios.",
  },
  {
    year: "2023",
    title: "13 de Julio.",
    text: "Muere su padre. Franco Reinaldo Pou es desheredado. Responde iniciando una demanda judicial. Los archivos califican el episodio como 'desagradable, aunque literariamente prometedor'.",
  },
  {
    year: "2024",
    title: "Cultivacion de Paciencia.",
    text: "Comienza a trabajar como administrativo solo con el objetivo de cultivar la paciencia. Resultado obtenido: Negativo. Aparecen además padecimientos físicos asociados a los psíquicos y cuya explicación continúa pendiente.",
  },
  {
    year: "2025",
    title: "Publicacion Victimario.",
    text: "El autor manifiesta una disconformidad considerable. La novela, en cambio, permanece indiferente, tan indiferente que escribe en aproximadamente tres meses una contraparte que los críticos adjetivan como 'gloriosa'. Realiza su primera firma de ejemplares en la Feria Internacional del Libro de Buenos Aires. La recitación alcanza su forma definitiva. Los informes técnicos describen el fenómeno como un estado de lirismo absoluto. Las consecuencias para la audiencia continúan siendo objeto de estudio.",
  },
  {
    year: "2026",
    title: "Europa",
    text: "Renuncia a su empleo. Viaja a Europa. Concluye la escritura de uno de sus más célebres libros de poesía, cuyo título continúa siendo objeto de estudio. Los epigrafistas consultados coinciden en que las inscripciones originales fueron realizadas desde un grado de inspiración excepcionalmente elevado. Algunos informes preliminares hablan, sin el debido rigor científico, de un estado de “celestialidad”. Los investigadores consideran que esta etapa permanece abierta y, por razones metodológicas, se niegan a emitir conclusiones prematuras, pero prometen actualizaciones.",
  },
]

function TimelineSection() {
  return (
    <section className="bg-negro relative pb-50 px-24">
      <div className="relative mx-auto" style={{ width: "1600px" }}>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-dorado -translate-x-1/2 z-0" />

        <div className="relative flex flex-col gap-24">
          {timelineData.map((text, index) => {
            const isLeft = index % 2 === 0

            return (
              <div key={index} className="relative flex items-start min-h-[160px]">
                {isLeft ? (
                  <>
                    <div className="flex-1 text-right pr-20">
                      <span className="font-serif text-4xl text-dorado block">{text.year}</span>
                      <h3 className="font-serif text-2xl text-piedra mt-2">{text.title}</h3>
                      <p className="font-serif text-2xl text-marfil mt-2 leading-relaxed">
                        {text.text}
                      </p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <Sparkle className="text-dorado h-6 w-6" />
                    </div>
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    <div className="flex-1" />
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <Sparkle className="text-dorado h-6 w-6" />
                    </div>
                    <div className="flex-1 text-left pl-20">
                      <span className="font-serif text-4xl text-dorado block">{text.year}</span>
                      <h3 className="font-serif text-2xl text-piedra mt-2">{text.title}</h3>
                      <p className="font-serif text-2xl text-marfil mt-2 leading-relaxed">
                        {text.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
