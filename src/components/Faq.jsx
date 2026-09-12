import { useReveal } from '../hooks/useMotion.js';
import { FAQ } from '../data/faq.js';

export default function Faq() {
  const ref = useReveal();
  return (
    <section id="faq" ref={ref} className="bg-[var(--color-cream)] py-16 sm:py-20">
      <div className="wrap-tight">
        <span className="kicker reveal">Preguntas frecuentes</span>
        <h2 className="reveal mt-3 max-w-xl text-[clamp(1.6rem,4vw,2.5rem)]">
          Resolvamos tus <span className="italic-accent text-[var(--color-caramel)]">dudas</span>.
        </h2>

        <div className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {FAQ.map((item, i) => (
            <details key={item.q} className="reveal group py-4" style={{ '--reveal-delay': `${Math.min(i, 6) * 60}ms` }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[var(--color-coffee)]">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[var(--color-caramel)] transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-coffee)_75%,transparent)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
