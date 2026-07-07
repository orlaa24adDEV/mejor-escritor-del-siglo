import { Astroid, Landmark } from 'lucide-react'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-marfil flex min-h-[100px]">
      <div className="flex-1 flex items-center justify-center p-4 gap-4">
        <Landmark className="text-dorado h-10 w-10" />
        <p className="font-serif text-base text-negro text-left" >
          INSTITUTO INTERNACIONAL <br />PARA EL ESTUDIO DE SU LEGADO <br /><span className="text-piedra">FUNDADO Y SOSTENIDO POR EL MISMO</span>
        </p>
      </div>
      <div className="flex items-center justify-center px-2">
        <Astroid className="text-negro/40 h-5 w-5" />
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="font-serif text-base text-negro text-center">
            VERSION DEL SITIO: 1.0 <br />ESTADO DEL AUTOR: <span className="text-dorado">DEFINITIVO</span>
        </p>
      </div>
      <div className="flex items-center justify-center px-2">
        <Astroid className="text-negro/40 h-5 w-5" />
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="font-serif text-base text-negro text-center">
            COMPATIBILIDAD: TODOS LOS SIGLOS <br />ULTIMA ACTIUALIZACION: <span className='text-dorado'>LA POSTERIDAD</span>
        </p>
      </div>
      <div className="flex items-center justify-center px-2">
        <Astroid className="text-negro/40 h-5 w-5" />
      </div>
      <div className="flex-1 flex items-center justify-center p-4 gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-dorado hover:text-negro h-6 w-6 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-dorado hover:text-negro h-6 w-6 transition-colors" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-dorado hover:text-negro h-6 w-6 transition-colors" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
