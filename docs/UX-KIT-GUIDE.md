# Guía del UX Kit

Esta guía proporciona documentación completa del sistema de diseño implementado en el proyecto.

## 📐 01. Tipografía

### Font Style Guide
**Font Family**: Ubuntu (Google Fonts)

### Text Weight
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **SemiBold**: 600
- **Bold**: 700

### Text Styles

| Nombre | Weight | Size | Line Height | Clase CSS |
|--------|--------|------|-------------|-----------|
| 32px / Bold | Bold | 32px | 36px | `.text-32-bold` |
| 32px / SemiBold | Medium | 32px | 36px | `.text-32-semibold` |
| 24px / Medium | Regular | 24px | 28px | `.text-24-medium` |
| 20px / SemiBold | Medium | 20px | 24px | `.text-20-semibold` |
| 22px / Medium | Medium | 18px | 22px | `.text-22-medium` |
| 18px / Light | Regular | 18px | 22px | `.text-18-light` |
| 16px / Regular | Bold | 16px | 24px | `.text-16-regular` |
| 16px / SemiBold | Medium | 16px | 20px | `.text-16-semibold` |
| 16px / Medium | Regular | 16px | 20px | `.text-16-medium` |
| 16px / Light | Light | 16px | 20px | `.text-16-light` |
| 14.5px / Medium | Medium | 14px | 20px | `.text-14-5-medium` |
| 14px / Regular | Regular | 14px | 20px | `.text-14-regular` |
| 13px / Medium | Medium | 13px | 20px | `.text-13-medium` |
| 13px / SemiBold | Regular | 13px | 20px | `.text-13-semibold` |

### Ejemplo de uso
```html
<h1 class="text-32-bold">Título principal</h1>
<h2 class="text-24-medium">Subtítulo</h2>
<p class="text-16-regular">Texto de párrafo</p>
```

---

## 🎨 02. Colores

### Brand Colors
```css
--color-primary: #116ACC          /* Primary */
--color-secondary-1: #1B2233      /* Secondary 1 */
--color-secondary-2: #B3CEE2      /* Secondary 2 */
--color-secondary-3: #D9DDE7      /* Secondary 3 */
--color-secondary-4: #FD4E5D      /* Secondary 4 */
```

### Gray Colors
```css
--color-black: #2F80ED
--color-gray-1: #2F80ED
--color-gray-2: #2F80ED
--color-gray-3: #2F80ED
--color-gray-4: #2F80ED
--color-gray-5: #2F80ED
--color-gray-6: #F7F9FD
--color-gray-7: #2F80ED
--color-white: #2F80ED
```

### State Colors
```css
--color-info: #2F80ED            /* Info */
--color-success: #27AE60         /* Success */
--color-warning: #E2B93B         /* Warning */
--color-error: #EB5757           /* Error */
```

### Ejemplo de uso
```css
.my-element {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-secondary-3);
}
```

---

## 🔘 03. Iconografía

### Spacing
- **Feather icons**: 24px height and width con 2px stroke weight
- **Margins**: 2px
- **Full size**: 24px

### Icon Sets
- **Outlined icons**: Para interfaces limpias y minimalistas
- **Filled icons**: Para elementos que requieren más peso visual

---

## 📝 04. Text Fields

### Field Types

#### Input con Label
```html
<div class="input-group">
  <label class="input-label">Label</label>
  <input type="text" class="input-field" placeholder="Placeholder">
</div>
```

#### Input con Icono
```html
<div class="input-with-icon">
  <span class="input-icon">🔍</span>
  <input type="text" class="input-field" placeholder="Placeholder">
</div>
```

### Estados de Input
- **Default**: Estado normal
- **Focused**: Cuando el input tiene foco (borde azul)
- **Hover**: Al pasar el cursor
- **Filled**: Con contenido
- **Error**: Con error de validación (borde rojo)
- **Success**: Validación exitosa (borde verde)
- **Disabled**: Deshabilitado (gris)

