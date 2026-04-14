import { ReactNode } from 'react'
import { Toaster } from 'sonner'

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="noise-overlay dark-scroll min-h-screen bg-bg-dark text-cream font-sans antialiased">
      {children}
      <Toaster position="top-center" richColors />
    </div>
  )
}
