import { useTranslation } from 'react-i18next'

function InformationSection() {
  const { t } = useTranslation()
  return (
    <section className="bg-negro grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-h-[100px]">
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center">
          {t('information.palabras')} <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">11.238.417.320</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          {t('information.civilizaciones')} <br /> <span className="text-piedra text-base md:text-xl lg:text-2xl">{t('information.evolucion')}</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          {t('information.elegancia')} <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">110%</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          {t('information.escritores')} <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">{t('information.sinRegistros')}</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center pl-50 md:pl-0" >
          {t('information.revisado')} <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">{t('information.historia')}</span>
        </p>
      </div>
    </section>
  )
}

export default InformationSection
