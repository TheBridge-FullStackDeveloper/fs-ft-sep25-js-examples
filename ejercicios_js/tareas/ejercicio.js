
const tareas = []

function addTask (id, descripcion) {
  const tarea = {
    id: id,
    descripcion: descripcion,
    completado: false
  }
  tareas.push(tarea)
}

addTask(1, "Ahora si que uso funciones")
addTask(2, "Añado otra tarea")



// --> Si quiero que el id 1  se complete tengo que pasar completado a true


function completarTarea(id) {
  for (let tarea of tareas) {
    if(tarea.id === id) {
      tarea.completado = true
    }
  }
}

completarTarea(1)
completarTarea(2)


function listarTareas() {
  let text = ""
  for (let tarea of tareas) {
    text += `esta es la tarea ${tarea.id} con la descripción: ${tarea.descripcion}. ¿Está compeltada?: ${tarea.completado} \n`
  }
  return text
}

console.log(listarTareas())



