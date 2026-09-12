import { useState } from 'react';
import { useReveal } from '../hooks/useMotion.js';
import { DONATIONS } from '../data/donations.js';
import { Heart } from './Decor.jsx';

export default function Donations() {
  const ref = useReveal();
  const [copiedId, setCopiedId] = useState(null);

  const copy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId((v) => (v === item.id ? null : v)), 1800);
    } catch {
      // Portapapeles no disponible (ej. sin HTTPS) — el número ya está visible en la tarjeta.
    }
  };

  return (
    <section id="apoyanos" ref={ref} className="bg-[var(--color-cream)] py-16 sm:py-20">
      <div className="wrap-tight">
        <span className="kicker reveal">Apóyanos</span>
        <h2 className="reveal mt-3 max-w-xl text-[clamp(1.6rem,4vw,2.5rem)]">
          Ayúdanos a <span className="italic-accent text-[var(--color-caramel)]">crecer</span>.
        </h2>
        <p className="reveal mt-3 max-w-lg text-sm text-[color-mix(in_srgb,var(--color-coffee)_75%,transparent)]">
          Si quieres apoyar el crecimiento de MichiCAKES en Riobamba más allá de un pedido, puedes hacerlo por
          cualquiera de estos medios. Cada aporte ayuda de verdad — ¡gracias!
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DONATIONS.map((item, i) => (
            <li
              key={item.id}
              className="reveal flex items-center justify-between gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream-hi)] px-4 py-3.5"
              style={{ '--reveal-delay': `${Math.min(i, 6) * 60}ms` }}
            >
              <div className="min-w-0">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[var(--color-caramel)]">{item.label}</p>
                <p className="mt-0.5 truncate text-sm font-semibold text-[var(--color-coffee)]">{item.value}</p>
              </div>

              {item.type === 'link' ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-[var(--color-coffee)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--color-cream-hi)] transition-opacity hover:opacity-85"
                >
                  Donar
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => copy(item)}
                  className="shrink-0 rounded-full border border-[var(--color-line)] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--color-coffee)] transition-colors hover:bg-[var(--color-coffee)] hover:text-[var(--color-cream-hi)]"
                >
                  {copiedId === item.id ? '¡Copiado!' : 'Copiar'}
                </button>
              )}
            </li>
          ))}
        </ul>

        <p className="reveal mt-6 flex items-center gap-2 text-xs text-[color-mix(in_srgb,var(--color-coffee)_60%,transparent)]">
          <Heart aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-caramel)]" />
          Las donaciones son voluntarias e independientes del pago de tus pedidos.
        </p>
      </div>
    </section>
  );
}
