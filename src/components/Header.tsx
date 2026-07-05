import { NavLink } from 'react-router-dom'
import Logo from '@/components/Logo'

const leftItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Cronología', path: '/cronologia' },
  { label: 'Obra Maestra', path: '/obra-maestra' },
  { label: 'Reconocimiento', path: '/reconocimiento' },
] as const

const rightItems = [
  { label: 'Manifiesto', path: '/manifiesto' },
  { label: 'Registro Histórico', path: '/registro-historico' },
  { label: 'Correspondencia', path: '/correspondencia' },
] as const

function NavLinks({ items }: { items: ReadonlyArray<{ label: string; path: string }> }) {
  return items.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `font-serif text-sm tracking-wide uppercase transition-colors ${
          isActive ? 'text-dorado' : 'text-white hover:text-dorado'
        }`
      }
    >
      {item.label}
    </NavLink>
  ))
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-negro border-b-1 border-dorado z-40 relative">
      <div className="flex items-center py-13">
        <div className="flex-1 flex justify-center">
          <nav className="hidden lg:flex items-center gap-20">
            <NavLinks items={leftItems} />
          </nav>
        </div>
        <div className="w-32 shrink-0" />
        <div className="flex-1 flex justify-center">
          <nav className="hidden lg:flex items-center gap-20">
            <NavLinks items={rightItems} />
          </nav>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-50">
        <Logo />
      </div>
    </header>
  )
}

export default Header
