
---

### 1 - Estructura base
- Crea un template en el que tengas un **header**, un **main** y un **footer**.
- El **footer** debe quedar **abajo del todo**, aunque no haya contenido suficiente para empujarlo.
- Los estilos (`style.css`) estarán en una carpeta `/css`.

la estructura web tendrá **header**, **main** y **footer**, donde el footer quedará siempre al final de la página, haya o no contenido que empuje hacia abajo.

Toda la web debe tener la tipografía `Lato` con sus pesos: `light`, `normal` y `bold`.
---

### 2 - Header
- El header tendrá:
  - La palabra **“Mi sitio”** alineada a la **izquierda**.
  - Tres categorías alineadas a la **derecha**:
    - `Position`
    - `Flex`
    - `Más cosas`
Esto lo dejaremos cuando finalicemos el footer:
- El header estará **fijo arriba del todo**
- Desde el header se podrá hacer clic en las categorías para navegar a las secciones correspondientes mediante **anclas**
- El scroll será **suavizado**

---

### 3 - Main
El `<main>` contendrá varias secciones:

#### Masthead
- Primera sección con un tamaño de **80vh**.
- Debe contener un `<h1>` centrado **vertical y horizontalmente** con el texto:

```
Soy un masthead y me centraré vertical y horizontalmente

```

#### Sección `Position`
- Dividide en dos columnas usando **Flexbox**:
- A la **izquierda**, texto largo.
- A la **derecha**, un **banner** de `300x600px`.
- **Banner** se mantendrá fijo mientras el **Texto** exista.

#### Sección `Flex`
- Crea **8 cajas de 100x100px**.
- Deben estar **una al lado de otra**, separadas entre sí, y centradas tanto vertical como horizontalmente.
- Si la pantalla es pequeña, las cajas deben **bajar automáticamente**.
- Cuando el ancho de la pantalla sea **menor de 800px**:
    - La **caja número 3** se pondrá **amarilla**.
    - Su texto será **negro**.
    - Y se colocará **la primera**.
- Cuando el ancho de la pantalla sea **menor de 500px**:
    - Se pondrán en **columna** todas las cajas
    - Todas medirán **300px** de ancho
    - tendrán que alinearse todas a la derecha

#### Sección `Más cosas`
- Añade varias **imagenes** de distintos tamaños y proporciones:

```
https://picsum.photos/seed/a/800/400
https://picsum.photos/seed/b/400/800
https://picsum.photos/seed/c/800/400
https://picsum.photos/seed/d/400/800

```

- Todos deberán:
- Ajustarse al **mismo tamaño visual**. Juega con los valores
---

### 4 - Footer
- El footer tendrá el texto:
```

Hecho con ❤︎ por Data

```
- El corazón (`❤︎`) debe tener una **animación de latido**.
- El footer debe quedar **pegado al fondo** incluso si no hay contenido que lo empuje.

---

## Conceptos que se practican
- `display: flex` y `flex-wrap`
- `position: sticky` vs `fixed`
- Selectores avanzados: `:nth-child()`
- Media queries (`@media`)
- Scroll suave (`scroll-behavior: smooth`)
- Transiciones y animaciones básicas (`@keyframes`)
- Uso de `object-fit` para imágenes
- Sticky footer con Flexbox (`body { display:flex; flex-direction:column; }` + `footer { margin-top:auto;} main {flex-grow: 1}`)

---

## 💡 Resultado esperado
Una página con:
- Header fijo con enlaces funcionales y scroll suave.
- Secciones organizadas (Masthead, Position, Flex, Más cosas).
- Efectos visuales correctos (sticky, flex, animación del corazón).
- Footer siempre visible abajo, sin importar la altura del contenido.

---

