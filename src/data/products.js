// ============================================================
// DATOS DEL CATÁLOGO — brief §35 / §59
// Separado por completo de la UI. Para actualizar el catálogo
// solo se edita este archivo.
//
// Campos por producto:
//   id, brand, name, description, price, presentation,
//   image, imageType, available, featured, tags
//
// image:      ruta a la foto real cuando exista (ej: '/assets/products/3-leches.webp')
//             mientras sea null se dibuja una ilustración placeholder on-brand.
// imageType:  'referential' | 'real'  (brief §57)
// price:      null  ->  la UI muestra "Consultar precio" (brief §34)
// ============================================================

export const BRANDS = {
  michicakes: {
    key: 'michicakes',
    name: 'MichiCAKES',
    kind: 'Dulce',
    emoji: '🍰',
    label: 'MichiCAKES',
    title: 'Dulces que hacen michis',
    blurb: 'Repostería artesanal: bizcochos húmedos, cremas suaves y ese toque de café que lo cambia todo.',
  },
  cookies: {
    key: 'cookies',
    name: 'Cookies By Shaly',
    kind: 'Galletas',
    emoji: '🍪',
    label: 'Cookies By Shaly',
    title: 'Una galleta nunca es suficiente',
    blurb: 'Nuestra línea de galletas: chocolate, mantequilla y horneado lento. Sabores en construcción.',
  },
  patacon: {
    key: 'patacon',
    name: 'Don Patacón',
    kind: 'Salado',
    emoji: '🍌',
    label: 'Don Patacón',
    title: 'El rey del verde',
    blurb: 'El sabor de nuestra tierra: verde, marisco y sazón ecuatoriana servida con abundancia.',
  },
};

export const PRODUCTS = [
  // ---------- MichiCAKES (brief §17–§22) ----------
  {
    id: 'michi-3-leches',
    brand: 'michicakes',
    name: 'Postre 3 Leches Premium',
    description:
      'Bizcocho suave y húmedo bañado en tres leches, chantilli, canela, hilo de manjar y fresa.',
    price: 1.75,
    presentation: 'Envase transparente 4 × 4',
    image: '/assets/products/3-leches.jpg',
    imageType: 'referential',
    available: true,
    featured: true,
    tags: ['cremoso', 'clásico', 'frío'],
  },
  {
    id: 'michi-tiramisu',
    brand: 'michicakes',
    name: 'Tiramisú',
    description:
      'Bizcocho mojado en café, crema de queso crema y vainilla.',
    price: 2.5,
    presentation: 'Envase transparente 4 × 4',
    image: '/assets/products/tiramisu.jpg',
    imageType: 'referential',
    available: true,
    featured: true,
    tags: ['café', 'cacao', 'capas'],
  },
  {
    id: 'michi-rollo-canela',
    brand: 'michicakes',
    name: 'Rollo de canela',
    description:
      'Masa suave enrollada con canela y mantequilla, glaseado de azúcar impalpable, leche y ralladura de limón.',
    price: 2.5,
    presentation: '4 × 4',
    image: '/assets/products/rollo-canela.jpg',
    imageType: 'referential',
    available: true,
    featured: false,
    tags: ['canela', 'glaseado', 'horneado'],
  },
  {
    id: 'michi-torta-chocolate',
    brand: 'michicakes',
    name: 'Torta de chocolate con almíbar de café',
    description:
      'Bizcocho de chocolate con almíbar de café y cacao, chantilli con café y ralladura de chocolate semiamargo.',
    price: 1.75,
    presentation: '4 × 4',
    image: '/assets/products/torta-chocolate.jpg',
    imageType: 'referential',
    available: true,
    featured: true,
    tags: ['chocolate', 'café', 'intenso'],
  },
  {
    id: 'michi-alfajores',
    brand: 'michicakes',
    name: 'Alfajores',
    description:
      'Tapas de maicena y mantequilla rellenas de manjar, cubiertas con azúcar impalpable.',
    price: 0.5,
    presentation: 'Unidad',
    image: '/assets/products/alfajores.jpg',
    imageType: 'referential',
    available: true,
    featured: false,
    tags: ['dulce de leche', 'para compartir'],
  },

  // ---------- Cookies By Shaly (brief §25–§27) ----------
  // Sin sabores definidos: se muestran como colección en construcción, no ficticios.
  {
    id: 'cookies-coleccion',
    brand: 'cookies',
    name: 'Colección de galletas',
    description:
      'Galletas artesanales de horneado lento. Los sabores se están afinando en cocina.',
    price: null,
    presentation: 'Unidad · caja (concepto)',
    image: null,
    imageType: 'referential',
    available: false,
    status: 'coming-soon',
    featured: true,
    tags: ['chocolate', 'artesanal', 'próximamente'],
  },

  // ---------- Don Patacón (brief §28–§30) ----------
  // Segunda actualización pendiente (después de consolidar MichiCAKES): se muestra
  // solo la marca con aviso de próximamente, sin desglosar el menú todavía.
  {
    id: 'patacon-coleccion',
    brand: 'patacon',
    name: 'Menú Don Patacón',
    description:
      'Patacones, encocados, encebollado y más, con el sazón de la costa ecuatoriana. El menú se está afinando en cocina.',
    price: null,
    presentation: 'Próximamente',
    image: null,
    imageType: 'referential',
    available: false,
    status: 'coming-soon',
    featured: true,
    tags: ['verde', 'marisco', 'próximamente'],
  },
];

export const byBrand = (brandKey) => PRODUCTS.filter((p) => p.brand === brandKey);

export const formatPrice = (price) =>
  price == null ? 'Consultar precio' : `$${price.toFixed(2).replace('.', ',')}`;
