import ProductImage from './ProductImage.jsx';
import { formatPrice, BRANDS } from '../data/products.js';
import { ShareIcon } from './SocialIcons.jsx';
import { shareProduct } from '../lib/share.js';

export default function ProductCard({ product, onOpen, index = 0 }) {
  const priceLabel = formatPrice(product.price);
  const comingSoon = product.status === 'coming-soon' || !product.available;

  return (
    <article
      className="reveal group flex flex-col"
      style={{ '--reveal-delay': `${Math.min(index, 6) * 70}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(product)}
        className={`mat relative block w-full overflow-hidden transition-all duration-300 ease-[var(--ease-out-soft)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-soft)] ${
          product.featured ? 'ring-1 ring-[var(--brand-accent)]' : ''
        }`}
        aria-label={`Ver detalle de ${product.name}`}
      >
        <span className="block aspect-[4/3] w-full overflow-hidden rounded-[6px]">
          <ProductImage
            product={product}
            className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
          />
        </span>
        {comingSoon && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--brand-ink)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[var(--brand-bg)]">
            Próximamente
          </span>
        )}
        {product.featured && !comingSoon && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-white">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.9 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
            </svg>
            Favorito
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col px-1 pt-4">
        <h3 className="font-display text-xl text-[var(--brand-ink)]">{product.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--brand-ink)_74%,transparent)]">
          {product.description}
        </p>

        {product.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 3).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        )}

        <hr className="hairline mt-4" />
        <dl className="mt-3 grid grid-cols-2 gap-2 text-[0.8rem] text-[color-mix(in_srgb,var(--brand-ink)_64%,transparent)]">
          <div>
            <dt className="font-bold uppercase tracking-[0.1em] text-[0.62rem]">Presentación</dt>
            <dd className="mt-0.5">{product.presentation}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-[0.1em] text-[0.62rem]">Precio</dt>
            <dd className="mt-0.5">{priceLabel}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-4">
          <button type="button" onClick={() => onOpen(product)} className="link-arrow min-h-[44px] text-[var(--brand-ink)]">
            Ver detalle
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {product.imageType === 'referential' && (
              <span className="text-[11px] italic text-[color-mix(in_srgb,var(--brand-ink)_52%,transparent)]">
                Imagen referencial*
              </span>
            )}
            <button
              type="button"
              onClick={() => shareProduct(product, BRANDS[product.brand].label)}
              aria-label={`Compartir ${product.name}`}
              title="Compartir"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[var(--brand-ink)] transition-colors hover:bg-[color-mix(in_srgb,var(--brand-ink)_8%,transparent)]"
            >
              <ShareIcon className="h-[1.05rem] w-[1.05rem]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
