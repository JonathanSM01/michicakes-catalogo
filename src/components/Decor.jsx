// Ilustraciones decorativas — inspiradas en los logos: huella felina, hojas,
// corazones, estrellas, utensilios, ingredientes (brief §11 / §48).
// SVG inline, sin peso, currentColor.

const S = ({ children, vb = '0 0 64 64', className = '', ...rest }) => (
  <svg viewBox={vb} className={className} aria-hidden="true" {...rest}>
    {children}
  </svg>
);

export function Paw(p) {
  return (
    <S {...p}>
      <g fill="currentColor">
        <ellipse cx="32" cy="41" rx="15" ry="12" />
        <ellipse cx="15" cy="26" rx="6.5" ry="8.5" />
        <ellipse cx="49" cy="26" rx="6.5" ry="8.5" />
        <ellipse cx="24" cy="15" rx="6" ry="8" />
        <ellipse cx="40" cy="15" rx="6" ry="8" />
      </g>
    </S>
  );
}

export function Leaf(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M52 8C24 10 10 28 10 48c0 3 1 6 3 8 2-16 12-30 30-38-14 10-22 24-24 40 22 0 40-18 40-42 0-3-1-6-7-8Z"
      />
    </S>
  );
}

export function Sparkle(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M32 4c2 14 10 22 24 24-14 2-22 10-24 24-2-14-10-22-24-24 14-2 22-10 24-24Z"
      />
    </S>
  );
}

export function Swirl({ className = '', ...rest }) {
  return (
    <S vb="0 0 120 40" className={className} {...rest}>
      <path
        d="M2 20c14-18 30 18 44 0S74 2 88 20s28 2 30-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </S>
  );
}

export function Heart(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M32 56S6 40 6 22C6 12 14 6 22 6c6 0 10 4 10 4s4-4 10-4c8 0 16 6 16 16 0 18-26 34-26 34Z"
      />
    </S>
  );
}

export function Whisk(p) {
  return (
    <S {...p}>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M32 6v20" />
        <path d="M32 26c-9 0-14 8-14 18 0 8 6 14 14 14s14-6 14-14c0-10-5-18-14-18Z" />
        <path d="M24 28c-3 8-3 20 3 28M40 28c3 8 3 20-3 28M18 44h28" />
      </g>
    </S>
  );
}

export function Cookie(p) {
  return (
    <S {...p}>
      <circle cx="32" cy="32" r="24" fill="currentColor" />
      <g fill="rgba(0,0,0,0.25)">
        <circle cx="24" cy="24" r="3.5" />
        <circle cx="40" cy="28" r="3" />
        <circle cx="30" cy="40" r="3.2" />
        <circle cx="41" cy="41" r="2.5" />
        <circle cx="20" cy="35" r="2.5" />
      </g>
    </S>
  );
}

export function Plantain(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M14 40c-6-14 2-30 10-30 3 0 4 3 3 6-4 12 2 22 14 24 3 1 4 4 1 6-8 6-22 6-28-6Z"
      />
    </S>
  );
}

export function Bean({ className = '', ...rest }) {
  return (
    <S vb="0 0 48 48" className={className} {...rest}>
      <ellipse cx="24" cy="24" rx="14" ry="20" fill="currentColor" transform="rotate(28 24 24)" />
      <path d="M18 8c6 8 6 24 0 32" fill="none" stroke="rgba(0,0,0,0.28)" strokeWidth="2.5" transform="rotate(28 24 24)" />
    </S>
  );
}
