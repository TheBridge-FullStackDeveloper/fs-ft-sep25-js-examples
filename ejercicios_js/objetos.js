const usuario = {
    nombre: "Carlos",
    Apellido: "Díaz",
}

// 1. ** Acceso a propiedades **


console.log("-->", usuario)

console.log(usuario.nombre) 
console.log(usuario["nombre "])

// 2. ** Propiedades dinámicas **
    Añadir: 
usuario.direccion = "Thebridge"

console.log("Después", usuario)
    Modificar:
usuario.nombre = "Rebeca"
console.log("Cambio", usuario)
    Eliminar:
delete usuario.direccion
console.log("eliminado", usuario)
// 3. ** Métodos nativos útiles **
    // Object.keys(obj)
const claves = Object.keys(usuario)
console.log("claves", claves)

    // Object.values(obj) 
const valores = Object.values(usuario)
console.log("valores", valores)

    // Object.entries(obj
const entries = Object.entries(usuario)
console.log(entries)

// 4. ** Recorrer objetos **

    // for...in
for(let clave in usuario) {
    console.log(clave)
}

const arr = ["patata", "cocreta", "botella"]

for (let elemento of arr) {
    console.log("elemento:", elemento)
}

for (let i in arr) {
    console.log(`INDICE: ${i} ${arr[i]}`)
}

// 5. ** Objetos dentro de objetos **

const persona = {
    id: 1,
    nombre: "Lucia",
    direccion: {
        ciudad: "Madrid",
        calle: "TheBridge"
    }
}

console.log(persona.direccion.ciudad)

// 6. ** Arrays de objetos **

const pelis = [
    {
        titulo: "Matrix", 
        year: 1999
    },
    {
        titulo: "El padrino", 
        year: 1972
    }
]

for (let peli of pelis) {
    console.log(peli.titulo)
    console.log(peli.year)
}

// 7. ** Comparación de objetos **

let numero1 = 5
let numero2 = 5

//Valor

console.log(numero1 === numero2 )

let obj1 = {titulo: "Matrix"}
let obj2 = {titulo: "Matrix"} 

console.log(obj1 === obj2)


    // Spread operator { ...obj }


const coche = {
    marca: "Peugeot",
    modelo: "306"
}

const array = ["hola", "adios"]
const array2 = [...array, "muy buenas"]

// coche.year = 2000

console.log(coche)


const coche2 = {...coche}

console.log(coche2)

console.log(coche === coche2)

console.log(array2)

// Funciones


function suma (a, b) {
    return a+b
    // return {
    //     resultado: a + b, 
    //     numero1: a, 
    //     numero2: b
    // }
}

const suma2 = (a, b) => a + b

console.log(suma(4, 5))
console.log(suma(6, 9))

console.log(suma2(1, 2))