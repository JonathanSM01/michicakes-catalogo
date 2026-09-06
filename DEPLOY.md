# Publicar MichiCAKES en internet (Netlify · gratis)

Tienes dos caminos. El **A** es el más rápido para salir hoy. El **B** es el
recomendado a mediano plazo (se actualiza solo cada vez que cambias el código).

---

## A) Arrastrar y soltar (2 minutos, sin cuenta técnica)

1. Genera la versión final:
   ```bash
   cd "D:\PROYECTOS\MichiCATALOGO" && npm run build
   ```
   Se crea la carpeta **`dist/`**.

2. Entra a <https://app.netlify.com/drop>.

3. Arrastra la carpeta **`dist/`** completa a esa página.

4. Netlify te da una URL tipo `https://random-name-123.netlify.app`.
   En **Site configuration → Change site name** puedes ponerle `michicakes`.
   → `https://michicakes.netlify.app`

5. Para actualizar en el futuro: `npm run build` otra vez y vuelve a arrastrar
   `dist/` en **Deploys → Drag and drop**.

---

## B) Conectado a Git (se despliega solo)

Requiere subir el proyecto a GitHub una vez.

1. Crea un repo vacío en GitHub (ej. `michicakes-catalogo`), privado o público.

2. En la carpeta del proyecto:
   ```bash
   cd "D:\PROYECTOS\MichiCATALOGO"
   git init
   git add .
   git commit -m "MichiCAKES — catálogo v3"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/michicakes-catalogo.git
   git push -u origin main
   ```

3. En Netlify: **Add new site → Import an existing project → GitHub** y elige el repo.
   Netlify lee el archivo `netlify.toml` incluido y ya sabe qué hacer:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Cada `git push` a `main` vuelve a publicar automáticamente.

---

## Antes de publicar — checklist

- [ ] `src/config/site.js` con WhatsApp, Instagram, ubicación y horario reales.
- [ ] Revisar textos y presentaciones en `src/data/products.js`.
- [ ] Meter las fotos reales que tengas (`public/assets/products/…` + `imageType: 'real'`).
- [ ] `npm run build` sin errores.
- [ ] Abrir la URL publicada en el celular y probar el botón de WhatsApp.

## Dominio propio (opcional, más adelante)

Netlify → **Domain management → Add a domain**. Sirve tanto comprar uno ahí
como apuntar uno que ya tengas cambiando los DNS. El `michicakes.netlify.app`
funciona perfecto para empezar.
