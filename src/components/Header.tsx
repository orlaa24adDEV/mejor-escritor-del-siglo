import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Cronología', path: '/cronologia' },
  { label: 'Poesia', path: '/poesia' },
  { label: 'Narrativa', path: '/narrativa' },
  { label: 'Reconocimiento', path: '/reconocimiento' },
  { label: 'Registro Histórico', path: '/registro-historico' },
  { label: 'Contacto', path: '/contacto' },
] as const

function NavLinkItem({ item, onClick }: { item: typeof navItems[number]; onClick?: () => void }) {
  return (
    <NavLink
      key={item.path}
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        `font-serif tracking-wide text-base uppercase transition-colors ${
          isActive ? 'text-dorado' : 'text-marfil hover:text-dorado'
        }`
      }
    >
      {item.label}
    </NavLink>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-negro border-b-1 border-dorado z-50">
        <div className="flex items-center py-13">
          <div className="flex-1 flex justify-center">
            <nav className="hidden lg:flex items-center gap-20">
              {navItems.slice(0, 4).map((item) => (
                <NavLinkItem key={item.path} item={item} />
              ))}
            </nav>
          </div>
          <div className="w-32 shrink-0" />
          <div className="flex-1 flex justify-center lg:justify-center justify-end items-center">
            <nav className="hidden lg:flex items-center gap-20">
              {navItems.slice(4).map((item) => (
                <NavLinkItem key={item.path} item={item} />
              ))}
            </nav>
            <button
              className="lg:hidden text-marfil hover:text-dorado transition-colors mr-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú de navegación"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-50">
          <Logo />
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-negro lg:hidden">
          <nav className="h-full flex flex-col items-center justify-center gap-10">
            {navItems.map((item) => (
              <NavLinkItem key={item.path} item={item} onClick={closeMenu} />
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
