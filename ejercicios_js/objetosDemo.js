// # 📝 Ejercicios prácticos

// ### Ejercicio 1

// Crea un objeto `coche` con propiedades: `marca`, `modelo`, `año`.
// Añade un método que devuelva la frase `"Mi coche es un [marca] [modelo]"`.
// ---

const coche = {
  "marca": "Peugeot",
  "modelo": "306",
  "año": "2000"
}

console.log(` Mi coche es ${coche.marca} y el modelo es ${coche.modelo}`)

// ### Ejercicio 2
// Dado el objeto:


const libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  paginas: 863
};


// * Imprime todas las claves.
const keys = Object.keys(libro) 
console.log(keys)

// * Imprime todos los valores.
const values = Object.values(libro) 
console.log(values)
// * Añade la propiedad `anio: 1605`.

libro.anio = 1605
console.log(libro)
// ---



// ### Ejercicio 3
// Crea un array de objetos `pokemons`, con al menos 3 Pokémon, cada uno con: `nombre`, `tipo` y `nivel`.
// * Recorre el array e imprime `"Pikachu es de tipo Eléctrico y nivel 12"`.

const pokemons = [
  {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    nivel: 12
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
    nivel: 10
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
    nivel: 14
  }
]

for (let pokemon of pokemons) {
  if (pokemon.tipo === "Fuego") {
    console.log(`${pokemon.nombre} es de tipo ${pokemon.tipo} y nivel ${pokemon.nivel}`)
  } else {
    console.log(`${pokemon.nombre} no es de tipo Fuego`)
  }
}

// console.log(`${pokemons[0].nombre} es de tipo ${pokemons[0].tipo} y nivel ${pokemons[0].nivel}`)

// ---

// ### Ejercicio 4
// Dado:


const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Marta", edad: 30 }
];

// * Devuelve solo los usuarios mayores de 22.
// * Devuelve los nombres en un array.

let maxAge = []
for (let usuario of usuarios) {
  if (usuario.edad > 22) {
    maxAge.push(usuario)
  }
}

console.log(maxAge)

// A - "Nada, se rompe"
// []
// B - "Sale el Array completo con Luis y Marta"
// [{ nombre: "Luis", edad: 25 }, { nombre: "Marta", edad: 30 }]
// C - "Sale un Array primero con Luis y luego sale con Luis y Marta"
// [{ nombre: "Luis", edad: 25 }]
// [{ nombre: "Luis", edad: 25 }, { nombre: "Marta", edad: 30 }]


