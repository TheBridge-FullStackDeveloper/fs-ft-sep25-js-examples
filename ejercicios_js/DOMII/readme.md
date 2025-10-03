# Ejercicio: Pokémons con JavaScript y el DOM

En este ejercicio vamos a practicar:
- Uso de **módulos en JavaScript** (`import` / `export`)
- Manipulación del **DOM**
- Filtrado de arrays
- Creación de funciones reutilizables

---

## Pasos del ejercicio

### 1. Crear el archivo `pokemons.js`
- Dentro de este archivo definiremos un **array de objetos** con los Pokémon.  
- Cada Pokémon debe tener como mínimo:
  - `id`
  - `nombre`
  - `tipo` (`Agua`, `Fuego`, `Planta` o `Eléctrico`) - Más abajo está el array de pokemons
  - `ataque`
  - `imagen_front`
  - `imagen_back`
---

### 2. Configurar el `index.html`

* Enlazamos `script.js` pero usando **type="module"** para poder importar.

---

### 3. Importar en `script.js`

* Importamos el array de los pokemons y lo mostramos por consola:

---

### 4. Pintar en pantalla

* usamos un bucle para recorrer el array y mostrar cada Pokémon en pantalla. Usamos `innerHTML`.

---

### 5. Filtrar solo los Pokémon de tipo Agua

* Creamos un nuevo array filtrado solo por los pokemos de agua y lo mostramos en pantalla.

---

### 6. Dale estilo

* Haz cards de cada uno de los pokemons, que tengan un aspecto similar a las cartas pokemon

### 7. 💥 Nivel "explotar la cabeza". Creamos funciones reutilizables

* Separar responsabilidades en **dos funciones**:

  1. Una para obtener datos filtrados (`getPokemonsByType`)
  2. Otra para pintar (`renderPokemons`)

---

## 🎯 Objetivos de aprendizaje

* Aprender a **modularizar código** con `import`/`export`.
* Practicar la manipulación del **DOM** con `innerHTML`.
* Crear **funciones reutilizables** para mantener el código limpio.


## Listado de pokemons
```js
const pokemons = [
  {
    id: 25,
    nombre: "Pikachu",
    tipo: "Eléctrico",
    ataque: "Impactrueno",
    hp: 35,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
  },
  {
    id: 4,
    nombre: "Charmander",
    tipo: "Fuego",
    ataque: "Lanzallamas",
    hp: 39,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
  },
  {
    id: 7,
    nombre: "Squirtle",
    tipo: "Agua",
    ataque: "Pistola Agua",
    hp: 44,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"
  },
  {
    id: 1,
    nombre: "Bulbasaur",
    tipo: "Planta",
    ataque: "Látigo Cepa",
    hp: 45,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  },
  {
    id: 37,
    nombre: "Vulpix",
    tipo: "Fuego",
    ataque: "Ascuas",
    hp: 38,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png"
  },
  {
    id: 133,
    nombre: "Eevee",
    tipo: "Normal",
    ataque: "Placaje",
    hp: 55,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png"
  },
  {
    id: 58,
    nombre: "Growlithe",
    tipo: "Fuego",
    ataque: "Colmillo Ígneo",
    hp: 55,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png"
  },
  {
    id: 54,
    nombre: "Psyduck",
    tipo: "Agua",
    ataque: "Hidropulso",
    hp: 50,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png"
  },
  {
    id: 77,
    nombre: "Ponyta",
    tipo: "Fuego",
    ataque: "Llama Final",
    hp: 50,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png"
  },
  {
    id: 120,
    nombre: "Staryu",
    tipo: "Agua",
    ataque: "Rayo Burbuja",
    hp: 30,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png"
  },
  {
    id: 69,
    nombre: "Bellsprout",
    tipo: "Planta",
    ataque: "Hoja Afilada",
    hp: 50,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png"
  },
  {
    id: 135,
    nombre: "Jolteon",
    tipo: "Eléctrico",
    ataque: "Rayo",
    hp: 65,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png"
  },
  {
    id: 6,
    nombre: "Charizard",
    tipo: "Fuego",
    ataque: "Lanzallamas",
    hp: 78,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
  },
  {
    id: 3,
    nombre: "Venusaur",
    tipo: "Planta",
    ataque: "Rayo Solar",
    hp: 80,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
  },
  {
    id: 9,
    nombre: "Blastoise",
    tipo: "Agua",
    ataque: "Hidrobomba",
    hp: 79,
    imagen_front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    imagen_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png"
  }
];
```

---

