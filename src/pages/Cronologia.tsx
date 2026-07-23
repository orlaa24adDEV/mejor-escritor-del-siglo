import { useTranslation } from 'react-i18next'
import { Astroid, ArrowDown } from "lucide-react"
import TimelineSection from "@/sections/TimelineSection"

function Cronologia() {
  const { t } = useTranslation()
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-80 pt-64 md:pt-72 lg:pt-80 pb-40 md:pb-52 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex flex-col lg:flex-row w-full gap-8 lg:gap-16 text-center lg:text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">{t('cronologia.nombre')}</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                {t('cronologia.titulo1')} <br />{t('cronologia.titulo2')}
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t('cronologia.subtitulo1')}<br /> <span className="text-dorado italic">{t('cronologia.subtitulo2')}</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-xl md:text-2xl text-dorado">{t('common.intro')}</p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed">
              {t('cronologia.intro')}
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-16 text-dorado h-10 w-10 animate-bounce">
          <ArrowDown className="h-10 w-10" />
        </div>
      </section>
      <div className="bg-negro h-20 md:h-32" />
      <TimelineSection />
    </>
  )
}

export default Cronologia
