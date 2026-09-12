// Compartir un producto: usa el Web Share API nativo cuando existe (móvil,
// la mayoría de navegadores modernos) y cae a un link de WhatsApp si no.
export function shareProduct(product, brandLabel) {
  const url = `${window.location.origin}${window.location.pathname}#${product.brand}`;
  const text = `Mira ${product.name} de ${brandLabel} en MichiCAKES 🍰`;

  if (navigator.share) {
    navigator.share({ title: product.name, text, url }).catch(() => {});
    return;
  }
  const wa = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
  window.open(wa, '_blank', 'noopener,noreferrer');
}
