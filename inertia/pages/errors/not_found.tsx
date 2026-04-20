import { ScanSearch } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-brand to-amber-dim flex items-center justify-center shadow-[0_0_32px_rgba(245,158,11,0.2)]">
            <ScanSearch className="w-7 h-7 text-bg-dark" />
          </div>
        </div>
        <p className="text-amber-brand font-mono text-sm font-semibold tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold text-cream mb-3">Page not found</h1>
        <p className="text-mute text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-amber-brand hover:bg-amber-dim text-bg-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  )
}
