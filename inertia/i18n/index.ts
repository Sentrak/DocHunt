import en from './en'
import fr from './fr'
import es from './es'
import de from './de'
import pt from './pt'
import { LOCALES, type Locale, type Translations } from './types'

export { LOCALES, type Locale, type Translations }
export { LOCALE_LABELS } from './types'

const translations: Record<Locale, Translations> = { en, fr, es, de, pt }

export function getTranslations(locale: string): Translations {
  return translations[(locale as Locale) in translations ? (locale as Locale) : 'en']
}
