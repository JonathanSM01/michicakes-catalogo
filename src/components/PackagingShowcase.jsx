import { useReveal } from '../hooks/useMotion.js';
import { Paw } from './Decor.jsx';

// Mockup conceptual de la caja de Cookies By Shaly (brief §26).
// La caja NO existe físicamente -> se presenta como "Concepto de empaque".
// CSS 3D ligero, sin librerías ni imágenes pesadas.
export default function PackagingShowcase() {
  const ref = useReveal();
  return (
    <div ref={ref} className="grid items-center gap-12 md:grid-cols-2">
      <div className="reveal order-2 md:order-1">
        <span className="inline-block -rotate-2 rounded-sm border border-[var(--brand-ink)] px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[var(--brand-ink)]">
          Concepto de empaque
        </span>
        <h3 className="mt-5 font-display text-[clamp(1.7rem,4vw,2.5rem)] text-[var(--brand-ink)]">
          Una caja pensada para <span className="italic-accent text-[var(--brand-accent)]">regalar antojo</span>
        </h3>
        <ul className="mt-5 space-y-0">
          {[
            'Logo Cookies By Shaly al frente, sobre crema y café.',
            'Patrón de huellas pequeñas y detalles artesanales.',
            'Interior organizado con espacio para varias galletas.',
            'Materiales simples y fabricables, sin sobrecostos.',
          ].map((t) => (
            <li
              key={t}
              className="flex gap-3 border-b border-[var(--brand-line)] py-3 text-[15px] text-[color-mix(in_srgb,var(--brand-ink)_82%,transparent)]"
            >
              <Paw className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs italic text-[color-mix(in_srgb,var(--brand-ink)_58%,transparent)]">
          Render conceptual. El empaque final puede variar.
        </p>
      </div>

      <div className="reveal order-1 grid place-items-center [perspective:1200px] md:order-2" style={{ '--reveal-delay': '120ms' }}>
        <div className="box-anim relative h-56 w-72 [transform-style:preserve-3d]">
          <div className="absolute inset-0 rounded-xl border border-[color-mix(in_srgb,var(--brand-ink)_25%,transparent)] bg-[var(--brand-soft)] shadow-[var(--shadow-soft)] [transform:rotateX(58deg)_translateZ(70px)]">
            <div className="absolute inset-3 rounded-md border border-[color-mix(in_srgb,var(--brand-ink)_20%,transparent)]" />
            <div className="grid h-full place-items-center">
              <div className="text-center">
                <Paw className="mx-auto h-8 w-8 text-[var(--brand-ink)]" />
                <p className="font-display text-lg text-[var(--brand-ink)]">Cookies By Shaly</p>
                <p className="script text-sm">horneado lento</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-24 w-72 rounded-b-xl bg-[var(--brand-accent)]">
            <div className="flex h-full items-center justify-around px-4 opacity-70">
              {Array.from({ length: 4 }).map((_, i) => (
                <Paw key={i} className="h-4 w-4 text-[var(--brand-bg)]" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-24 w-24 origin-left rounded-b-xl bg-[color-mix(in_srgb,var(--brand-accent)_82%,#000)] [transform:rotateY(-90deg)]" />
        </div>
      </div>

      <style>{`
        .box-anim { animation: boxFloat 6s ease-in-out infinite; }
        @keyframes boxFloat {
          0%,100% { transform: rotateY(-22deg) translateY(0); }
          50%     { transform: rotateY(-14deg) translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .box-anim { animation: none; transform: rotateY(-20deg); }
        }
      `}</style>
    </div>
  );
}
