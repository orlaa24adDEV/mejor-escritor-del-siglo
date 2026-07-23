import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Astroid, ArrowDown, CheckCircle, Loader, CreditCard } from "lucide-react"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Stripe Payment Link — crear en https://dashboard.stripe.com/products → Payment Link
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_7sYaEWdP67fieyhcI6asg00"

function Contacto() {
  const { t } = useTranslation()
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setEnviando(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.get("from_name"),
          edad: form.get("edad"),
          reply_to: form.get("reply_to"),
          message: form.get("message"),
        },
        EMAILJS_PUBLIC_KEY,
      )
      setEnviado(true)
    } catch (err) {
      console.error(err)
      alert(t('contacto.formulario.error'))
    } finally {
      setEnviando(false)
    }
  }

  const inputClass =
    "w-full bg-negro border border-dorado/50 focus:border-dorado text-marfil placeholder-piedra rounded-lg p-4 font-sans text-base outline-none transition-colors focus:shadow-[0_0_15px_rgba(176,141,87,0.4)]"

  return (
    <>
      <section className="min-h-svh bg-negro flex flex-col items-start justify-left px-6 md:px-20 lg:px-80 pt-64 md:pt-72 lg:pt-80 bg-cover relative">
        <div className="absolute inset-0 bg-gradient-to-r from-negro/80 to-transparent" />
        <div className="relative z-10 flex flex-col lg:flex-row w-full gap-8 lg:gap-16 text-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <p className="font-serif text-piedra text-base tracking-widest uppercase border-b-1 border-dorado pb-10">
                <span className="text-xl md:text-2xl lg:text-3xl text-dorado">{t('contacto.nombre')}</span>
              </p>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
            <div className="relative">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-marfil leading-tight border-b-1 border-dorado pb-10">
                {t('contacto.titulo')}
              </h1>
              <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
            </div>
              <p className="font-serif text-piedra text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {t('contacto.subtitulo1')}<br /> <span className="text-dorado italic">{t('contacto.subtitulo2')}</span>
              </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="font-serif text-xl md:text-2xl text-dorado">{t('common.intro')}</p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-marfil leading-relaxed">
              {t('contacto.intro')}
              <br/>{t('contacto.introCont')}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12 md:mt-20">
          <ArrowDown className="text-dorado h-10 w-10 animate-bounce" />
        </div>
      </section>

      <section className="w-full bg-negro px-6 md:px-20 lg:px-80 pb-20 md:pb-32">
        <div className="max-w-6xl xl:max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contacto */}
            <div className="flex-1">
              <div className="relative mb-8">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado text-center border-b-1 border-dorado pb-6">
                  {t('contacto.formulario.titulo')}
                </h2>
                <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
              </div>
              {enviado ? (
                <div className="flex flex-col items-center gap-4 pt-10">
                  <CheckCircle className="text-dorado h-16 w-16" />
                  <p className="font-serif text-xl md:text-2xl text-marfil text-center">
                    {t('contacto.formulario.exito')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="from_name" placeholder={t('contacto.formulario.nombre')} required className={inputClass} />
                  <input type="number" name="edad" placeholder={t('contacto.formulario.edad')} min={0} required className={inputClass} />
                  <input type="email" name="reply_to" placeholder={t('contacto.formulario.correo')} required className={inputClass} />
                  <textarea
                    name="message"
                    placeholder={t('contacto.formulario.mensaje')}
                    required
                    rows={5}
                    className={inputClass + " resize-none"}
                  />
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full font-serif bg-transparent border border-dorado text-dorado px-10 py-4 text-base tracking-wide uppercase rounded-lg hover:bg-dorado hover:text-negro transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {enviando ? (
                      <><Loader className="h-5 w-5 animate-spin" /> {t('contacto.formulario.enviando')}</>
                    ) : (
                      t('contacto.formulario.enviar')
                    )}
                  </button>
                </form>
              )}
              <div className="flex justify-center gap-6 mt-16">
                <a
                  href="https://www.instagram.com/elreydelaemocion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-piedra hover:text-dorado transition-colors"
                >
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a
                  href="https://www.tiktok.com/@francoreinaldopou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-piedra hover:text-dorado transition-colors"
                >
                  <FaTiktok className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Donación */}
            <div className="flex-1">
              <div className="relative mb-8">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dorado text-center border-b-1 border-dorado pb-6">
                  {t('contacto.donacion.titulo')}
                </h2>
                <Astroid className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-dorado h-6 w-6" />
              </div>
              <form className="space-y-6">
                <input type="text" name="nombre" placeholder={t('contacto.donacion.nombre')} required className={inputClass} />
                <input type="email" name="correo" placeholder={t('contacto.donacion.correo')} required className={inputClass} />
                <input type="text" name="cantidad" placeholder={t('contacto.donacion.cantidad')} required className={inputClass} />
                <textarea
                  name="mensaje"
                  placeholder={t('contacto.donacion.mensaje')}
                  rows={3}
                  className={inputClass + " resize-none"}
                />
              </form>
              <div className="mt-8">
                <p className="font-serif text-lg md:text-xl text-piedra text-center mb-6">
                  {t('contacto.donacion.metodoPago')}
                </p>
                <a
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 border border-dorado/50 rounded-lg p-6 hover:border-dorado hover:shadow-[0_0_15px_rgba(176,141,87,0.3)] hover:animate-levitate transition-all max-w-xs mx-auto"
                >
                  <CreditCard className="text-dorado h-10 w-10" />
                  <span className="font-serif text-dorado text-base">{t('contacto.donacion.stripe')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
