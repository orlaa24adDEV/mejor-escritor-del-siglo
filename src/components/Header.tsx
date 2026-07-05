import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Cronología', path: '/cronologia' },
  { label: 'Obra Maestra', path: '/obra-maestra' },
  { label: 'Reconocimiento', path: '/reconocimiento' },
  { label: 'Manifiesto', path: '/manifiesto' },
  { label: 'Registro Histórico', path: '/registro-historico' },
  { label: 'Correspondencia', path: '/correspondencia' },
] as const

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm tracking-wide uppercase transition-colors ${
                  isActive ? 'text-dorado' : 'text-piedra hover:text-dorado'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
