// import Papelera from './media/iconos/trash.svg'
import IconoPapelera from './media/iconos/trash-can-regular.svg'

export function ButtonDelete({posicion, tareas, setTareas}) {
    //pasamos la funcion delete como un manejador de eventos
    return <button className='delete' onClick={() => Delete(posicion, tareas, setTareas)}> <img src={IconoPapelera} alt='Borrar Tarea'/> </button> 
}

function Delete(posicion, tareas, setTareas) {
    console.log('borrando')
    const tareaBorrada = tareas.filter((tarea, i) => i !== posicion)
    console.log(tareaBorrada)
    setTareas(tareaBorrada) //mandamos a que actualice la lista de tareas
}