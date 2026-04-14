import { type ReactNode } from 'react'
import LandingLayout from '~/layouts/landing'
import { I18nProvider } from '~/i18n/context'
import { getTranslations, type Locale } from '~/i18n/index'
import Nav from '~/components/landing/Nav'
import Hero from '~/components/landing/Hero'
import Features from '~/components/landing/Features'
import HowItWorks from '~/components/landing/HowItWorks'
import UploadDemo from '~/components/landing/UploadDemo'
import Formats from '~/components/landing/Formats'
import Faq from '~/components/landing/Faq'
import Cta from '~/components/landing/Cta'
import Footer from '~/components/landing/Footer'

interface Props {
  locale: Locale
}

export default function Home({ locale }: Props) {
  const t = getTranslations(locale)

  return (
    <I18nProvider t={t} locale={locale}>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <UploadDemo />
      <Formats />
      <Faq />
      <Cta />
      <Footer />
    </I18nProvider>
  )
}

Home.layout = (page: ReactNode) => <LandingLayout>{page}</LandingLayout>
