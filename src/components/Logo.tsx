import { Link } from 'react-router-dom'
import logoSrc from '@/assets/logo-mejor-del-siglo.png'

function Logo() {
  return (
    <Link to="/">
      <img src={logoSrc} alt="Mejor Escritor del Siglo" className="h-40 w-auto bg-negro rounded-full [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]" />
    </Link>
  )
}

export default Logo
3