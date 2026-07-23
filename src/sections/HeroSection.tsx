import { Astroid } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Pose from '@/assets/pose-mejor-del-siglo.png'
import Button from '@/components/Button'

function HeroSection() {
  const { t } = useTranslation()
  return (
    <section
      className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-70 pt-64 md:pt-72 lg:pt-80 bg-cover bg-center lg:bg-[left_300px_center] border-b-1 border-dorado relative"
      style={{ backgroundImage: `url(${Pose})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
      <div className="relative z-10 w-full md:max-w-2xl space-y-6 text-center mt-50 md:mt-0">
        <div className="relative">
          <p className="font-serif text-dorado text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
            <h1 className="text-2xl md:text-3xl">
              {t('hero.inicio.nombre')}
            </h1>
          </p>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <div className="relative">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
            {t('hero.inicio.titulo1')} <br />{t('hero.inicio.titulo2')}
          </h1>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
          {t('hero.inicio.subtitulo1')} <br /> <span className="text-dorado italic">{t('hero.inicio.subtitulo2')}</span>
        </p>
        <div className='p-10 mb-10'>
        <Button to="/reconocimiento">{t('hero.inicio.boton')}</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
