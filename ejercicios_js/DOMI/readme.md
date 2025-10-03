## 1. Seleccionar y modificar contenido

**Objetivo:** Usar `getElementById`, `innerText`, `innerHTML`.

* Crea un `h1` con un id `titulo`.
* Desde JS:

  * Selecciónalo con `getElementById`.
  * Cambia el texto con `innerText`.
  * Cambia el contenido con `innerHTML` (ejemplo: añadir un `<span>` con estilo en rojo).

**Conceptos:** diferencias entre `innerText` e `innerHTML`.

---

## 2. Cambiar estilos con JS

**Objetivo:** Usar `.style`.

* Crea un `p` con id `parrafo`.
* Selecciónalo y cambia:

  * El color del texto.
  * El fondo.
  * El tamaño de fuente.

**Concepto:** `.style.propiedad` cambia solo en línea, no la clase CSS.

---

## 3. Escuchar un evento simple

**Objetivo:** Usar `addEventListener`.

* Haz un botón con id `boton`.
* Al hacer click:

  * Cambia el texto de un `p` con `innerText`.
  * Cambia el color de fondo del `body`.

👉 **Concepto:** evento `click`.

---

## 4. Cambiar imágenes

**Objetivo:** Manipular atributos con `.src`.

* Pon un `img` con id `imagen` y una foto inicial.
* Haz un botón que cambie esa imagen por otra al hacer click.

👉 **Concepto:** `element.src = '...'`.

---

## 5. Evento hover (mouseenter / mouseleave)

**Objetivo:** Aprender a escuchar cuando el cursor entra/sale.

* Haz un `div` con un color de fondo.
* Al pasar el ratón (`mouseover`), cambia a otro color.
* Al salir (`mouseout`), vuelve al original.

👉 **Concepto:** eventos de mouse y restaurar estado.

---

## 6. Varias selecciones

**Objetivo:** `querySelectorAll` y bucles.

* Crea 5 `p` con clase `frase`.
* Selecciónalos todos con `querySelectorAll('.frase')`.
* Recorre la lista y cambia cada uno al hacer click (ej: poner texto en mayúsculas).

👉 **Concepto:** trabajar con NodeList.

---

## 7. Prevención de comportamiento por defecto

**Objetivo:** `event.preventDefault`.

* Crea un enlace `<a href="https://google.com">Ir a Google</a>`.
* Añade un listener que, al clickar, haga `preventDefault()` y muestre un mensaje “¡No puedes salir!”.

**Concepto:** bloquear comportamiento por defecto.

---

## 8. Ejercicio FINAL”

**Objetivo:** Combinar varias cosas.

* Pon un `article` con un `h2`, un `p` y una `img`.
* Haz que:

  * Al clickar en el `h2`, cambie su texto a “Hechizo lanzado”.
  * Al clickar en el `p`, cambie color y fondo.
  * Al clickar en la `img`, cambie por otra.

## BONUS

**Objetivo:** Coger el valor del input y ponerlo en pantalla
* Pon un `input` con un `botón` con la palabra "agregar".
* Haz que:

  * Se pueda escribir en el `input`, cambie el placeholder "Escribe algo" por lo que escribas.
  * Al clickar en el `botón`, coja el valor del input y lo agregue en una lista.