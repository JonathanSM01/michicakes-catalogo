import { useEffect, useState } from 'react';
import { whatsappUrl, generalMessage } from '../lib/whatsapp.js';
import { Paw } from './Decor.jsx';

const LINKS = [
  { href: '#inicio', id: 'inicio', label: 'Inicio' },
  { href: '#universo', id: 'universo', label: 'Universo' },
  { href: '#michicakes', id: 'michicakes', label: 'Dulce' },
  { href: '#cookies', id: 'cookies', label: 'Cookies' },
  { href: '#patacon', id: 'patacon', label: 'Don Patacón' },
  { href: '#resenas', id: 'resenas', label: 'Reseñas' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
  { href: '#apoyanos', id: 'apoyanos', label: 'Apóyanos' },
  { href: '#pedido', id: 'pedido', label: 'Pedido' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const wa = whatsappUrl(generalMessage());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Scrollspy — solo resalta la sección visible; no cambia la navegación.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-[color-mix(in_srgb,var(--color-cream)_88%,transparent)] shadow-[0_1px_0_var(--color-line)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between py-3.5">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-coffee)] text-[var(--color-cream-hi)]">
            <Paw className="h-5 w-5" />
          </span>
          <span className="font-display text-lg tracking-tight text-[var(--color-coffee)]">
            Michi<span className="text-[var(--color-caramel)]">CAKES</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative py-1 text-[0.8rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                  active === l.id
                    ? 'text-[var(--color-coffee)]'
                    : 'text-[color-mix(in_srgb,var(--color-coffee)_55%,transparent)] hover:text-[var(--color-coffee)]'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[var(--color-caramel)] transition-all duration-300 ${
                    active === l.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={wa || '#pedido'}
            {...(wa ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="btn btn-primary !min-h-0 !px-4 !py-2.5 !text-[0.72rem]"
          >
            Pedir
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-[var(--color-coffee)] md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-cream)] md:hidden">
          <ul className="wrap flex flex-col py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-base font-semibold text-[var(--color-coffee)]"
                >
                  {l.label}
                  <span className="text-[var(--color-caramel)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
