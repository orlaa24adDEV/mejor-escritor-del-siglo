function InformationSection() {
  return (
    <section className="bg-negro grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 min-h-[100px]">
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center">
          PALABRAS ESCRITAS <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">11.238.417.320</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          CIVILIZACIONES INSPIRADAS <br /> <span className="text-piedra text-base md:text-xl lg:text-2xl">EN EVOLUCION.</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          NIVEL DE ELEGANCIA <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">110%</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center" >
          CANTIDAD DE ESCRITORES MEJORES <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">SIN REGISTROS</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="font-serif text-sm md:text-lg lg:text-xl text-dorado text-center pl-50 md:pl-0" >
          REVISADO POR <br /><span className="text-piedra text-base md:text-xl lg:text-2xl">LA HISTORIA</span>
        </p>
      </div>
    </section>
  )
}

export default InformationSection
