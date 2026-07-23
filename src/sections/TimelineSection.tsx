import { Astroid } from "lucide-react"
import { useTranslation } from 'react-i18next'

function TimelineSection() {
  const { t } = useTranslation()

  const timelineData = [
    {
      year: "1996",
      title: t('timeline.eventos.1996.titulo'),
      text: t('timeline.eventos.1996.texto'),
    },
    {
      year: "1997 - 2011",
      title: t('timeline.eventos.1997_2011.titulo'),
      text: t('timeline.eventos.1997_2011.texto'),
    },
    {
      year: "2012",
      title: t('timeline.eventos.2012.titulo'),
      text: t('timeline.eventos.2012.texto'),
    },
    {
      year: "2013",
      title: t('timeline.eventos.2013.titulo'),
      text: t('timeline.eventos.2013.texto'),
    },
    {
      year: "2014",
      title: t('timeline.eventos.2014.titulo'),
      text: t('timeline.eventos.2014.texto'),
    },
    {
      year: "2015",
      title: t('timeline.eventos.2015.titulo'),
      text: t('timeline.eventos.2015.texto'),
    },
    {
      year: "2016",
      title: t('timeline.eventos.2016.titulo'),
      text: t('timeline.eventos.2016.texto'),
    },
    {
      year: "2017",
      title: t('timeline.eventos.2017.titulo'),
      text: t('timeline.eventos.2017.texto'),
    },
    {
      year: "2018",
      title: t('timeline.eventos.2018.titulo'),
      text: t('timeline.eventos.2018.texto'),
    },
    {
      year: "2019",
      title: t('timeline.eventos.2019.titulo'),
      text: t('timeline.eventos.2019.texto'),
    },
    {
      year: "2020",
      title: t('timeline.eventos.2020.titulo'),
      text: t('timeline.eventos.2020.texto'),
    },
    {
      year: "2021",
      title: t('timeline.eventos.2021.titulo'),
      text: t('timeline.eventos.2021.texto'),
    },
    {
      year: "2022",
      title: t('timeline.eventos.2022.titulo'),
      text: t('timeline.eventos.2022.texto'),
    },
    {
      year: "2023",
      title: t('timeline.eventos.2023.titulo'),
      text: t('timeline.eventos.2023.texto'),
    },
    {
      year: "2024",
      title: t('timeline.eventos.2024.titulo'),
      text: t('timeline.eventos.2024.texto'),
    },
    {
      year: "2025",
      title: t('timeline.eventos.2025.titulo'),
      text: t('timeline.eventos.2025.texto'),
    },
    {
      year: "2026",
      title: t('timeline.eventos.2026.titulo'),
      text: t('timeline.eventos.2026.texto'),
    },
  ]

  return (
    <section className="bg-negro relative pb-50 px-6 md:px-24">
      <div className="relative mx-auto w-full max-w-6xl xl:max-w-[1600px]">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-dorado md:-translate-x-1/2 z-0" />

        <div className="relative flex flex-col gap-12 lg:gap-24">
          {timelineData.map((text, index) => {
            const isLeft = index % 2 === 0

            return (
              <div key={index} className="relative flex items-start min-h-[160px]">
                {isLeft ? (
                  <>
                    <div className="flex-1 text-left md:text-right md:pr-20 pl-12 md:pl-0">
                      <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado block">{text.year}</span>
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-piedra mt-2">{text.title}</h3>
                      <p className="font-serif text-base md:text-lg lg:text-2xl text-marfil mt-2 leading-relaxed">
                        {text.text}
                      </p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <Astroid className="text-dorado h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="hidden md:block flex-1" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block flex-1" />
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <Astroid className="text-dorado h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 text-left md:pl-20 pl-12">
                      <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado block">{text.year}</span>
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-piedra mt-2">{text.title}</h3>
                      <p className="font-serif text-base md:text-lg lg:text-2xl text-marfil mt-2 leading-relaxed">
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
