console.log("holamundo!");

const frutas = ["mango","pera","naranja","limon","papaya"];

for (let i = 0; i < frutas.length; i++) { // i=0....2 
                                          // 0....length-1
                                          // 0...N-1
    console.log(frutas[i]); // cada palabra
    
    // imprime tercera letra de cada palabra
    // Búsqueda bidimensional
    console.log(frutas[i][2]);

    // Imprimir sólo frutas impares --> i= 1,3,5,7
    if(i%2 !== 0){
        console.log("Impares: ",frutas[i]);
    }
}

// "mango" --> "m:a:n:g:o"
// "pera" --> "p:e:r:a"
// Entrada: frutas = ["mango","pera","naranja","limon","papaya"];
// Salida esperada ["m:a:n:g:o","p:e:r:a",......]

let resultadoFrutas = [];
for (let i = 0; i < frutas.length; i++) {
    const myFruit = frutas[i]; // Ej:"mango"
    let resultado = "";
    for (let j = 0; j < myFruit.length; j++) { // recorrer cada letra
        //console.log(myFruit[j]+":");
        if(j<myFruit.length-1)
            resultado += myFruit[j]+":"; // concatenar
        else
            resultado += myFruit[j]; // concatenar ultima pos
    }
    console.log(resultado);
    resultadoFrutas.push(resultado);
}

console.log(resultadoFrutas);







let resultadoFrutas2 = [];
for (let i = 0; i < frutas.length; i++) {
    const myFruit = frutas[i]; // Ej:"mango"
    
    let letras = myFruit.split("");// ["m","a","n","g","o"]
    let resultado = letras.join(":"); //"m:a:n:g:o"

    console.log(resultado);
    resultadoFrutas2.push(resultado);
}

console.log(resultadoFrutas2);


// Función
// params: 
    // prefijo numérico entre 1 y 3 cifras
    // teléfono numérico de 9 cifras
// return: "Llamando a +34 987987987" o "Error en los datos"
function llamar(prefijo, telefono){ //34,987987987
    if(
        (typeof prefijo === "number" && 
        prefijo.toString().length >= 1 &&
        prefijo.toString().length <= 3) 
       &&
       (typeof telefono === "number" && 
       telefono.toString().length == 9)
    ){
        return `Llamando a +${prefijo} ${telefono}`;
    }else{
        return "Error en los datos";
    }
}
// Ejecutar la función
console.log(llamar(34,897234543));
console.log(llamar("queso",897234543));
console.log(llamar(33,"hola"));
console.log(llamar(343444,897234543));

let tlf_marcado = llamar(34,897234543);
console.log("RESULTADO: "+tlf_marcado);

let tlf_marcado2 = llamar("tortilla",897234543);
console.log("RESULTADO: "+tlf_marcado2);
