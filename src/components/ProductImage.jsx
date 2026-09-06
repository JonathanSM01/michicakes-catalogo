// Imagen de producto. Si product.image existe la usa; si no, dibuja una
// ilustración placeholder on-brand con la MISMA caja/proporción, de modo que
// cambiar a foto real no toca layout ni CSS (brief §56).

const MOTIF = {
  michicakes: (
    <g>
      <path d="M40 118h120l-10 40a18 18 0 0 1-17 13H67a18 18 0 0 1-17-13Z" fill="var(--brand-accent)" />
      <path d="M40 118h120l-6 22H46Z" fill="#fff" opacity="0.55" />
      <path d="M56 118c0-26 20-44 44-44s44 18 44 44Z" fill="var(--brand-soft)" />
      <path
        d="M56 118c8-14 16 8 24-4s14 6 22-6 14 8 22-4 12 10 20 4"
        fill="none"
        stroke="var(--brand-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="100" cy="64" r="7" fill="var(--brand-accent)" />
    </g>
  ),
  cookies: (
    <g>
      <circle cx="100" cy="104" r="52" fill="var(--brand-accent)" />
      <circle cx="100" cy="104" r="52" fill="#000" opacity="0.06" />
      <g fill="var(--brand-ink)">
        <circle cx="86" cy="86" r="7" />
        <circle cx="118" cy="94" r="6" />
        <circle cx="96" cy="118" r="6.5" />
        <circle cx="120" cy="122" r="5" />
        <circle cx="78" cy="110" r="5" />
      </g>
    </g>
  ),
  patacon: (
    <g>
      <path
        d="M60 132c-14-10-16-34 2-44s44-2 60 6 26 6 22 22-24 18-40 20-30 6-44-4Z"
        fill="var(--brand-soft)"
      />
      <path
        d="M72 118c10 8 40 8 58-2"
        fill="none"
        stroke="var(--brand-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path d="M120 66c18 4 30 18 30 34" fill="none" stroke="var(--brand-accent)" strokeWidth="8" strokeLinecap="round" />
    </g>
  ),
};

export default function ProductImage({ product, className = '' }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`h-full w-full ${className}`}
      style={{ background: 'linear-gradient(160deg, var(--brand-bg), color-mix(in srgb, var(--brand-soft) 45%, var(--brand-bg)))' }}
      role="img"
      aria-label={`${product.name} — ilustración referencial`}
    >
      <svg viewBox="0 0 200 180" className="h-full w-full">
        <g opacity="0.9">{MOTIF[product.brand]}</g>
      </svg>
    </div>
  );
}
