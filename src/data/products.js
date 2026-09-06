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
    name: 'Dulce de 3 leches',
    description:
      'Bizcocho suave y húmedo bañado en tres leches, terminado con una capa cremosa.',
    price: null,
    presentation: 'Envase transparente 4 × 4',
    image: null,
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
      'Capas visibles de crema mascarpone, cacao y café, en envase transparente.',
    price: null,
    presentation: 'Envase transparente 3 × 4',
    image: null,
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
      'Masa suave enrollada con canela y glaseado, con apariencia recién horneada.',
    price: null,
    presentation: '4 × 4',
    image: null,
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
      'Chocolate intenso y húmedo, realzado con un almíbar de café que la vuelve pura indulgencia.',
    price: null,
    presentation: '4 × 4',
    image: null,
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
      'Alfajores artesanales en fundita, listos para compartir.',
    price: null,
    presentation: 'Fundita con 4 unidades',
    image: null,
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
  {
    id: 'patacon-patacones',
    brand: 'patacon',
    name: 'Patacones',
    description:
      'Verde frito y aplastado al momento, crocante por fuera y tierno por dentro.',
    price: null,
    presentation: 'Porción',
    image: null,
    imageType: 'referential',
    available: true,
    featured: true,
    tags: ['verde', 'crocante', 'tradicional'],
  },
  {
    id: 'patacon-encocados',
    brand: 'patacon',
    name: 'Encocados',
    description:
      'Marisco en salsa de coco, con el sazón de la costa ecuatoriana.',
    price: null,
    presentation: 'Plato',
    image: null,
    imageType: 'referential',
    available: true,
    featured: true,
    tags: ['coco', 'marisco', 'costa'],
  },
  {
    id: 'patacon-encebollado',
    brand: 'patacon',
    name: 'Encebollado',
    description:
      'Caldo de pescado con yuca y encurtido de cebolla. Reconforta como ninguno.',
    price: null,
    presentation: 'Plato',
    image: null,
    imageType: 'referential',
    available: true,
    featured: false,
    tags: ['caldo', 'pescado', 'yuca'],
  },
  {
    id: 'patacon-canastas',
    brand: 'patacon',
    name: 'Canastas',
    description:
      'Canasta de patacón rellena, servida con abundancia.',
    price: null,
    presentation: 'Unidad',
    image: null,
    imageType: 'referential',
    available: true,
    featured: false,
    tags: ['relleno', 'abundante'],
  },
  {
    id: 'patacon-especiales',
    brand: 'patacon',
    name: 'Especiales',
    description:
      'Preparaciones de la casa que rotan según el día. Consulta la opción disponible.',
    price: null,
    presentation: 'Según disponibilidad',
    image: null,
    imageType: 'referential',
    available: true,
    featured: false,
    tags: ['rotativo', 'casa'],
  },
];

export const byBrand = (brandKey) => PRODUCTS.filter((p) => p.brand === brandKey);
