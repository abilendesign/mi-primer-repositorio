# 🚀 Guía Rápida de Inicio

## Comenzar a trabajar

### 1. Abrir el proyecto
Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server
```

### 2. Usar los componentes del UX Kit

#### Agregar un botón
```html
<!-- Botón primary -->
<button class="btn btn-primary btn-normal">Click me</button>

<!-- Botón outline -->
<button class="btn btn-outline btn-normal">Secondary action</button>

<!-- Botón pequeño -->
<button class="btn btn-primary btn-small">Small button</button>
```

#### Agregar un input
```html
<div class="input-group">
  <label class="input-label">Email</label>
  <input type="email" class="input-field" placeholder="tu@email.com">
</div>
```

#### Usar estilos de texto
```html
<h1 class="text-32-bold">Título grande</h1>
<h2 class="text-24-medium">Subtítulo</h2>
<p class="text-16-regular">Párrafo normal</p>
```

### 3. Personalizar colores

Los colores están definidos en [css/variables.css](../css/variables.css):

```css
.my-custom-element {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-16);
  border-radius: var(--radius-medium);
}
```

### 4. Estructura de archivos

```
Tu código HTML → index.html
Estilos personalizados → css/styles.css
Scripts → js/script.js
Imágenes/assets → assets/
```

## 📚 Recursos

- [Guía completa del UX Kit](UX-KIT-GUIDE.md)
- [README del proyecto](../README.md)

## 💡 Tips

1. **Siempre usa las variables CSS** en lugar de valores hardcodeados
2. **Revisa los componentes disponibles** antes de crear nuevos estilos
3. **Mantén la consistencia** con los tamaños y espaciados del UX Kit
4. **Prueba en responsive** usando las herramientas de desarrollo del navegador

## ⚡ Atajos útiles

### Variables más usadas
```css
/* Colores */
var(--color-primary)
var(--color-secondary-1)
var(--color-error)
var(--color-success)

/* Espaciado */
var(--spacing-8)
var(--spacing-16)
var(--spacing-24)

/* Border radius */
var(--radius-medium)

/* Shadows */
var(--shadow-medium)
```

## 🎨 Paleta rápida

| Color | Código | Uso |
|-------|--------|-----|
| Primary | #116ACC | Botones principales, links |
| Secondary 1 | #1B2233 | Header, footer, textos oscuros |
| Secondary 2 | #B3CEE2 | Fondos claros |
| Secondary 3 | #D9DDE7 | Bordes, divisores |
| Secondary 4 | #FD4E5D | Acciones destructivas, alertas |
| Success | #27AE60 | Mensajes de éxito |
| Warning | #E2B93B | Advertencias |
| Error | #EB5757 | Errores, validaciones |

---

¡Ahora estás listo para construir con el UX Kit! 🎉
