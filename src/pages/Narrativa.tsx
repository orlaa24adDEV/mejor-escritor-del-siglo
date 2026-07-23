import { useTranslation } from 'react-i18next'
import { Astroid, ArrowDown, TriangleAlert } from "lucide-react"
import NarrativeBooks from "@/sections/NarrativeBooks"
import Loco from "@/assets/locura.png"

export default function Narrativa() {
  const { t } = useTranslation()
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-80 pt-64 md:pt-72 lg:pt-80 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex flex-col lg:flex-row w-full gap-8 lg:gap-16 text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">{t('narrativa.nombre')}</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                {t('narrativa.titulo')}
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t('narrativa.subtitulo1')} <br /> <span className="text-dorado italic">{t('narrativa.subtitulo2')}</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-xl md:text-2xl text-dorado">{t('common.intro')}</p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed">
              {t('narrativa.intro')}
              <br/>{t('narrativa.introContinua')}
            </p>
          </div>
        </div>
        <ArrowDown className="absolute left-1/2 -translate-x-1/2 bottom-5 md:bottom-50 text-dorado h-10 w-10 animate-bounce" />
      </section>
      <NarrativeBooks />
      <section className="bg-negro px-6 md:px-24 pb-50 flex flex-col items-center">
        <div className="flex flex-col items-center w-full max-w-6xl xl:max-w-[1600px]">
          <div className="relative mb-16 w-full">
            <div className="border-t-1 border-dorado" />
            <Astroid className="absolute left-1/2 -translate-x-1/2 -top-3 text-dorado h-6 w-6" />
          </div>
          <TriangleAlert className="text-dorado h-8 w-8 md:h-10 md:w-10"/>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dorado mb-6 text-center p-6 md:p-10">{t('narrativa.alertaTitulo')}</h2>
          <div className="w-full max-w-[600px] aspect-square">
            <img
              src={Loco}
              alt="Autor bajo control"
              className="w-full h-full object-cover shadow-[0_0_100px_rgba(176,141,87,0.25)] rounded-lg hover:-translate-y-5 hover:shadow-[0_0_20px_rgba(176,141,87,0.35)] transition-all duration-300"
            />
          </div>
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed text-center p-6 md:p-20">
            {t('narrativa.alertaTexto')}
          </p>
            <div className="p-6 md:p-10">
              <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed text-center max-w-2xl">{t('narrativa.nivelPresion')} <span className="font-bold text-dorado">{t('narrativa.maximo')}</span></h2>
              <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed text-center max-w-2xl">{t('narrativa.nuevasObras')} <span className="font-bold text-dorado">{t('narrativa.proximamente')}</span></h2>
            </div>
        </div>
      </section>
    </>
  )
}
