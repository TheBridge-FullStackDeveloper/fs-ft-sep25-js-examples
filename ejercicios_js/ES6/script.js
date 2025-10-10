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



// Ejercicios MAP, FILTER, REDUCE

let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let resultado = [
    "Como soy de Italia, amo comer Pizza",
    "Como soy de Japón, amo comer Ramen",
    "Como soy de Valencia, amo comer Paella",
    "Aunque no como carne, el Entrecot es sabroso"
]
let result2 = foodList.map( (foodItem, i) => {

  console.log("Este es el indice i:"+i);
  
    if (foodItem === "Pizza") {
        return `Como soy de Italia, amo comer ${foodItem}`;
    } else if (foodItem === "Ramen") {
        return `Como soy de Japón, amo comer ${foodItem}`;
    } else if (foodItem === "Paella") {
        return `Como soy de Valencia, amo comer ${foodItem}`;
    } else {
        return `Aunque no como carne, el ${foodItem} es sabroso`
    };
});

console.log(result2);


let foodList2 = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let phrases = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
};
let result3 = foodList2.map(food => phrases[food]);


const foodList3 =[
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];
  let result5 = foodList3
                    .filter(food => food.isVeggie === true)
                    .map(food => food.name === "Tempeh"?
                                      "Que rico Tempeh me voy a comer!"
                                      :"Que rica Tofu burguer me voy a comer!"
                    );

  console.log(result5);

  // Ternario

  // Ejemplo 1
let esCliente = true;
console.info("El pago son  " + (esCliente ? "10.00€" : "20.00€"));

// Ejemplo 2
let esCliente2 = false;
let esAdulto = true;
console.log(
  esCliente2
    ? "Debes pagar 10.00€"
    : esAdulto
    ? "Envíe su solicitd"
    : "Sorry, espera a hacerte mayor :)"
);


// Ejemplo 3
let mensaje,
  esCliente3 = true;

esCliente3
  ? ((mensaje = "debe pagar 10.00€"), console.info(mensaje))
  : ((mensaje = "Sebe pagar 20.00€"), console.info(mensaje));


  // if(esCliente3){
  //   mensaje = "debe pagar 10.00€";
  //   console.info(mensaje);
  // }else{
  //   mensaje = "Sebe pagar 20.00€"; 
  //   console.info(mensaje);
  // }


  // Spread, rest operator


  // 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

  // onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
  // onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
  function onlyUniques (...argumento) {
    //[1, 2, 2, 2, 3, 6, 7, 8]. elemento = 1

    // indexOf(1) --> pos=0
    // i=0
    // [true, ]
    // [1, ]
    
    // indexOf(2) --> pos=1
    // i=1
    // [true, true ]
    // [1,2 ]

    // indexOf(2) --> pos=1
    // i=2
    // [true, true, false ]
    // [1,2, ]

    // indexOf(2) --> pos=1
    // i=3
    // [true, true, false, false]
    // [1,2, ]

    // indexOf(3) --> pos=4
    // i=4
    // [true, true, false, false,true]
    // [1,2,3 ]

    let argumentosFiltrado = argumento.filter((elemento, indice) => argumento.indexOf(elemento) === indice) // El indexOf devuelve el primer índice donde aparece ese elemento en el array.
    return argumentosFiltrado
  }

  console.log(onlyUniques(1, 2, 2, 2, 3, 6, 7, 8));


  function onlyUniques2(...argumento){ // REST operator
    let result = []; // array datos sin duplicar
    for (let i = 0; i < argumento.length; i++) {

        if(!result.includes(argumento[i])){
            //result.push(argumento[i]); // almacenar en array de datos sin duplicar
            result = [...result,argumento[i]]; // SPREAD operator. Concatena un elemento más
        }
    }
    return result;
}

console.log(onlyUniques2(1,2,33,33,4,55,55,6,6,7));
console.log(onlyUniques2(1,2,33,33,33,4,55,55,6,6,6,7));




// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const arr6 = [1, 5, 7, 8, 9]
const arr7 = [8, 5,37, 8, 9]
const arr8 = [8, 5,37, 8, 9]


function combineAllArrays(...arrays){ //recibe cualquier array y argumentos
   return arrays.reduce((acumulador , actual) =>[...acumulador, ...actual],[]) //queremos que nos devuelva un solo array
 }
console.log(combineAllArrays(arr6, arr7, arr8)); //llamamos a la función



function combineAllArrays2(...arrays){ //recibe cualquier array y argumentos
  
  let acumulador = [];
  for (let i = 0; i < arrays.length; i++) {
    acumulador = [...acumulador, ...arrays[i]];
  }
  return acumulador;
  
}
console.log(combineAllArrays2(arr6, arr7, arr8)); //llamamos a la función






