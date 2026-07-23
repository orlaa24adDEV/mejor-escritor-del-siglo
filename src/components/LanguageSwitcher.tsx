import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "es", label: "Español", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "en", label: "English", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "pt", label: "Português", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "fr", label: "Français", flag: "\u{1F1EB}\u{1F1F7}" },
] as const

function LanguageSwitcher({ onToggle }: { onToggle?: () => void }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-serif text-sm tracking-wider text-piedra hover:text-dorado transition-colors"
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden md:inline uppercase">{current.code}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-negro border border-dorado/40 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(176,141,87,0.15)] z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpen(false)
                onToggle?.()
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 font-serif text-sm tracking-wider transition-colors ${
                lang.code === i18n.language
                  ? "text-dorado bg-dorado/10"
                  : "text-marfil hover:text-dorado hover:bg-dorado/5"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
