
// // EJERCICIO1
const titulo = document.getElementById("titulo")

titulo.innerText = "Ahora soy un <span>innerText</span>"
titulo.innerHTML = "Ahora soy un <span>innerHTML</span>"

// // EJERCICIO2
const parrafo = document.getElementById("parrafo")

parrafo.style.color = "#fff"
parrafo.style.backgroundColor = "#14a759ff"
parrafo.style.fontSize = "30px"

// //EJERCICIO3
const cambioParrafo = document.getElementById("cambioParrafo")
const boton = document.getElementById("boton")

boton.addEventListener('click', () => {
    cambioParrafo.innerText = "He cambiado, lo ves???"
    cambioParrafo.style.backgroundColor = "red"
})

// //EJERCICIO4

const btnImagen = document.getElementById("cambioImagen")
const imagen = document.getElementById("imagen")

btnImagen.addEventListener("click", () => {
    imagen.src = "https://i.pinimg.com/736x/cb/fa/e2/cbfae2aed286f1ab6c0a2251fc0fcf09.jpg"
})

//EJERCICIO5

const mouse = document.getElementById("mouse")

mouse.addEventListener("mouseover", () => {
    mouse.style.backgroundColor = "#5cd611ff"
})

mouse.addEventListener("mouseout", () => {
    mouse.style.backgroundColor = "red"
})

//EJERCICIO6

const frases = document.querySelectorAll(".frases")


for(let elemento of frases) {
  elemento.addEventListener('click', () => {
      elemento.innerText = elemento.innerText.toUpperCase()
  })
}

//EJERCICIO7

const enlace = document.getElementById("enlace")
const msg = document.getElementById("msg")

enlace.addEventListener("click", (e) => {
  e.preventDefault()
  msg.innerText = "¡No puedes salir!"
})

//EJERCICIO8

const h2 = document.querySelector("article h2")
const p = document.querySelector("article p")
const img = document.querySelector("article img")

h2.addEventListener("click", () => {
  h2.innerText = "Hechizo lanzado"
})

p.addEventListener("click", () => {
  p.style.color = "red"
  p.style.backgroundColor = "green"
})

img.addEventListener("mouseover", () => {
  img.src = "https://i.pinimg.com/736x/cb/fa/e2/cbfae2aed286f1ab6c0a2251fc0fcf09.jpg"
})

img.addEventListener("mouseout", () => {
  img.src = "https://i.pinimg.com/736x/a6/bb/c0/a6bbc01e88fb716f2502b999a8e1f5b5.jpg"
})

//BONUS

const input = document.getElementById("input")
const buttonList = document.getElementById("buttonList")
const listado = document.getElementById("listado")

buttonList.addEventListener("click", () => {
  const texto = input.value
  if(texto.trim() !== "") {
    listado.innerHTML += `<li>${texto}</li>`
    input.value = ""
  } else {
    console.log("Quieres escribir algo haz el favor")
  }
})

