// paso 3

import pokemons from "./pokemons.js"
console.log(pokemons)

// paso 4
// Tengo que hacer un bucle para poder recoger cada uno de los pokemons y ponerlo en pantalla. Quiero sacar la foto, el nombre y el tipo

// - for
/* <h2>NOMBRE</h2>
<p>TIPO</p>
<img src="URL de la imagen"></img> */

// const result = document.getElementById("result")

// for (let pokemon of pokemons) {
//     console.log(pokemon.nombre)
//     result.innerHTML += `
//         <li>
//             <h2>NOMBRE: ${pokemon.nombre}</h2>
//             <p>TIPO: ${pokemon.tipo}</p>
//             <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//         </li>
//     `
// }

// Paso 5
// const result = document.getElementById("result")

// for (let pokemon of pokemons) {
//     if(pokemon.tipo === "Agua") {
//         result.innerHTML += `
//             <li class="card">
//             <header class="cardHeader">
//                 <h2>NOMBRE: ${pokemon.nombre}</h2>
//                 <p>hp: ${pokemon.hp}</p>
//             </header>
//             <div class="image">
//                 <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//             </div>  
//                 <p>TIPO: ${pokemon.tipo}</p>
//             </li>
//         `
//     }
// }

// Funciones
// fuego, agua, electrico, planta, normal





// for (let pokemon of pokemons) {
//     if(pokemon.tipo === "Agua") {
//         agua.innerHTML += `
//             <li class="card">
//             <header class="cardHeader">
//                 <h3>NOMBRE: ${pokemon.nombre}</h3>
//                 <p>hp: ${pokemon.hp}</p>
//             </header>
//             <div class="image">
//                 <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//             </div>  
//                 <p>TIPO: ${pokemon.tipo}</p>
//             </li>
//         `
//     }
// }

const fuego = document.getElementById("fuego")
const agua = document.getElementById("agua")
const electrico = document.getElementById("electrico")
const planta = document.getElementById("planta")
const normal = document.getElementById("normal")

function getPokemonsByType(type) {
	const pokemonsFilter = []
	for (let pokemon of pokemons) {
		if(pokemon.tipo === type) {
			pokemonsFilter.push(pokemon)
		}
	}      
	return pokemonsFilter
}

function renderPokemons(placeholder, type) {
	for (let pokemon of getPokemonsByType(type)) {
		placeholder.innerHTML += `
		<li class="card">
		<header class="cardHeader">
				<h3>NOMBRE: ${pokemon.nombre}</h3>
				<p>hp: ${pokemon.hp}</p>
		</header>
		<div class="image">
				<img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
		</div>  
				<p>TIPO: ${pokemon.tipo}</p>
		</li>
		`
	}
	
}

renderPokemons(agua, "Agua")
renderPokemons(fuego, "Fuego")
renderPokemons(planta, "Planta")
renderPokemons(normal, "Normal")
renderPokemons(electrico, "Eléctrico")