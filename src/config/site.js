// ============================================================
// CONFIGURACIÓN CENTRAL — brief §17 / §33 / §58
// Todo dato comercial que cambiará vive AQUÍ, no repartido por la UI.
// Reemplaza los valores marcados como CONFIGURAR cuando existan.
// ============================================================

export const SITE_CONFIG = {
  brandName: 'MichiCAKES',
  concept: 'Un universo de sabores',
  tagline: 'Dulce, salado y todo aquello que se te antoja.',

  // WhatsApp: solo dígitos con código de país, sin + ni espacios. Ej: '5939XXXXXXXX'
  whatsappNumber: '593963461588', // CONFIGURAR
  instagramHandle: 'SrMichi01', // CONFIGURAR — sin @
  email: 'michicakes.riobamba@gmail.com', // CONFIGURAR
  location: 'Esmeraldas - Vuelta Larga', // CONFIGURAR — ciudad / referencia
  businessHours: 'Lun a Sáb · 10:00–18:00', // CONFIGURAR — ej: 'Lun a Sáb · 9:00–19:00'

  // Aviso de alérgenos — edítalo o déjalo vacío ('') para ocultarlo.
  allergenNote: 'Consulta ingredientes y alérgenos por WhatsApp antes de tu pedido.',
};

export const IS_CONFIGURED = (v) => typeof v === 'string' && v.trim() !== '' && v !== 'CONFIGURAR';
