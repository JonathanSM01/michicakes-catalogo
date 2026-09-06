import { useEffect, useRef, useState } from 'react';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

// Añade .is-in a los hijos con .reveal cuando entran en viewport.
// Failsafe: si IntersectionObserver no existe, está throttled o algo falla,
// se revela todo tras un tiempo corto — el contenido nunca queda invisible.
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.matches('.reveal') ? [root] : Array.from(root.querySelectorAll('.reveal'));
    if (!items.length) return;

    const revealAll = () => items.forEach((el) => el.classList.add('is-in'));

    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    let observerRan = false;
    const io = new IntersectionObserver(
      (entries) => {
        observerRan = true;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach((el) => io.observe(el));

    // Red de seguridad: si el observer nunca se ejecuta (no soportado,
    // throttled, error), se revela todo para no perder contenido.
    // Si funciona, esto no hace nada y la animación al hacer scroll se conserva.
    const failsafe = setTimeout(() => {
      if (!observerRan) {
        revealAll();
        io.disconnect();
      }
    }, 1500);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);
  return ref;
}
