import { createContext, useContext, type ReactNode } from 'react'
import type { Locale, Translations } from './types'

interface I18nContextValue {
  t: Translations
  locale: Locale
}

const I18nCtx = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  t,
  locale,
  children,
}: {
  t: Translations
  locale: Locale
  children: ReactNode
}) {
  return <I18nCtx.Provider value={{ t, locale }}>{children}</I18nCtx.Provider>
}

export function useT(): Translations {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error('useT must be used inside I18nProvider')
  return ctx.t
}

export function useLocale(): Locale {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error('useLocale must be used inside I18nProvider')
  return ctx.locale
}
