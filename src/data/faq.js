import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';

// Preguntas frecuentes. Las respuestas que dependen de un dato aún sin
// confirmar (pago, cobertura de entrega) remiten a WhatsApp en vez de
// inventar una respuesta — mismo principio que el resto del sitio.
export const FAQ = [
  {
    q: '¿Cómo hago mi pedido?',
    a: 'Recorre el catálogo, elige tu producto y toca "Pedir por WhatsApp". Ahí confirmamos cantidad, fecha y entrega contigo.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: IS_CONFIGURED(SITE_CONFIG.location) ? SITE_CONFIG.location : 'Escríbenos por WhatsApp para confirmar la ubicación.',
  },
  {
    q: '¿Cuál es su horario de atención?',
    a: IS_CONFIGURED(SITE_CONFIG.businessHours) ? SITE_CONFIG.businessHours : 'Escríbenos por WhatsApp para confirmar el horario.',
  },
  {
    q: '¿Con cuánta anticipación debo pedir?',
    a: 'Depende del producto y la cantidad. Cuéntanos por WhatsApp qué necesitas y te confirmamos el tiempo de preparación.',
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Escríbenos por WhatsApp para confirmar el método de pago disponible en tu pedido.',
  },
  {
    q: '¿Hacen entregas a domicilio?',
    a: 'Consulta por WhatsApp si tu zona está dentro de la cobertura de entrega.',
  },
  {
    q: '¿Las fotos del catálogo son reales?',
    a: 'Por ahora usamos ilustraciones referenciales mientras preparamos las fotos reales de cada producto. Cuando estén listas, cada producto lo indica en el catálogo.',
  },
  ...(IS_CONFIGURED(SITE_CONFIG.allergenNote)
    ? [{ q: '¿Manejan información de alérgenos?', a: SITE_CONFIG.allergenNote }]
    : []),
];
