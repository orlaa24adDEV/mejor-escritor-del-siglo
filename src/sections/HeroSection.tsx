import { Astroid } from 'lucide-react'
import Pose from '@/assets/pose-mejor-del-siglo.png'
import Button from '@/components/Button'

function HeroSection() {
  return (
    <section
      className="min-h-svh bg-negro flex items-start justify-left px-6 md:px-20 lg:px-70 pt-52 md:pt-64 lg:pt-72 bg-cover bg-center lg:bg-[left_300px_center] border-b-1 border-dorado relative"
      style={{ backgroundImage: `url(${Pose})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
      <div className="relative z-10 w-full md:max-w-2xl space-y-6 text-center mt-50 md:mt-0">
        <div className="relative">
          <p className="font-serif text-dorado text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
            <h1 className="text-2xl md:text-3xl">
              FRANCO REINALDO POU
            </h1>
          </p>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <div className="relative">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
            EL ESCRITOR <br />DEL SIGLO
          </h1>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Toda epoca tiene un autor que la define. <br /> <span className="text-dorado italic">Esta decidio exagerar.</span>
        </p>
        <div className='p-10 mb-10'>
        <Button to="/reconocimiento">Reconocimiento</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
