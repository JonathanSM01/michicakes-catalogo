import { BRANDS } from '../data/products.js';
import { useReveal } from '../hooks/useMotion.js';
import { Paw, Cookie, Plantain } from './Decor.jsx';

const ITEMS = [
  { key: 'michicakes', href: '#michicakes', n: '01', Motif: Paw },
  { key: 'cookies', href: '#cookies', n: '02', Motif: Cookie },
  { key: 'patacon', href: '#patacon', n: '03', Motif: Plantain },
];

export default function UniverseSelector() {
  const ref = useReveal();
  return (
    <section id="universo" ref={ref} className="section-pad">
      <div className="wrap">
        <div className="reveal grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="index-num">02</span>
          <div>
            <span className="kicker">Elige tu antojo</span>
            <h2 className="mt-3 text-[clamp(2.1rem,5.5vw,3.6rem)]">
              Tres mundos. <span className="italic-accent text-[var(--color-caramel)]">Un solo antojo.</span>
            </h2>
          </div>
        </div>
        <hr className="hairline reveal mt-8" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ITEMS.map(({ key, href, n, Motif }, i) => {
            const b = BRANDS[key];
            return (
              <a
                key={key}
                href={href}
                data-brand={key}
                className="reveal group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-[var(--brand-line)] bg-[var(--brand-bg)] p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] focus-visible:-translate-y-1.5"
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <Motif className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 text-[var(--brand-accent)] opacity-10 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-110 group-hover:-rotate-6" />

                <div className="relative flex items-start justify-between">
                  <span className="font-display text-3xl text-[color-mix(in_srgb,var(--brand-ink)_45%,transparent)]">{n}</span>
                  <span className="text-3xl transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:-translate-y-1 group-hover:rotate-[-8deg]">
                    {b.emoji}
                  </span>
                </div>

                <div className="relative">
                  <p className="script">{b.kind}</p>
                  <h3 className="mt-1 text-2xl text-[var(--brand-ink)]">{b.name}</h3>
                  <p className="mt-2 max-w-[34ch] text-sm text-[color-mix(in_srgb,var(--brand-ink)_74%,transparent)]">
                    {b.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[var(--brand-accent)]">
                    Entrar
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
