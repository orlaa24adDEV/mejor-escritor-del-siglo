import { Astroid } from 'lucide-react'
import Pose from '@/assets/pose-mejor-del-siglo.png'
import Button from '@/components/Button'

function HeroSection() {
  return (
    <section
      className="min-h-svh bg-negro flex items-start justify-left px-70 pt-50 bg-cover border-b-1 border-dorado relative"
      style={{ backgroundImage: `url(${Pose})`, backgroundPosition: 'left 200px center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
      <div className="relative z-10 max-w-2xl space-y-6 text-center">
        <div className="relative">
          <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
            <h1 className="text-3xl">
              FRANCO REINALDO POU
            </h1>
          </p>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <div className="relative">
          <h1 className="font-serif text-7xl text-white leading-tight border-b-1 border-dorado pb-10">
            EL ESCRITOR <br />DEL SIGLO
          </h1>
          <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
        </div>
        <p className="font-serif text-piedra text-3xl leading-relaxed">
          Toda epoca tiene un autor que la define. <br /> <span className="text-dorado italic">Esta decidio exagerar.</span>
        </p>
        <Button to="/obra-maestra">Entrar al archivo</Button>
      </div>
    </section>
  )
}

export default HeroSection
