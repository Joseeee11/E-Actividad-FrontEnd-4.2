export function ButtonCheck({posicion, tareas, setTareas}){
    console.log(posicion)
    return <button onClick={() => Check(posicion, tareas, setTareas)}> LISTA </button>
}

function Check(posicion, tareas, setTareas) {
    console.log('damos check');
    console.log(posicion)
    let nuevasTareas = [...tareas]; // Crea una copia de las tareas
    // nuevasTareas[posicion] = {...nuevasTareas[posicion], estado: true};
    nuevasTareas[posicion].estado = true;
    console.log(nuevasTareas)
    setTareas(nuevasTareas) // Actualiza la lista de tareas
}

//colocar en renderizar
// <ButtonCheck posicion={i} tareas={tareas} setTareas={setTareas} />
//import { ButtonDelete } from './Delete'
