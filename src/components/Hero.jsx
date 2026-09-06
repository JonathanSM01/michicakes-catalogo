import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { usePrefersReducedMotion } from '../hooks/useMotion.js';
import { SITE_CONFIG } from '../config/site.js';
import { BRANDS } from '../data/products.js';
import { Paw, Sparkle, Leaf, Whisk, Cookie, Plantain, Bean } from './Decor.jsx';

const WORLDS = [
  { key: 'michicakes', href: '#michicakes', n: '01', label: 'Dulce', name: 'MichiCAKES' },
  { key: 'cookies', href: '#cookies', n: '02', label: 'Galletas', name: 'Cookies By Shaly' },
  { key: 'patacon', href: '#patacon', n: '03', label: 'Salado', name: 'Don Patacón' },
];

export default function Hero() {
  const rootRef = useRef(null);
  const played = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const settle = () => {
      root.querySelectorAll('[data-anim]').forEach((el) => {
        el.style.transform = 'none';
        el.style.opacity = el.dataset.anim === 'decor' ? '' : '1';
      });
    };

    if (reduced || played.current) {
      settle();
      return;
    }
    played.current = true;

    // Entrada cinematográfica pero rápida — ~1200ms (brief §14)
    const tl = anime.timeline({ easing: 'cubicBezier(0.22,1,0.36,1)', complete: settle });
    tl.add({ targets: root.querySelector('[data-anim="kicker"]'), opacity: [0, 1], translateY: [12, 0], duration: 420 })
      .add({ targets: root.querySelectorAll('[data-anim="title-line"]'), opacity: [0, 1], translateY: [34, 0], duration: 640, delay: anime.stagger(95) }, '-=160')
      .add({ targets: root.querySelector('[data-anim="sub"]'), opacity: [0, 1], translateY: [16, 0], duration: 460 }, '-=340')
      .add({ targets: root.querySelectorAll('[data-anim="cta"]'), opacity: [0, 1], translateY: [14, 0], duration: 420, delay: anime.stagger(80) }, '-=280')
      .add({ targets: root.querySelectorAll('[data-anim="world"]'), opacity: [0, 1], translateY: [18, 0], duration: 420, delay: anime.stagger(70) }, '-=260')
      .add({ targets: root.querySelectorAll('[data-anim="decor"]'), opacity: [0, 1], scale: [0.8, 1], duration: 620, delay: anime.stagger(60) }, '-=760');
  }, [reduced]);

  return (
    <section id="inicio" ref={rootRef} className="relative overflow-hidden">
      {/* Composición de motivos ilustrados — dispersos, sin llenar (brief §11) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Paw data-anim="decor" className="absolute -left-6 top-[24%] h-20 w-20 text-[var(--color-caramel)] opacity-20 sm:h-24 sm:w-24" />
        <Whisk data-anim="decor" className="absolute right-[6%] top-[14%] hidden h-16 w-16 text-[var(--color-coffee)] opacity-20 sm:block" />
        <Sparkle data-anim="decor" className="absolute right-[10%] top-[26%] h-7 w-7 text-[var(--color-gold)] opacity-60 sm:right-[22%]" />
        <Cookie data-anim="decor" className="absolute right-[4%] top-[48%] hidden h-14 w-14 text-[var(--color-cookies-accent)] opacity-20 sm:block" />
        <Leaf data-anim="decor" className="absolute left-[8%] bottom-[14%] hidden h-16 w-16 text-[var(--color-patacon-accent)] opacity-25 sm:block" />
        <Plantain data-anim="decor" className="absolute right-[12%] bottom-[12%] h-14 w-14 text-[var(--color-patacon-soft)] opacity-35 sm:h-16 sm:w-16" />
        <Bean data-anim="decor" className="absolute left-[30%] top-[12%] hidden h-7 w-7 text-[var(--color-coffee)] opacity-20 sm:block" />
      </div>

      <div className="wrap relative flex min-h-[90svh] flex-col justify-center pt-24 pb-12">
        <p data-anim="kicker" className="kicker" style={{ opacity: 0 }}>
          Catálogo · {SITE_CONFIG.brandName}
        </p>

        <h1 className="mt-5 text-[clamp(2.9rem,10vw,7rem)] font-normal leading-[0.98] tracking-[-0.02em]">
          <span data-anim="title-line" className="block" style={{ opacity: 0 }}>
            Un universo
          </span>
          <span data-anim="title-line" className="block italic-accent text-[var(--color-caramel)]" style={{ opacity: 0 }}>
            de sabores
          </span>
        </h1>

        <p
          data-anim="sub"
          className="mt-7 max-w-lg text-lg text-[color-mix(in_srgb,var(--color-coffee)_82%,transparent)]"
          style={{ opacity: 0 }}
        >
          {SITE_CONFIG.tagline} Tres marcas artesanales bajo un mismo techo —
          repostería, galletas y sabor de la costa.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a data-anim="cta" href="#universo" className="btn btn-primary" style={{ opacity: 0 }}>
            Explorar catálogo
            <Arrow />
          </a>
          <a data-anim="cta" href="#pedido" className="btn btn-ghost" style={{ opacity: 0 }}>
            Quiero hacer un pedido
          </a>
        </div>

        {/* Tira de los tres mundos — anticipo navegable */}
        <div className="mt-11 border-t border-[var(--color-line)] pt-5">
          <ul className="grid gap-px sm:grid-cols-3">
            {WORLDS.map((w) => (
              <li key={w.key} data-anim="world" style={{ opacity: 0 }}>
                <a
                  href={w.href}
                  data-brand={w.key}
                  className="group flex items-baseline gap-3 py-2 sm:flex-col sm:items-start sm:gap-1"
                >
                  <span className="font-display text-2xl font-normal text-[var(--brand-accent)]">{w.n}</span>
                  <span className="flex flex-col">
                    <span className="script text-base">{w.label}</span>
                    <span className="font-display text-lg text-[var(--color-coffee)] transition-colors group-hover:text-[var(--brand-accent)]">
                      {w.name}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
