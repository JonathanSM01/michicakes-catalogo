import { useReveal } from '../hooks/useMotion.js';
import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';
import { whatsappUrl, generalMessage } from '../lib/whatsapp.js';
import { Paw, Sparkle } from './Decor.jsx';

export default function OrderCTA() {
  const ref = useReveal();
  const wa = whatsappUrl(generalMessage());

  return (
    <section
      id="pedido"
      ref={ref}
      className="section-pad relative overflow-hidden bg-[var(--color-coffee)] text-[var(--color-cream-hi)]"
    >
      <div
        aria-hidden="true"
        className="torn-top absolute inset-x-0 -top-5 h-6 bg-[var(--color-coffee)]"
      />
      <Paw aria-hidden="true" className="pointer-events-none absolute -left-10 top-10 h-40 w-40 text-[var(--color-caramel)] opacity-[0.12]" />
      <Sparkle aria-hidden="true" className="pointer-events-none absolute right-[10%] top-16 h-8 w-8 text-[var(--color-gold)] opacity-60" />

      <div className="wrap-tight reveal relative text-center">
        <span className="kicker !text-[var(--color-caramel)]">Haz tu pedido</span>
        <h2 className="mt-4 text-[clamp(2.4rem,7vw,4.5rem)] text-[var(--color-cream-hi)]">
          ¿Se te <span className="italic-accent text-[var(--color-caramel)]">antojó?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[color-mix(in_srgb,var(--color-cream-hi)_80%,transparent)]">
          {SITE_CONFIG.tagline} Escríbenos y armamos tu pedido.
        </p>

        <div className="mt-8">
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              Haz tu pedido
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          ) : (
            <p className="mx-auto max-w-md rounded-xl bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm">
              Configura <code>whatsappNumber</code> en <code>src/config/site.js</code> para activar el pedido por WhatsApp.
            </p>
          )}
        </div>

        <dl className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-[rgba(255,255,255,0.14)] text-sm sm:grid-cols-3">
          <Info label="WhatsApp" value={IS_CONFIGURED(SITE_CONFIG.whatsappNumber) ? SITE_CONFIG.whatsappNumber : 'Por configurar'} />
          <Info label="Instagram" value={IS_CONFIGURED(SITE_CONFIG.instagramHandle) ? `@${SITE_CONFIG.instagramHandle}` : 'Por configurar'} />
          <Info label="Horario" value={IS_CONFIGURED(SITE_CONFIG.businessHours) ? SITE_CONFIG.businessHours : 'Por configurar'} />
        </dl>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] px-4 py-4">
      <dt className="script text-base !text-[var(--color-caramel)]">{label}</dt>
      <dd className="mt-1 font-semibold">{value}</dd>
    </div>
  );
}
