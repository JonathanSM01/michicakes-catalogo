import { useEffect, useRef } from 'react';
import ProductImage from './ProductImage.jsx';
import { BRANDS, formatPrice } from '../data/products.js';
import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';
import { whatsappUrl, productMessage } from '../lib/whatsapp.js';
import { shareProduct } from '../lib/share.js';
import { ShareIcon } from './SocialIcons.jsx';

export default function ProductModal({ product, onClose }) {
  const panelRef = useRef(null);
  const lastActive = useRef(null);

  useEffect(() => {
    lastActive.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    panel?.querySelector('[data-autofocus]')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panel) {
        const f = panel.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lastActive.current?.focus?.();
    };
  }, [onClose]);

  if (!product) return null;
  const brand = BRANDS[product.brand];
  const wa = whatsappUrl(productMessage(product, brand.label));
  const priceLabel = formatPrice(product.price);
  const comingSoon = product.status === 'coming-soon' || !product.available;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pm-title"
      data-brand={product.brand}
    >
      <div
        className="absolute inset-0 bg-[rgba(28,16,10,0.58)] backdrop-blur-[3px] motion-safe:animate-[fadeIn_.2s_ease]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="relative m-0 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[20px] bg-[var(--brand-bg)] shadow-2xl motion-safe:animate-[sheetUp_.3s_var(--ease-out-soft)] sm:m-4 sm:rounded-[18px]"
      >
        <button
          type="button"
          data-autofocus
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-[var(--color-cream-hi)] text-[var(--brand-ink)] shadow-sm transition hover:rotate-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="grid gap-0 overflow-y-auto sm:grid-cols-[1.05fr_1fr]">
          <div className="aspect-[4/3] w-full sm:self-start">
            <ProductImage product={product} />
          </div>

          <div className="flex flex-col gap-3 p-6 sm:p-9">
            <span className="kicker">{brand.label}</span>
            <h2 id="pm-title" className="text-[clamp(1.9rem,5vw,2.6rem)] text-[var(--brand-ink)]">
              {product.name}
            </h2>
            <p className="text-[15px] leading-relaxed text-[color-mix(in_srgb,var(--brand-ink)_82%,transparent)]">
              {product.description}
            </p>

            <dl className="mt-2 divide-y divide-[var(--brand-line)] border-y border-[var(--brand-line)] text-sm">
              {[
                ['Presentación', product.presentation],
                ['Precio', priceLabel],
                ['Disponibilidad', comingSoon ? 'Próximamente' : 'Disponible para pedido'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--brand-ink)_60%,transparent)]">
                    {k}
                  </dt>
                  <dd className="text-right text-[color-mix(in_srgb,var(--brand-ink)_88%,transparent)]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-3 flex gap-2">
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full">
                  <WhatsAppGlyph /> Pedir por WhatsApp
                </a>
              ) : (
                <p className="rounded-xl bg-[color-mix(in_srgb,var(--brand-ink)_8%,transparent)] px-4 py-3 text-sm text-[var(--brand-ink)]">
                  Pedidos por WhatsApp:{' '}
                  <strong>configura el número en <code>src/config/site.js</code></strong> para activar este botón.
                </p>
              )}
              <button
                type="button"
                onClick={() => shareProduct(product, brand.label)}
                aria-label={`Compartir ${product.name}`}
                title="Compartir"
                className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-full border border-[var(--brand-line)] text-[var(--brand-ink)] transition-colors hover:bg-[color-mix(in_srgb,var(--brand-ink)_8%,transparent)]"
              >
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>

            {product.imageType === 'referential' && (
              <p className="text-xs italic text-[color-mix(in_srgb,var(--brand-ink)_58%,transparent)]">
                Imagen referencial* — la fotografía definitiva puede variar.
              </p>
            )}
            {IS_CONFIGURED(SITE_CONFIG.allergenNote) && (
              <p className="flex gap-2 text-xs text-[color-mix(in_srgb,var(--brand-ink)_62%,transparent)]">
                <svg viewBox="0 0 24 24" className="mt-px h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8h.01M11 12h1v4h1" />
                </svg>
                {SITE_CONFIG.allergenNote}
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes sheetUp { from { transform: translateY(26px); opacity: .5 } to { transform: none; opacity: 1 } }
      `}</style>
    </div>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.3.6-.4.4c-.2.2-.3.4-.1.6.2.4.9 1.4 1.9 2.3 1.2 1.1 2.2 1.4 2.5 1.5.2.1.4.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.8-.1 1.5Z" />
    </svg>
  );
}
