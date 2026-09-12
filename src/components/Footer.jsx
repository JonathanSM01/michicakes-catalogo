import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';
import { Paw } from './Decor.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cream-deep)] pt-16 pb-12">
      <div className="wrap">
        <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] text-[var(--color-coffee)]">
          Dulce, salado y todo aquello que <span className="italic-accent text-[var(--color-caramel)]">se te antoja.</span>
        </p>
        <hr className="hairline mt-8" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-coffee)] text-[var(--color-cream-hi)]">
                <Paw className="h-5 w-5" />
              </span>
              <span className="font-display text-xl text-[var(--color-coffee)]">
                Michi<span className="text-[var(--color-caramel)]">CAKES</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-[color-mix(in_srgb,var(--color-coffee)_72%,transparent)]">
              Un universo de sabores: MichiCAKES, Cookies By Shaly y Don Patacón.
            </p>
          </div>

          <nav aria-label="Marcas" className="text-sm">
            <h3 className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[var(--color-caramel)]">Marcas</h3>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:underline" href="#michicakes">MichiCAKES · Dulce</a></li>
              <li><a className="hover:underline" href="#cookies">Cookies By Shaly</a></li>
              <li><a className="hover:underline" href="#patacon">Don Patacón · Salado</a></li>
            </ul>
          </nav>

          <div className="text-sm">
            <h3 className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[var(--color-caramel)]">Contacto</h3>
            <SocialLinks className="mt-3" />
            <ul className="mt-3 space-y-2">
              <li>
                {IS_CONFIGURED(SITE_CONFIG.email) ? (
                  <a className="hover:underline" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                ) : (
                  <span className="text-[color-mix(in_srgb,var(--color-coffee)_52%,transparent)]">Email · por configurar</span>
                )}
              </li>
              <li>{IS_CONFIGURED(SITE_CONFIG.location) ? SITE_CONFIG.location : 'Ubicación · por configurar'}</li>
              <li>{IS_CONFIGURED(SITE_CONFIG.businessHours) ? SITE_CONFIG.businessHours : 'Horario · por configurar'}</li>
            </ul>
          </div>
        </div>

        {IS_CONFIGURED(SITE_CONFIG.allergenNote) && (
          <p className="mt-10 text-xs text-[color-mix(in_srgb,var(--color-coffee)_60%,transparent)]">
            {SITE_CONFIG.allergenNote}
          </p>
        )}

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-center text-xs text-[color-mix(in_srgb,var(--color-coffee)_58%,transparent)] sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} MichiCAKES · Un universo de sabores.</p>
          <p>Imágenes referenciales*.</p>
        </div>
      </div>
    </footer>
  );
}