### Dropdown
```html
<div class="dropdown">
  <select class="input-field">
    <option>Placeholder</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
  </select>
</div>
```

---

## 🔲 05. Botones

### Button Rules
- **Padding Left Right**: 1.5x font size
- **Padding Top Bottom**: 1x font size

### Tamaños de Botones

| Tamaño | Clase CSS | Padding | Font Size |
|--------|-----------|---------|-----------|
| Small | `.btn-small` | 8px 20px | 14px |
| Normal | `.btn-normal` | 10px 24px | 16px |
| Medium | `.btn-medium` | 12px 28px | 16px |

### Variantes de Botones

#### 1. Normal (Primary)
```html
<button class="btn btn-primary btn-normal">Button</button>
```
- **Rest**: Fondo azul primario
- **Hover**: Azul más oscuro + elevación
- **Pressed**: Azul oscuro + sin elevación
- **Disabled**: Gris claro

#### 2. Icon Text
```html
<button class="btn btn-primary-icon-text btn-normal">
  ✏️ Button
</button>
```

#### 3. Outline
```html
<button class="btn btn-outline btn-normal">Button</button>
```
- Borde azul, fondo transparente
- Hover: Fondo azul claro

#### 4. Tags
```html
<button class="btn btn-tag">Button ×</button>
```
- Bordes redondeados (20px)
- Compacto

#### 5. Text Only
```html
<button class="btn btn-text">Button</button>
```
- Sin borde, sin fondo
- Solo texto

#### 6. Icon Only
```html
<button class="btn btn-icon">+</button>
```
- Cuadrado (40x40px)
- Solo icono

#### 7. Dots (Menu)
```html
<button class="btn btn-dots">⋮</button>
```
- Para menús contextuales

#### 8. Secondary
```html
<button class="btn btn-secondary btn-normal">Button</button>
```
- Color secundario (rojo/rosa)

### Ejemplo Completo
```html
<!-- Botón primary normal -->
<button class="btn btn-primary btn-normal">Guardar</button>

<!-- Botón outline mediano -->
<button class="btn btn-outline btn-medium">Cancelar</button>

<!-- Botón pequeño con icono -->
<button class="btn btn-primary-icon-text btn-small">
  ✏️ Editar
</button>

<!-- Tag -->
<button class="btn btn-tag">JavaScript ×</button>
```

---

## 📦 Espaciado y Layout

### Variables de Espaciado
```css
--spacing-2: 2px
--spacing-4: 4px
--spacing-8: 8px
--spacing-12: 12px
--spacing-16: 16px
--spacing-20: 20px
--spacing-24: 24px
--spacing-32: 32px
```

### Border Radius
```css
--radius-small: 4px
--radius-medium: 8px
--radius-large: 12px
--radius-circle: 50%
```

### Shadows
```css
--shadow-small: 0 2px 4px rgba(0, 0, 0, 0.1)
--shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.15)
--shadow-large: 0 6px 12px rgba(0, 0, 0, 0.2)
```

---

## 🎯 Mejores Prácticas

### 1. Consistencia
- Usar siempre las variables CSS definidas
- No crear colores o tamaños personalizados sin necesidad

### 2. Accesibilidad
- Mantener contraste adecuado (mínimo 4.5:1 para texto)
- Usar tamaños de fuente legibles (mínimo 14px)
- Botones con área de click mínima de 44x44px

### 3. Responsive
- Usar tamaños relativos cuando sea posible
- Adaptar botones y espaciado en pantallas pequeñas

### 4. Estados
- Todos los elementos interactivos deben tener estados claros (hover, active, disabled)
- Usar transiciones suaves (0.3s ease)

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

### Adaptaciones
- Reducir padding en mobile
- Stack elementos verticalmente
- Ajustar tamaños de fuente

---

## 🔄 Actualizaciones

**Versión**: 1.0
**Última actualización**: 2026-02-08

Para sugerencias o mejoras del UX Kit, contacta al equipo de diseño.
