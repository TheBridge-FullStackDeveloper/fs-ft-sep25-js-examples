// Eliminar duplicados
// param: datos -> [1,2,33,33,4,55,55,6,6,7]
// return: [1,2,33,4,55,6,7]

// POSIBLES SOLUCIONES
// Cuando 

function eliminarDuplicados(datos){
    let result = []; // array datos sin duplicar
    for (let i = 0; i < datos.length; i++) {

        //if(result.includes(datos[i]) === false){
        if(!result.includes(datos[i])){
            result.push(datos[i]); // almacenar en array de datos sin duplicar
        }
        
        // faltan cosas...
    }
    return result;
}

console.log(eliminarDuplicados([1,2,33,33,4,55,55,6,6,7]));




function eliminarDuplicados2(datos){
    let result = []; // array datos sin duplicar
    for (let i = 0; i < datos.length; i++) { // recorre cada num

        let encontrado = false;

        for (let j = 0; j < result.length; j++) { // comprobar si ya se guardó num
            if(result[j] === datos[i]){
                encontrado = true;
                break;
            }
        }

        if(encontrado === false){
            result.push(datos[i]); // almacenar en array de datos sin duplicar
        }else{
            console.log("El numero estaba repetido: "+datos[i]);
            
        }
        
    }
    return result;
}

console.log(eliminarDuplicados2([1,2,33,33,4,55,55,6,6,7]));





function eliminarDuplicados3(datos){
    let result = []; // array datos sin duplicar

    let i = 0;

    while(i < datos.length){
        if(!result.includes(datos[i])){
            result.push(datos[i]); // almacenar en array de datos sin duplicar
        }
        i++;
    }

    return result;
}

console.log(eliminarDuplicados3([1,2,33,33,4,55,55,6,6,7]));


let year = 1995;
while(year <= 2025){
    
    if (year%2 === 0){
        console.log(year); 
    }
    
    if(year === 2020){
        break;
    }

    year++;
}

let expr = "Cerezas";

switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");

