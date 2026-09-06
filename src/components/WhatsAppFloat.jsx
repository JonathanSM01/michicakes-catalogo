import { useEffect, useState } from 'react';
import { whatsappUrl, generalMessage } from '../lib/whatsapp.js';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const wa = whatsappUrl(generalMessage());

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = wa || '#pedido';
  const external = Boolean(wa);

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label="Pedir por WhatsApp"
      className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_34px_-8px_rgba(37,211,102,0.65)] ring-2 ring-white/40 transition-all duration-300 hover:scale-[1.03] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.3.6-.4.4c-.2.2-.3.4-.1.6.2.4.9 1.4 1.9 2.3 1.2 1.1 2.2 1.4 2.5 1.5.2.1.4.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.8-.1 1.5Z" />
      </svg>
      <span className="hidden sm:inline">Pedir por WhatsApp</span>
      <span className="sm:hidden">Pedir</span>
    </a>
  );
}
