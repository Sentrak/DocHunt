import { motion } from 'motion/react'
import { FileUp, AlertCircle } from 'lucide-react'
import { useT } from '~/i18n/context'

const FILE_TYPES = ['.pdf', '.docx', '.jpg', '.png', '.xlsx']

const RESULT_ROWS = [
  { labelKey: 'AUTEUR', value: 'Jean-Marc Dupont', type: 'sensitive' as const },
  { labelKey: 'ORGANISATION', value: 'Acme Corp.', type: 'sensitive' as const },
  { labelKey: 'LOGICIEL', value: 'Microsoft Word 2021', type: 'info' as const },
  { labelKey: 'CRÉÉ LE', value: '2024-11-03 09:14:22', type: 'info' as const },
  { labelKey: 'MODIFIÉ LE', value: '2025-01-18 16:42:07', type: 'info' as const },
  { labelKey: 'GPS', value: '48.8566°N, 2.3522°E', type: 'sensitive' as const },
  { labelKey: 'CHIFFREMENT', value: 'Aucun', type: 'danger' as const },
  { labelKey: 'LIENS', value: '3 URLs', type: 'info' as const },
]

const rowClass = { sensitive: 'text-red-500 flex items-center gap-1.5', danger: 'text-red-500', info: 'text-blue-400' }

export default function UploadDemo() {
  const t = useT()

  return (
    <section id="demo" className="py-[120px] bg-bg-secondary border-t border-b border-edge">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[3px] text-amber-brand mb-4">{t.demo.tag}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.demo.title}</h2>
          <p className="text-dim text-[17px] max-w-[560px] mx-auto">{t.demo.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Upload zone */}
          <div className="group bg-bg-card border-2 border-dashed border-edge hover:border-amber-brand rounded-[20px] px-10 py-16 text-center cursor-pointer transition-all hover:bg-[rgba(245,158,11,0.02)]">
            <FileUp className="w-12 h-12 text-mute group-hover:text-amber-brand group-hover:-translate-y-1 transition-all mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t.demo.upload.title}</h3>
            <p className="text-dim text-sm mb-5">{t.demo.upload.subtitle}</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {FILE_TYPES.map((ext) => (
                <span key={ext} className="px-3 py-1 bg-bg-secondary border border-edge rounded-full font-mono text-[11px] text-mute">
                  {ext}
                </span>
              ))}
            </div>
          </div>

          {/* Result preview */}
          <div className="bg-bg-card border border-edge rounded-[14px] overflow-hidden">
            <div className="px-5 py-4 flex items-center justify-between border-b border-edge">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center font-bold text-white text-xs">PDF</div>
                <div>
                  <div className="text-sm font-semibold">rapport-confidentiel.pdf</div>
                  <div className="text-xs text-mute">2.4 MB · 24 pages</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-brand">
                <span className="w-2 h-2 rounded-full bg-amber-brand animate-pulse" />
                {t.demo.result.status}
              </div>
            </div>

            <div>
              {RESULT_ROWS.map((row) => (
                <div key={row.labelKey} className="flex items-center justify-between px-5 py-3 border-b border-edge last:border-b-0 hover:bg-white/[0.02] transition-colors">
                  <span className="font-mono text-[11px] text-mute">{row.labelKey}</span>
                  <span className={`text-sm font-medium text-right max-w-[60%] break-all ${rowClass[row.type]}`}>
                    {row.type === 'sensitive' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />}
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-edge flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-semibold text-red-500">
                <AlertCircle className="w-3 h-3" />
                {t.demo.result.sensitiveCount}
              </div>
              <div className="flex gap-2">
                <button className="px-3.5 py-1.5 bg-bg-secondary border border-edge hover:border-edge-hover hover:bg-bg-card-hover rounded-lg text-xs font-medium text-dim hover:text-cream transition-all cursor-pointer">
                  {t.demo.result.export}
                </button>
                <button className="px-3.5 py-1.5 bg-bg-secondary border border-edge hover:border-edge-hover hover:bg-bg-card-hover rounded-lg text-xs font-medium text-dim hover:text-cream transition-all cursor-pointer">
                  {t.demo.result.clean}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
