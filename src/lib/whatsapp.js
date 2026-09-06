import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';

// Genera el enlace de WhatsApp para un producto o un mensaje libre (brief §33).
// Si el número aún no está configurado devuelve null: la UI muestra un
// fallback honesto en vez de simular que funciona (brief §18 reglas).
export function whatsappUrl(message) {
  if (!IS_CONFIGURED(SITE_CONFIG.whatsappNumber)) return null;
  const num = SITE_CONFIG.whatsappNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function productMessage(product, brandLabel) {
  return `Hola, quisiera información sobre ${product.name} de ${brandLabel}.`;
}

export function generalMessage() {
  return `Hola ${SITE_CONFIG.brandName}, me gustaría hacer un pedido.`;
}
