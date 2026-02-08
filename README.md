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
│   └── logo.png           # Logo del header (agregar manualmente)
└── docs/                  # Documentación del proyecto
```

## 🖼️ Agregar el Logo

El proyecto está configurado para usar un logo en el header. Para agregarlo:

### Opción 1: Guardar manualmente
1. Guarda tu imagen de logo en la carpeta `assets/`
2. Nómbrala exactamente como `logo.png`
3. Formato recomendado: PNG con fondo transparente
4. El logo se ajustará automáticamente a 50px de altura

### Opción 2: Usar otro nombre o formato
Si tu logo tiene otro nombre (ejemplo: `mi-logo.svg`):

1. Guarda la imagen en `assets/`
2. Edita el archivo `index.html` línea 16:
   ```html
   <img src="assets/logo.png" alt="Logo" class="logo-img">
   ```
   Cambia `logo.png` por el nombre de tu archivo

### Opción 3: Usando Git
```bash
# 1. Copia tu logo a la carpeta assets
cp /ruta/a/tu/logo.png assets/logo.png

# 2. Agrega y confirma los cambios
git add assets/logo.png
git commit -m "Agregar logo al proyecto"
git push origin main
```

## UX Kit incluido

El proyecto incluye un sistema de diseño completo:

### Tipografía
- **Font Family**: Ubuntu (Google Fonts)
- **Tamaños**: 32px, 24px, 20px, 22px, 18px, 16px, 14.5px, 14px, 13px
- **Pesos**: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)

### Paleta de Colores

#### Colores principales
- **Color principal**: `#EB4133` (Rojo principal)
- **Color secundario** (hover): `#F07A6F` (Rojo claro)
- **Color terciario** (pressed): `#A42E23` (Rojo oscuro)
- **Color disabled**: `#F2F2F2` (Gris claro)

#### Colores de fondo
- **Fondo principal**: `#FFFFFF` (Blanco)
- **Fondo secundario**: `#F2F2F2` (Gris claro)

#### State Colors (complementarios)
- **Success**: `#27AE60` (Verde)
- **Warning**: `#E2B93B` (Amarillo)
- **Error**: `#EB4133` (Rojo)
- **Info**: `#2F80ED` (Azul)

### Reglas de Botones

#### Padding
- **Izquierda/Derecha**: 1.5 × tamaño de la fuente
- **Arriba/Abajo**: 1 × tamaño de la fuente

Ejemplos:
- Small (14px): `padding: 14px 21px`
- Normal (16px): `padding: 16px 24px`
- Medium (18px): `padding: 18px 27px`

#### Botón de ancho completo
- Izquierda/Derecha: determinado por el ancho del dispositivo
- Arriba/Abajo: 1 × tamaño de la fuente

#### Iconos
- Siempre a la izquierda respetando las reglas de relleno

### Estilos de Botones

#### Normal Buttons (`.btn-primary`)
- **Normal**: fondo `#EB4133`, texto `#FFFFFF`
- **Hover**: fondo `#F07A6F`, texto `#FFFFFF`
- **Pressed**: fondo `#A42E23`, texto `#FFFFFF`
- **Disabled**: fondo `#F2F2F2`, texto `#FFFFFF`

#### Icon Text Buttons (`.btn-icon-text`)
- Icono siempre a la izquierda (color `#FFFFFF`)
- Texto a la derecha (color `#FFFFFF`)
- Mismos estados de color que Normal Buttons

#### Outline Buttons (`.btn-outline`)
- **Normal**: fondo `#FFFFFF`, texto `#EB4133`, borde 2px `#EB4133`
- **Hover**: fondo `#FFFFFF`, texto `#F07A6F`, borde 2px `#F07A6F`
- **Pressed**: fondo `#FFFFFF`, texto `#A42E23`, borde 2px `#A42E23`
- **Disabled**: fondo `#FFFFFF`, texto `#F2F2F2`, borde 2px `#F2F2F2`

### Componentes
- **Botones**: Normal, Icon Text, Outline, Tags, Text, Icon, Dots
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
