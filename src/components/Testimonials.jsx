import { useReveal } from '../hooks/useMotion.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { whatsappUrl, generalMessage } from '../lib/whatsapp.js';
import { Heart } from './Decor.jsx';

export default function Testimonials() {
  const ref = useReveal();
  const wa = whatsappUrl(generalMessage());

  return (
    <section id="resenas" ref={ref} className="bg-[var(--color-cream-hi)] py-16 sm:py-20">
      <div className="wrap">
        <span className="kicker reveal">Lo que dicen</span>
        <h2 className="reveal mt-3 max-w-xl text-[clamp(1.6rem,4vw,2.5rem)]">
          Antojos <span className="italic-accent text-[var(--color-caramel)]">cumplidos</span>.
        </h2>

        {TESTIMONIALS.length === 0 ? (
          <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-2xl border border-dashed border-[var(--color-line)] px-6 py-10 sm:items-center sm:text-center">
            <Heart aria-hidden="true" className="h-9 w-9 text-[var(--color-caramel)] opacity-70" />
            <p className="max-w-md text-[color-mix(in_srgb,var(--color-coffee)_75%,transparent)]">
              Todavía no publicamos reseñas — MichiCAKES recién está arrancando en Riobamba. ¿Ya nos probaste? Cuéntanos cómo te fue.
            </p>
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Cuéntanos tu experiencia
              </a>
            )}
          </div>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={t.id}
                className="reveal flex flex-col gap-3 rounded-2xl bg-[var(--color-cream)] p-6 shadow-[var(--shadow-soft)]"
                style={{ '--reveal-delay': `${Math.min(i, 6) * 70}ms` }}
              >
                <span className="font-display text-3xl italic text-[var(--color-caramel)]">&ldquo;</span>
                <p className="text-sm leading-relaxed text-[var(--color-coffee)]">{t.quote}</p>
                <p className="mt-auto text-[0.8rem] font-bold uppercase tracking-[0.08em] text-[color-mix(in_srgb,var(--color-coffee)_65%,transparent)]">
                  {t.name}{t.product ? ` · ${t.product}` : ''}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
