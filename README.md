# Mi Primer Repositorio

Página web estática lista para publicar en GitHub Pages y Vercel.
Construida con un UX Kit completo que incluye sistema de diseño, componentes y estilos reutilizables.

## Estructura del Proyecto

```
primer-repo/
├── index.html              # Página principal
├── vercel.json            # Configuración para Vercel
├── css/                   # Estilos CSS organizados
│   ├── variables.css      # Variables CSS del UX Kit (colores, tipografía, espaciado)
│   ├── components.css     # Componentes reutilizables (botones, inputs, etc.)
│   └── styles.css         # Estilos principales de la página
├── js/                    # JavaScript
│   └── script.js          # Scripts principales
├── assets/                # Recursos (imágenes, iconos, fuentes)
└── docs/                  # Documentación del proyecto
```

## UX Kit incluido

El proyecto incluye un sistema de diseño completo:

### Tipografía
- **Font Family**: Ubuntu (Google Fonts)
- **Tamaños**: 32px, 24px, 20px, 22px, 18px, 16px, 14.5px, 14px, 13px
- **Pesos**: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)

### Paleta de Colores
- **Primary**: #116ACC (Azul principal)
- **Secondary 1**: #1B2233 (Azul oscuro)
- **Secondary 2**: #B3CEE2 (Azul claro)
- **Secondary 3**: #D9DDE7 (Gris azulado)
- **Secondary 4**: #FD4E5D (Rojo/Rosa)
- **State Colors**: Info, Success, Warning, Error

### Componentes
- **Botones**: 8 variantes (Normal, Icon Text, Outline, Tags, Text, Icon, Dots, Secondary)
- **Text Fields**: Inputs con estados (default, focus, hover, error, success)
- **Dropdowns**: Selectores personalizados
- **Tooltips**: Información contextual

## Cómo usar los componentes

### Botones
```html
<button class="btn btn-primary btn-normal">Botón Primary</button>
<button class="btn btn-outline btn-normal">Botón Outline</button>
<button class="btn btn-tag">Tag</button>
```

### Inputs
```html
<div class="input-group">
  <label class="input-label">Nombre</label>
  <input type="text" class="input-field" placeholder="Ingresa tu nombre">
</div>
```

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
