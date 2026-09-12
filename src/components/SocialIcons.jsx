// Glifos de plataformas — trazo simplificado, currentColor, mismo peso visual
// que las ilustraciones de Decor.jsx (brief §11 / §48).

const S = ({ children, className = '', ...rest }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...rest}>
    {children}
  </svg>
);

export function WhatsAppIcon(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Z"
      />
      <path
        fill="currentColor"
        d="M9.1 7.3c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.9-.9c-.2-.1-.4-.1-.6.1l-.9 1c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.1 0-.3 0-.4l-.9-2.4Z"
      />
    </S>
  );
}

export function InstagramIcon(p) {
  return (
    <S {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </S>
  );
}

export function ShareIcon(p) {
  return (
    <S {...p}>
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="2.4" />
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="18" cy="19" r="2.4" />
        <path d="M8.1 10.8 15.9 6.2M8.1 13.2l7.8 4.6" />
      </g>
    </S>
  );
}

export function TikTokIcon(p) {
  return (
    <S {...p}>
      <path
        fill="currentColor"
        d="M14 2h2.6c.3 1.9 1.6 3.5 3.4 3.9v2.6c-1.3 0-2.5-.4-3.5-1.1v6.4a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 2 2.6V2Z"
      />
    </S>
  );
}
