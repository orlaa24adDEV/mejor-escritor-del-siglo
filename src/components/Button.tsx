import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  to?: string
}

function Button({ children, to }: ButtonProps) {
  const className =
    'font-serif bg-transparent text-dorado border border-dorado px-10 py-4 text-base tracking-wide uppercase inline-block'

  if (to) {
    if (to.startsWith('http')) {
      return <a href={to} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
    }
    return <Link to={to} className={className}>{children}</Link>
  }

  return <button className={className}>{children}</button>
}

export default Button
