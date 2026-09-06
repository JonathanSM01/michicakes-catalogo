import { useReveal } from '../hooks/useMotion.js';

// Shell de sección de marca. Aplica el tema (data-brand), un borde de papel
// rasgado que transiciona desde la sección anterior (brief §46) y una cabecera
// editorial con numeral impreso (brief §43). El contenido de cada marca se pasa
// como children para variar el layout (§62).
export default function BrandSection({ id, brand, index, eyebrow, title, titleAccent, intro, children, decor }) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      data-brand={brand}
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: 'var(--brand-bg)' }}
    >
      {/* Rasgado de papel sobre la sección anterior */}
      <div
        aria-hidden="true"
        className="torn-top absolute inset-x-0 -top-5 h-6"
        style={{ backgroundColor: 'var(--brand-bg)' }}
      />

      {decor}

      <div className="wrap relative">
        <header className="reveal grid gap-x-6 gap-y-4 md:grid-cols-[auto_1fr] md:items-start">
          <span className="index-num md:pt-1">{index}</span>
          <div className="max-w-2xl">
            <span className="kicker">{eyebrow}</span>
            <h2 className="mt-3 text-[clamp(2.1rem,6vw,3.75rem)] text-[var(--brand-ink)]">
              {title}{' '}
              {titleAccent && (
                <span className="italic-accent text-[var(--brand-accent)]">{titleAccent}</span>
              )}
            </h2>
            {intro && (
              <p className="mt-5 max-w-xl border-l-2 border-[var(--brand-accent)] pl-4 text-lg leading-relaxed text-[color-mix(in_srgb,var(--brand-ink)_80%,transparent)]">
                {intro}
              </p>
            )}
          </div>
        </header>
        <hr className="hairline reveal mt-8" />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
