# Assets — MichiCAKES

Estructura lista para reemplazar placeholders por material real (brief §55 / §56).

/ logos          -> logo-michicakes.svg, logo-cookies.svg, logo-don-patacon.svg
/ products        -> fotos MichiCAKES (webp). Nombra igual que el id del producto: michi-3-leches.webp, michi-tiramisu.webp, ...
/ cookies         -> fotos y render de caja Cookies By Shaly
/ don-patacon     -> fotos Don Patacón: patacon-patacones.webp, ...
/ decorations     -> ilustraciones extra (opcional; ya hay SVG inline)
/ textures        -> textura de papel (opcional; ya se reproduce en CSS)

## Cómo activar una foto real
En `src/data/products.js`, en el producto correspondiente:

    image: '/assets/products/michi-3-leches.webp',
    imageType: 'real',   // oculta la etiqueta "Imagen referencial*"

No hay que tocar componentes, layout ni CSS.
