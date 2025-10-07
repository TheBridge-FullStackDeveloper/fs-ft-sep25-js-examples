// Funcion sea getRandom
// array de colores -> coja 1 de manera aleatoria

//- Arr V
//- algo que pueda sacar un número aleatorio

const colores = ["rojo", "azul", "verde", "amarillo", "rosa", "negro", "violeta", "gris", "marron" ]
const names = ["data", "carlos1", "carlos2", "lucia", "rebe", "paula", "artur", "cris" ]
const boolean = [true, false ]


// console.log(colores[0])
// console.log(colores[1])


console.log(colores.length)
console.log(names.length)
console.log(boolean.length)

// console.log(colores[randomNumber])

function getRandom (arrLength) {
    const randomNumber = Math.floor(Math.random() * arrLength)
    return randomNumber // -> un número aleatorio
}

console.log(colores[getRandom(colores.length)])
console.log(names[getRandom(names.length)])
console.log(boolean[getRandom(boolean.length)])


getRandom(colores.length)