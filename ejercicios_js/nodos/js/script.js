// Tenemos que hacer que funcionen las cosas
// - capturar el sitio donde se van a poner mis li
// - que el botón agregar al pulsar haga su magia

const lista = document.getElementById("lista")
const agregar = document.getElementById("agregar")

// function addList () {
//   const elemento = prompt("Entroduce la tarea")
//   // 1 Crear un elemento <li>
//   const li = document.createElement("li")
//   // 2 Crear un nodo de texto
//   const texto = document.createTextNode(elemento) 
//   // 3 Añadir el nodo de texto al elemento li
//   li.appendChild(texto)
//   // 4 Crear y asignar un atributo (por ejemplo un id o clase)
//   const atributo = document.createAttribute("class")
//   atributo.value = "item"
//   li.setAttributeNode(atributo)
//   // 5 añadir un ícono o subelemento
//   const span = document.createElement("span")
//   span.innerHTML = " 🙈"
//   li.appendChild(span)
//   // 6 Añadir el <li> completo a la lista
//   lista.appendChild(li)
// }

function addList () {
  const elemento = prompt("Entroduce la tarea")
  const li = `<li><span>🙈 </span>${elemento}</li>`
  lista.innerHTML += li
}

agregar.addEventListener("click", addList)



