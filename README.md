# Mi Primer Repositorio

Página web estática lista para publicar en GitHub Pages y Vercel.

## Estructura del Proyecto

- `index.html` - Página principal
- `styles.css` - Estilos CSS
- `script.js` - JavaScript básico
- `vercel.json` - Configuración para Vercel

## Publicar en GitHub Pages

1. Haz commit y push de tus cambios:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. Ve a la configuración de tu repositorio en GitHub
3. Navega a "Pages" en el menú lateral
4. Selecciona la rama `main` como fuente
5. Guarda los cambios
6. Tu sitio estará disponible en: `https://abilendesign.github.io/mi-primer-repositorio/`

## Publicar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración
4. Haz clic en "Deploy"
5. Tu sitio estará disponible en unos segundos

## Desarrollo Local

Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```
