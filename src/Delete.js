
export function ButtonDelete({posicion, tareas, setTareas}) {
    //pasamos la funcion delete como un manejador de eventos
    return <button onClick={() => Delete(posicion, tareas, setTareas)}> BORRAR </button> 
}

function Delete(posicion, tareas, setTareas) {
    const tareaBorrada = tareas.filter((tarea, i) => i !== posicion)
    console.log(tareaBorrada)
    setTareas(tareaBorrada) //mandamos a que actualice la lista de tareas
}