import type { HttpContext } from '@adonisjs/core/http'

const LOCALES = ['en', 'fr', 'es', 'de', 'pt'] as const
type Locale = (typeof LOCALES)[number]

export default class HomeController {
  /** GET / — redirect to browser preferred language or 'en' */
  async root({ request, response }: HttpContext) {
    const acceptLanguage = request.header('accept-language') ?? 'en'
    const preferred = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    const locale: Locale = (LOCALES as readonly string[]).includes(preferred)
      ? (preferred as Locale)
      : 'en'
    return response.redirect(`/${locale}`)
  }

  /** GET /:locale */
  async index({ inertia, params }: HttpContext) {
    const locale = params.locale as Locale
    return inertia.render('home', { locale })
  }
}
