import { type ReactNode } from 'react'
import LandingLayout from '~/layouts/landing'
import Privacy from '~/components/landing/Privacy'

interface Props {
  locale: string
}

export default function PrivacyPage(_props: Props) {
  return <Privacy />
}

PrivacyPage.layout = (page: ReactNode) => <LandingLayout>{page}</LandingLayout>
