import { type ReactNode } from 'react'
import LandingLayout from '~/layouts/landing'
import Terms from '~/components/landing/Terms'

interface Props {
  locale: string
}

export default function TermsPage(_props: Props) {
  return <Terms />
}

TermsPage.layout = (page: ReactNode) => <LandingLayout>{page}</LandingLayout>
