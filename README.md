# MichiCAKES — Un universo de sabores

Catálogo digital de las tres marcas: **MichiCAKES** (dulce), **Cookies By Shaly** (galletas) y **Don Patacón** (salado).

Stack: React + Vite + Tailwind v4. Animación de entrada con anime.js; el resto en CSS. Sin backend.

## Comandos

```bash
npm install
npm run dev        # desarrollo
npm run build      # producción -> dist/
npm run preview    # previsualizar el build
```

## Configurar datos comerciales

Todo lo que cambia vive en **`src/config/site.js`**. Reemplaza los valores `CONFIGURAR`:

```js
whatsappNumber: '5939XXXXXXXX',   // solo dígitos, con código de país, sin +
instagramHandle: 'michicakes',    // sin @
location: 'Ciudad · referencia',
businessHours: 'Lun a Sáb · 9:00–19:00',
allergenNote: 'Consulta ingredientes y alérgenos...',  // '' para ocultarlo
```

Mientras `whatsappNumber` no esté configurado, los botones de pedido muestran un
aviso honesto en vez de un enlace roto.

## Catálogo de productos

Se edita **solo** en `src/data/products.js`. Cada producto:
`id, brand, name, description, price, presentation, image, imageType, available, featured, tags`.

- `price: null` → la UI muestra "Consultar precio".
- `image: null` → se dibuja una ilustración placeholder on-brand.

## Fotografías reales

1. Coloca el `.webp` en `public/assets/products/` (o `don-patacon/`, `cookies/`).
2. En el producto: `image: '/assets/products/<id>.webp'` y `imageType: 'real'`.

Eso oculta la etiqueta "Imagen referencial*". No hay que tocar componentes ni CSS.

## Publicar

Ver **[DEPLOY.md](DEPLOY.md)** — Netlify por arrastrar-y-soltar o conectado a Git.

## Logos

Cuando lleguen los archivos originales del cliente, colócalos en
`public/assets/logos/` y sustituye el marcador `<Paw>` de `Navbar.jsx` / `Footer.jsx`.
No rediseñar ni deformar los logos.
