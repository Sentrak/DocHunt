import { useState, useEffect, useRef } from 'react'
import { ScanSearch, ChevronDown } from 'lucide-react'
import { router } from '@inertiajs/react'
import { useT, useLocale } from '~/i18n/context'
import { LOCALES, LOCALE_LABELS } from '~/i18n/types'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const t = useT()
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const links = [
    { label: t.nav.features, target: 'features' },
    { label: t.nav.howItWorks, target: 'how' },
    { label: t.nav.demo, target: 'demo' },
    { label: t.nav.faq, target: 'faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-edge transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-bg-dark/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 font-mono font-bold text-xl text-cream">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-amber-brand to-amber-dim flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <ScanSearch className="w-[18px] h-[18px] text-bg-dark" />
          </div>
          DocHunt
        </a>

        <div className="hidden md:flex items-center gap-8">
          {/* Nav links */}
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-sm font-medium text-dim hover:text-cream transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm font-medium text-dim hover:text-cream transition-colors cursor-pointer"
            >
              <span className="font-mono uppercase">{locale}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-bg-card border border-edge rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[140px]">
                {LOCALES.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLangOpen(false)
                      router.visit(`/${l}`)
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                      l === locale
                        ? 'text-amber-brand bg-[rgba(245,158,11,0.08)]'
                        : 'text-dim hover:text-cream hover:bg-bg-card-hover'
                    }`}
                  >
                    <span className="font-mono text-xs uppercase opacity-60 w-6">{l}</span>
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('demo')}
            className="px-5 py-2 bg-amber-brand hover:bg-amber-400 text-bg-dark rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-px cursor-pointer"
          >
            {t.nav.analyze}
          </button>
        </div>
      </div>
    </nav>
  )
}
