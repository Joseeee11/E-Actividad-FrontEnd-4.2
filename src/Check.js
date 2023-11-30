import IconoCompletado from './media/iconos/circle-check-regular.svg'
import IconoHacer from './media/iconos/circle-xmark-regular.svg'

export function ButtonCheck({posicion, tareas, setTareas}){
    // console.log(posicion)
    return <button onClick={() => Check(posicion, tareas, setTareas)}> <img src={tareas[posicion].estado === true ? IconoHacer : IconoCompletado} /> </button>
}

function Check(posicion, tareas, setTareas) {
    // console.log('damos check');
    // console.log(posicion)
    let nuevasTareas = [...tareas]; // variable nueva con las tareas
    if (nuevasTareas[posicion].estado === true) {
        nuevasTareas[posicion].estado = false;
    } else {
        nuevasTareas[posicion].estado = true;
    };
    // console.log(nuevasTareas)
    setTareas(nuevasTareas) // actualizar la lista de tareas
}


