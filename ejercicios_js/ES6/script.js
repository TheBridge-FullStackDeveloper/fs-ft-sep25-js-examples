// Destructuring array

let temperaturas = [10, 20, 11, 12, 23, 22, 24];
let [a, b, c, d, e, f, g] = temperaturas; // genera 7 variables

// let a = temperaturas[0];
// let b = temperaturas[1];
// let c = temperaturas[2];
// let d = temperaturas[3];
// ...
// ...
// let g = temperaturas[6];

console.log(a);
console.log(g);

// Guarda aa=3 y bb=6
let list = [3, 5, 6];
let [aa, , bb] = list;

console.log(bb);


// Asignar nombres de parámetros a objetos que pasas por una función

// datos -> ["hola","adios"]
function imprime(datos) {
    const msj = `${datos[0]}, buenos ${datos[1]}`;
    console.log(msj);
    return msj;
}

imprime(["hola", "dias"]); 

// let misDatosAimprimir = ["hola", "dias"];
// imprime(misDatosAimprimir); // lamada a la función. Se pasa por parámetros un array

// Con Destructuring
function imprime2([name, surname]) {
    const msj = `Soy ${name} ${surname}`;
    console.log(msj);
    return msj;
  }

imprime2(["pepe", "perez"]);


// Destructuración - objetos
// asignación básica
const user = {
    id: 42,
    is_verified: true,
};

const { id, is_verified } = user;

console.log(id);
console.log(is_verified);

console.log(user.id);
console.log(user.is_verified);

// Valores predeterminados
const { a1 = 10, b1 = 5 } = { a1: 3 };

console.log(a1);
console.log(b1);

// Spread operator
let minimo = Math.min(1,3,5,-44);

let miArray = [2, 5, 7, 1, 9];
let minimo2 = Math.min(...miArray);


let misConocimientos = [
    "variables",
    "operadores",
    "estructuras de control",
    "funciones",
  ];

  let aprendido = ["rest operator", "spread operator"];

  let misConocimientosAmpliados = [
    ...misConocimientos,
    ...aprendido,
    "otra cosa más",
  ];

  console.log(misConocimientosAmpliados);
  

//Ejemplo 3 - mergeando objetos
const user1 = {
    name: "Jen",
    age: 22,
  };

const user2 = {
    name: "Andrew",
    location: "Philadelphia",
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);


// Rest operator
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50]
console.log(a,b);

function add(...rest) {
    let total = 0;
  
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
  }
  
  add(1); // returns 1
  add(1, 2); // returns 3
  add(1, 2, 3, 4, 5); // returns 15
