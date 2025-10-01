👉 **Sistema de gestión de tareas**

1. Crea un array llamado `tareas`, que empiece vacío. V

2. Cada tarea será un objeto con:

   * `id`
   * `descripcion`
   * `completada` (true/false).
3. Crea funciones (métodos independientes) para:

   * `agregarTarea(descripcion)`
   * `completarTarea(id)`
   * `listarTareas()` → que muestre todas con su estado.

Ejemplo esperado:

```js
agregarTarea("Estudiar objetos");
agregarTarea("Hacer ejercicio");

listarTareas();
// 1. Estudiar objetos - Pendiente
// 2. Hacer ejercicio - Pendiente

completarTarea(1);

listarTareas();
// 1. Estudiar objetos - Completada
// 2. Hacer ejercicio - Pendiente
```
---
