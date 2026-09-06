import { useReveal } from '../hooks/useMotion.js';

// Puente narrativo antes del CTA (brief §44 / §60): hace explícito el flujo
// Descubrir → Elegir → Pedir. No es destino de navegación, solo storytelling.
const STEPS = [
  { n: '01', t: 'Explora', d: 'Recorre el catálogo de las tres marcas y encuentra tu antojo.' },
  { n: '02', t: 'Elige', d: 'Abre el producto, revisa presentación y disponibilidad.' },
  { n: '03', t: 'Pide', d: 'Toca “Pedir por WhatsApp” y confirmamos contigo.' },
];

export default function HowToOrder() {
  const ref = useReveal();
  return (
    <section ref={ref} className="bg-[var(--color-cream-hi)] py-16 sm:py-20">
      <div className="wrap">
        <span className="kicker reveal">Cómo pedir</span>
        <h2 className="reveal mt-3 max-w-xl text-[clamp(1.6rem,4vw,2.5rem)]">
          Del antojo al pedido en <span className="italic-accent text-[var(--color-caramel)]">tres pasos</span>.
        </h2>

        <ol className="mt-10 grid gap-px sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal border-t-2 border-[var(--color-coffee)] pt-4 sm:pr-6"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="font-display text-3xl text-[color-mix(in_srgb,var(--color-coffee)_45%,transparent)]">
                {s.n}
              </span>
              <h3 className="mt-1 text-xl">{s.t}</h3>
              <p className="mt-1.5 text-sm text-[color-mix(in_srgb,var(--color-coffee)_75%,transparent)]">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
