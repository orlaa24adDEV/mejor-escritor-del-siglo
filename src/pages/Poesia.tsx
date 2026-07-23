import { useTranslation } from 'react-i18next'
import { Astroid, ArrowDown } from "lucide-react"
import PoetryBooks from "@/sections/PoetryBooks"

function Poesia() {
  const { t } = useTranslation()
  return (
    <>
      <section className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-80 pt-64 md:pt-72 lg:pt-80 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex flex-col lg:flex-row w-full gap-8 lg:gap-16 text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">{t('poesia.nombre')}</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                {t('poesia.titulo')}
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t('poesia.subtitulo1')}<br /> <span className="text-dorado italic">{t('poesia.subtitulo2')}</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-xl md:text-2xl text-dorado">{t('common.intro')}</p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed">
              {t('poesia.intro')}
              <br/>{t('poesia.introFinal')}
            </p>
          </div>
        </div>
        <ArrowDown className="absolute left-1/2 -translate-x-1/2 bottom-5 md:bottom-50 text-dorado h-10 w-10 animate-bounce " />
      </section>
      <PoetryBooks />
    </>
  )
}

export default Poesia
